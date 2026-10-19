import { Link } from 'react-router-dom'
import { School } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container-page footer-main">
        <Link to="/" className="brand footer-brand">
          <span className="brand-mark"><School size={24} /></span>
          <span>
            <strong className="block text-lg">SDN 10 Bombana</strong>
            <small className="text-xs text-slate-400">Tumbuh · Belajar · Berprestasi</small>
          </span>
        </Link>
        <p>.</p>
        <div className="footer-links">
          <Link to="/">Beranda</Link>
          <Link to="/profil">Profil</Link>
          <Link to="/galeri">Galeri</Link>
          <Link to="/kontak">Kontak</Link>
        </div>
      </div>
      <div className="container-page footer-bottom">
        <span>© {new Date().getFullYear()} SDN 10 Bombana. All Rights Reserved.</span>
      </div>
    </footer>
  )
}
