/* eslint-disable no-undef */
import { render } from '@testing-library/react'
import Card from './index'

test('renders correctly', () => {
  const { queryByTestId } = render(<Card />)
  expect(queryByTestId('card')).toBeTruthy()
})
