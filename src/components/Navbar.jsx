import { Link, NavLink } from 'react-router-dom'
import { School, Menu, X } from 'lucide-react'
import { useState } from 'react'

const links = [
  { label: 'Beranda', to: '/' },
  { label: 'Profil', to: '/profil' },
  { label: 'Galeri', to: '/galeri' },
  { label: 'Kontak', to: '/kontak' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="site-header sticky top-0 z-40">
      <div className="container-page flex h-[78px] items-center justify-between gap-4">
        <Link to="/" className="brand" onClick={() => setOpen(false)}>
          <span className="brand-mark"><School size={25} strokeWidth={2.3} /></span>
          <span className="leading-tight">
            <strong className="block text-base sm:text-lg">SDN 10 Bombana</strong>
            <small className="block text-[10px] font-semibold uppercase tracking-[.13em] text-slate-500 sm:text-[11px]">
              Tumbuh · Belajar · Berprestasi
            </small>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Navigasi utama">
          {links.map(link => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) => `nav-link ${isActive ? 'nav-link-active' : ''}`}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <button
          className="mobile-menu-button lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Tutup menu' : 'Buka menu'}
          aria-expanded={open}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <nav className="mobile-nav lg:hidden" aria-label="Navigasi mobile">
          {links.map(link => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  )
}
