import { render, screen } from '@testing-library/react'
import React from 'react'
import Chat from './Chat';

describe('Chat Component Tests', () => {
  test('Find values', () => {
    const list = [{
      author: 'Автор',
      text: 'Текст',
      sender: 'Отправитель',
      time: '2022-09-15',
      chatId: 1
    }]
    render(<Chat list={list} />)
    expect(screen.queryByText('Автор')).toBeInTheDocument()
  })
});
