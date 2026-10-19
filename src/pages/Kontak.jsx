import { ArrowRight, Mail, MapPin, Phone } from 'lucide-react'

export default function Kontak() {
  return (
    <main>
      <section className="inner-hero">
        <div className="container-page inner-hero-grid">
          <div>
            <div className="eyebrow"><span className="eyebrow-dot" /> Hubungi Kami</div>
            <h1>Kontak &amp; <span>Lokasi Sekolah</span></h1>
            <p>Informasi alamat dan lokasi SDN 10 Bombana. Silakan hubungi pihak sekolah untuk informasi lebih lanjut.</p>
          </div>
          <div className="inner-hero-image"><img src="/images/sekolah.jpg" alt="Lingkungan SDN 10 Bombana" /></div>
        </div>
      </section>
      <section className="section-pad contact-section">
        <div className="container-page">
          <section id="kontak" className="section-pad contact-section">
          <div className="container-page">
            <div className="section-heading text-center">
              <div className="eyebrow justify-center">
              </div>
              <h2>HUBUNGI <span>KAMI</span></h2>
              <p className="section-description mx-auto">
                Informasi alamat dan lokasi sekolah.
              </p>
            </div>

            <div className="contact-grid">
              <div className="contact-copy">
                <h2>Informasi <span>Sekolah</span></h2>
                <p className="section-description">
                  Silakan kunjungi atau hubungi sekolah untuk mendapatkan
                  informasi lebih lanjut mengenai kegiatan pendidikan.
                </p>

                <div className="contact-info-list">
                  <div className="contact-info-item">
                    <span><MapPin size={20} /></span>
                    <div>
                      <strong>Alamat Sekolah</strong>
                      <p>
                        Desa Wumbuburo, Kecamatan Kabaena Timur,
                        Kabupaten Bombana, Sulawesi Tenggara.
                      </p>
                    </div>
                  </div>

                  <div className="contact-info-item">
                    <span><Phone size={20} /></span>
                    <div>
                      <strong>Nomor Telepon</strong>
                      <p>-</p>
                    </div>
                  </div>

                  <div className="contact-info-item">
                    <span><Mail size={20} /></span>
                    <div>
                      <strong>Email Sekolah</strong>
                      <p>sdn10bombana@gmail.com</p>
                    </div>
                  </div>
                </div>

                <a
                  href="https://www.google.com/maps/search/?api=1&query=SDN+10+Bombana+Desa+Wumbuburo+Kabaena+Timur"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary contact-map-button"
                >
                  <MapPin size={17} />
                  Buka Google Maps
                  <ArrowRight size={17} />
                </a>
              </div>

              <div className="location-card">
                <div className="location-card-header">
                  <span className="location-icon">
                    <MapPin size={21} />
                  </span>
                  <div>
                    <strong>Lokasi Sekolah</strong>
                    <p>SDN 10 Bombana</p>
                  </div>
                </div>

                <div className="map-frame">
                  <iframe
                    title="Peta lokasi SDN 10 Bombana"
                    src="https://maps.google.com/maps?q=SDN%2010%20Bombana%20Desa%20Wumbuburo%20Kabaena%20Timur&t=&z=14&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                  />
                </div>

                <div className="location-card-footer">
                  <MapPin size={17} />
                  <p>
                    Desa Wumbuburo, Kabaena Timur,
                    Kabupaten Bombana
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        </div>
      </section>
    </main>
  )
}
