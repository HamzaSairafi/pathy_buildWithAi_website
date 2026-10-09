import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { beforeEach, describe, expect, test } from 'vitest'
import App from './App'

describe('Pathy showcase', () => {
  beforeEach(() => {
    render(<App />)
  })

  test('renders the complete Arabic landing-page structure', () => {
    expect(screen.getByRole('heading', { level: 1, name: 'لا تبدأ فقط.. استمر' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'ما هي باثي؟' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'ليش تختار باثي؟' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'كيف تبدأ رحلتك مع باثي؟' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'برامج تساعدك تتعلّم وتنجز' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'الأسئلة الشائعة' })).toBeInTheDocument()
    expect(screen.getByText(/هذا الموقع نموذج تعليمي غير رسمي/)).toBeInTheDocument()
  })

  test('mobile navigation exposes and closes its menu', async () => {
    const user = userEvent.setup()
    const toggle = screen.getByRole('button', { name: 'فتح القائمة' })

    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')
    await user.click(screen.getByRole('link', { name: 'عن باثي' }))
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
  })

  test('FAQ questions expand and collapse accessibly', async () => {
    const user = userEvent.setup()
    const question = screen.getByRole('button', { name: 'ما هي باثي؟' })

    expect(question).toHaveAttribute('aria-expanded', 'false')
    await user.click(question)
    expect(question).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByText(/تطوير مهاراتك والاستمرار/)).toBeVisible()
    await user.click(question)
    expect(question).toHaveAttribute('aria-expanded', 'false')
  })

  test('program cards link safely to the official learning portal', () => {
    const programs = screen.getByLabelText('البرامج التعليمية')
    const links = within(programs).getAllByRole('link', { name: /اكتشف البرنامج/ })

    expect(links).toHaveLength(2)
    expect(links[0]).toHaveAttribute('href', 'https://learn.pathy.live/programs/ai-development')
    expect(links[1]).toHaveAttribute('href', 'https://learn.pathy.live/programs/git-github')
    links.forEach((link) => {
      expect(link).toHaveAttribute('target', '_blank')
      expect(link).toHaveAttribute('rel', 'noreferrer noopener')
    })
  })
})
