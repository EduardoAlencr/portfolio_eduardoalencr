import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from '../layout/Navbar'

describe('Navbar', () => {
  it('abre e fecha o menu mobile', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const button = screen.getByRole('button', { name: 'Abrir menu' })
    expect(button).toHaveAttribute('aria-expanded', 'false')
    expect(document.getElementById('mobile-menu')).not.toBeInTheDocument()

    await user.click(button)
    expect(button).toHaveAttribute('aria-expanded', 'true')
    expect(document.getElementById('mobile-menu')).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Fechar menu' }))
    expect(document.getElementById('mobile-menu')).not.toBeInTheDocument()
  })
})
