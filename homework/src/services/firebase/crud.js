import { collection, query, where, getDocs, addDoc, orderBy, limit, deleteDoc, doc } from "firebase/firestore";
import { firestore } from "./firebase";

export const addDataToCollection = async(data, collectionName) => {
    try {
        await addDoc(collection(firestore, collectionName), data);
    }
    catch (e) {
        console.error(`Ошибка: ${e.message}`);
    }
}

export const addChat = async(data) => await addDataToCollection(data, 'chats');
export const addMessage = async(data) => await addDataToCollection(data, 'messages');

export const getData = async(id, collectionName, equalField) => {
    try {
        const q = query(collection(firestore, collectionName), where(equalField, "==", id));
        const response = await getDocs(q);
        return response;
    }
    catch (e) {
        console.error(`Ошибка: ${e.message}`);
    }
}

export const getAccount = async(id) => await getData(id, 'accounts', '_id');
export const getChats = async(id) => await getData(id, 'chats', 'accountId');
export const getChatById = async(id) => await getData(id, 'chats', '_id');
export const getMessages = async(id) => await getData(id, 'messages', 'chatId');

export const getMaxChatId = async() => {
    try {
        const q = query(collection(firestore, 'chats'), orderBy('_id', 'desc'), limit(1));
        const response = await getDocs(q);
        return response.docs.map(e => e.data()).find(x => true)['_id'];
    }
    catch (e) {
        console.error(`Ошибка: ${e.message}`);
    }
}

export const deleteChat = async(id) => {
    try {
        const chatResponse = await getChatById(id);
        const refChatId = chatResponse.docs.find(x => true).ref.id;
        await deleteDoc(doc(firestore, 'chats', refChatId));
        const messagesResponse = await getMessages(id);
        const messages = messagesResponse.docs;
        for (let i = 0; i < messages.length; i++) {
            const refMessageId = messages[i].ref.id;
            await deleteDoc(doc(firestore, 'messages', refMessageId));
        }
    }
    catch (e) {
        console.error(`Ошибка: ${e.message}`);
    }
}
