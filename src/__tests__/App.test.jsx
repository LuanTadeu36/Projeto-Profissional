import { render, screen } from '@testing-library/react'
import App from '../App'

test('exibe logo NO CORRE no header', () => {
  render(<App />)
  expect(screen.getByText(/NO CORRE/i)).toBeInTheDocument()
})
