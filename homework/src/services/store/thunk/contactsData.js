import { update } from 'services/store/slices/contacts'

export const contactsData = (quantity) => async (dispatch, getState) => {
  const url = `https://fakerapi.it/api/v1/persons?_quantity=${quantity}`
  try {
    const response = await fetch(url);
    const json = await response.json();
    const data = json.data;
    dispatch(update(data));
  } catch(e) {
    console.error(`Ошибка: ${e.message}`);
  }
}
