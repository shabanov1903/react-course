import messengerReducer, { changeId } from './slices/messenger'

describe('Messenger Reducer Tests', () => {
  test('Checking initial value', () => {
    expect(messengerReducer(undefined, { type: undefined })).toEqual({
      chatList: [],
      chatId: 1
    })
  })

  test('Checking writing values', () => {
    const previous = {
      chatList: [],
      chatId: 1
    }
    expect(messengerReducer(previous, changeId(4))).toEqual({
      chatList: [],
      chatId: 4
    })
  })
});
