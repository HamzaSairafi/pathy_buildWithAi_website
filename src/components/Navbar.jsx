import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { navigationItems } from '../data/content'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setIsOpen(false)
    }

    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [])

  const closeMenu = () => setIsOpen(false)

  return (
    <header className="site-header">
      <div className="container navbar">
        <a className="wordmark" href="#home" onClick={closeMenu} aria-label="باثي، العودة إلى الرئيسية">
          <span className="wordmark-mark" aria-hidden="true">ب</span>
          <span>باثي <bdi>| Pathy</bdi></span>
        </a>

        <nav className="desktop-nav" aria-label="التنقل الرئيسي">
          <ul>
            {navigationItems.map((item) => (
              <li key={item.href}>
                <a href={item.href} onClick={closeMenu}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <a className="button button-primary navbar-cta" href="https://pathy.live/" target="_blank" rel="noreferrer noopener">
          ابدأ الآن
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-label={isOpen ? 'إغلاق القائمة' : 'فتح القائمة'}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          onClick={() => setIsOpen((current) => !current)}
        >
          {isOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>

      {isOpen && (
        <nav id="mobile-menu" className="mobile-nav" aria-label="قائمة التنقل للجوال">
          <div className="container">
            <ul>
              {navigationItems.map((item) => (
                <li key={item.href}>
                  <a href={item.href} aria-label={`${item.label} - قائمة الجوال`} onClick={closeMenu}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <a className="button button-primary" href="https://pathy.live/" target="_blank" rel="noreferrer noopener" onClick={closeMenu}>
              ابدأ الآن
            </a>
          </div>
        </nav>
      )}
    </header>
  )
}

export default Navbar
