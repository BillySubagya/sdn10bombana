import {
  BookOpen,
  MapPin,
  School,
  Ruler,
  BadgeCheck,
  Wifi,
  Zap,
  Clock3,
  GraduationCap,
  PlugZap,
} from 'lucide-react'

const identity = [
  { icon: School, label: 'Nama Sekolah', value: 'SDN 10 Bombana' },
  {
    icon: MapPin,
    label: 'Alamat',
    value: 'Desa Wumbuburo, Kecamatan Kabaena Timur, Kabupaten Bombana, Sulawesi Tenggara',
  },
  { icon: Ruler, label: 'Luas Lahan', value: '3.250 m²' },
  { icon: BadgeCheck, label: 'Akreditasi', value: 'B' },
  { icon: School, label: 'Status Sekolah', value: 'Negeri' },
  {
    icon: BookOpen,
    label: 'NPSN',
    value: (
      <a
        href="https://referensi.data.kemendikdasmen.go.id/pendidikan/npsn/40402486"
        target="_blank"
        rel="noreferrer"
      >
        40402486
      </a>
    ),
  },
  { icon: GraduationCap, label: 'Bentuk Pendidikan', value: 'SD' },
  { icon: BookOpen, label: 'Kurikulum', value: 'Kurikulum SD Merdeka' },
  { icon: Clock3, label: 'Penyelenggaraan', value: 'Pagi/6 hari' },
  { icon: Wifi, label: 'Akses Internet', value: 'Dedicated' },
  { icon: Zap, label: 'Sumber Listrik', value: 'PLN' },
  { icon: PlugZap, label: 'Daya Listrik', value: '1.300 VA' },
]

export default function Profil() {
  return (
    <main>
      <section className="inner-hero">
        <div className="container-page inner-hero-grid">
          <div>
            <div className="eyebrow"><span className="eyebrow-dot" /> Profil Sekolah</div>
            <h1>Mengenal Lebih Dekat <span>SDN 10 Bombana</span></h1>
            <p>
              Mengenal identitas, perjalanan, dan lingkungan pendidikan SDN 10 Bombana
              di Desa Wumbuburo, Kecamatan Kabaena Timur.
            </p>
          </div>
          <div className="inner-hero-image">
            <img src="/images/fotbar.jpg" alt="Foto bersama warga SDN 10 Bombana" />
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-page profile-intro-grid">
          <div className="profile-photo-stack">
            <img className="profile-photo-main" src="/images/sekolah.jpg" alt="Lingkungan SDN 10 Bombana" />
            <img className="profile-photo-small" src="/images/Pramuka.jpg" alt="Kegiatan pramuka SDN 10 Bombana" />
          </div>
          <div className="profile-text">
            <div className="eyebrow"><span className="eyebrow-dot" /> Tentang Kami</div>
            <h2>Tempat belajar dan <span>bertumbuh bersama.</span></h2>
            <p>
              SDN 10 Bombana merupakan sekolah dasar negeri yang berlokasi di Desa
              Wumbuburo, Kecamatan Kabaena Timur, Kabupaten Bombana, Provinsi Sulawesi
              Tenggara. Sekolah menyelenggarakan kegiatan belajar mengajar pada pagi hari.
            </p>
            <p>
              Sekolah menjadi bagian penting dalam mendukung pendidikan dasar masyarakat
              sekitar. Melalui kegiatan pembelajaran dan kegiatan pengembangan diri,
              peserta didik diharapkan dapat mengembangkan pengetahuan, keterampilan,
              karakter, serta sikap saling menghargai.
            </p>
          </div>
        </div>
      </section>

      <section className="section-pad profile-identity-section">
        <div className="container-page">
          <div className="section-heading text-center">
            <div className="eyebrow justify-center"><span className="eyebrow-dot" /> Identitas Sekolah</div>
            <h2>Informasi <span>SDN 10 Bombana</span></h2>
            <p className="section-description mx-auto">Ringkasan identitas dan informasi sekolah.</p>
          </div>
          <div className="identity-grid">
            {identity.map(({ icon: Icon, label, value }) => (
              <article className="identity-card" key={label}>
                <span className="identity-icon"><Icon size={22} /></span>
                <div>
                  <small>{label}</small>
                  <strong>{value}</strong>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
