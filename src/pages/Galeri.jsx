import { useState } from 'react'
import { X, ZoomIn, Images } from 'lucide-react'

const galleryPhotos = [
  {
    src: '/images/Kebersamaan.jpg',
    title: 'Kebersamaan Warga Sekolah',
    description: 'Dokumentasi kebersamaan warga sekolah dalam kegiatan bersama. Momen ini menggambarkan semangat kekeluargaan dan kerja sama di lingkungan SDN 10 Bombana.',
    category: 'Kegiatan Sekolah',
  },
  {
    src: '/images/Belajar.jpg',
    title: 'Kegiatan Belajar',
    description: 'Suasana kegiatan belajar yang menjadi bagian dari aktivitas sehari-hari peserta didik untuk mengembangkan pengetahuan dan keterampilan.',
    category: 'Pembelajaran',
  },
  {
    src: '/images/Nasionalisme.jpg',
    title: 'Penanaman Nasionalisme',
    description: 'Dokumentasi kegiatan yang berkaitan dengan semangat kebangsaan, cinta tanah air, serta pembiasaan sikap menghargai simbol dan nilai kebangsaan.',
    category: 'Nasionalisme',
  },
  {
    src: '/images/Pramuka.jpg',
    title: 'Kegiatan Pramuka',
    description: 'Kegiatan kepramukaan sebagai ruang untuk melatih kedisiplinan, kemandirian, tanggung jawab, dan kerja sama antarsiswa.',
    category: 'Ekstrakurikuler',
  },
  {
    src: '/images/Kesenian.jpg',
    title: 'Kegiatan Kesenian',
    description: 'Kegiatan seni yang memberi kesempatan kepada peserta didik untuk mengekspresikan kreativitas, mengembangkan bakat, dan menghargai karya.',
    category: 'Kreativitas',
  },
  {
    src: '/images/fotbar.jpg',
    title: 'Foto Bersama',
    description: 'Foto bersama sebagai dokumentasi kebersamaan dan kenangan dalam kegiatan di lingkungan SDN 10 Bombana.',
    category: 'Dokumentasi',
  },
]

export default function Galeri() {
  const [selectedPhoto, setSelectedPhoto] = useState(null)

  return (
    <main>
      <section className="inner-hero gallery-page-hero">
        <div className="container-page inner-hero-grid">
          <div>
            <div className="eyebrow"><span className="eyebrow-dot" /> Dokumentasi Sekolah</div>
            <h1>Potret <span>Kebersamaan</span></h1>
            <p>
              Kumpulan dokumentasi kegiatan belajar, kebersamaan, nasionalisme,
              pramuka, dan kesenian di SDN 10 Bombana.
            </p>
            <div className="gallery-count"><Images size={18} /> {galleryPhotos.length} foto dokumentasi</div>
          </div>
          <div className="inner-hero-image">
            <img src="/images/Kebersamaan.jpg" alt="Kebersamaan warga sekolah" />
          </div>
        </div>
      </section>

      <section className="section-pad gallery-page-section">
        <div className="container-page">
          <div className="gallery-page-heading">
            <div>
              <div className="eyebrow"><span className="eyebrow-dot" /> Album Foto</div>
              <h2>Kenangan di <span>Sekolah</span></h2>
            </div>
            <p className="section-description">
              Pilih foto untuk melihat gambar lebih besar beserta keterangannya.
            </p>
          </div>

          <div className="gallery-page-grid">
            {galleryPhotos.map((photo, index) => (
              <button
                className={`gallery-page-card ${index === 0 ? 'gallery-page-card-featured' : ''}`}
                key={photo.src}
                onClick={() => setSelectedPhoto(photo)}
                aria-label={`Lihat foto ${photo.title}`}
              >
                <div className="gallery-page-image">
                  <img src={photo.src} alt={photo.title} loading="lazy" />
                  <span className="gallery-zoom"><ZoomIn size={19} /></span>
                </div>
                <div className="gallery-page-card-content">
                  <span className="gallery-category">{photo.category}</span>
                  <h3>{photo.title}</h3>
                  <p>{photo.description}</p>
                  <span className="gallery-read-more">Lihat foto <ZoomIn size={14} /></span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {selectedPhoto && (
        <div className="photo-lightbox" role="presentation" onClick={() => setSelectedPhoto(null)}>
          <div className="photo-lightbox-panel" role="dialog" aria-modal="true" aria-label={selectedPhoto.title} onClick={event => event.stopPropagation()}>
            <button className="photo-lightbox-close" onClick={() => setSelectedPhoto(null)} aria-label="Tutup foto">
              <X size={23} />
            </button>
            <img src={selectedPhoto.src} alt={selectedPhoto.title} />
            <div className="photo-lightbox-caption">
              <span className="gallery-category">{selectedPhoto.category}</span>
              <h2>{selectedPhoto.title}</h2>
              <p>{selectedPhoto.description}</p>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}
