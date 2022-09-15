import { render } from '@testing-library/react'
import React from 'react'
import Form from './Form';
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux';

describe('Form Component Tests', () => {
  const initialState = { messenger: { chatId: 1 } }
  const mockStore = configureStore()
  
  it('Check values', () => {
    let store = mockStore(initialState)
    const { queryByText } = render(<Provider store={store}><Form/></Provider>)

    expect(queryByText('Отправить')).not.toBeNull()
  })
})
