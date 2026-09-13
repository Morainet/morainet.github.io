import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useTheme } from '../theme.jsx'

export default function Nav() {
  const [open, setOpen] = useState(false)
  const { theme, toggle } = useTheme()
  const close = () => setOpen(false)

  return (
    <header className="site-header">
      <nav className="nav container">
        <NavLink to="/" className="brand" onClick={close}>Morainet</NavLink>
        <button className="nav-toggle" aria-label="菜单" onClick={() => setOpen((o) => !o)}>☰</button>
        <ul className={`nav-links ${open ? 'open' : ''}`}>
          <li><NavLink to="/" end onClick={close}>首页</NavLink></li>
          <li><NavLink to="/projects" onClick={close}>项目</NavLink></li>
          <li><NavLink to="/about" onClick={close}>关于</NavLink></li>
          <li><a href="https://github.com/Morainet" target="_blank" rel="noopener">GitHub</a></li>
          <li>
            <button className="theme-toggle" onClick={toggle} aria-label="切换深色/浅色模式">
              {theme === 'dark' ? '☀️' : '🌙'}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  )
}
