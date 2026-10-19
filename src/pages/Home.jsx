import React, { useState } from 'react'
import {
  ArrowRight, BookOpen, CalendarDays, CheckCircle2, ChevronDown,
  Clock3, GraduationCap, Heart, Mail, MapPin, Menu, Phone,
  School, ShieldCheck, Sparkles, Star, Trophy, Users, X
} from 'lucide-react'



const photos = {
  hero: '/images/sekolah.jpg',
  class: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=900&q=80',
  reading: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=900&q=80',
  art: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=900&q=80',
  field: 'https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=900&q=80',
  kids: 'https://images.unsplash.com/photo-1472162072942-cd5147eb3902?auto=format&fit=crop&w=900&q=80',
}

export default function Home() {
  return (
    <>
      <main>
        <section id="beranda" className="hero-section">
          <div className="hero-blob hero-blob-one" />
          <div className="hero-blob hero-blob-two" />
          <div className="container-page hero-grid">
            <div className="hero-copy">
              <div className="eyebrow"><Sparkles size={15} /> Selamat datang di sekolah kami</div>
              <h1>SDN 10<span> BOMBANA</span></h1>
              <p className="hero-description">DESA WUMBUBURO, Kec. Kabaena Timur, Kab. Bombana, Prov. Sulawesi Tenggara</p>
              <div className="flex flex-wrap gap-3">
                <a className="btn-primary" href="#profil">Kenali Sekolah <ArrowRight size={17} /></a>
                </div>
            </div>
            <div className="hero-visual">
              <div className="hero-image-frame"><img src={photos.hero} alt="Suasana belajar anak-anak" /></div>
              <div className="doodle-star">✳</div>
            </div>
          </div>
        </section>

        <section id="profil" className="section-pad">
          <div className="container-page about-grid">
            <div className="about-visual">
              <img className="about-main-image" src="/images/fotbar.jpg" alt="fotobersama" loading="lazy" />
              <div className="about-small-image"><img src="/images/Pramuka.jpg" alt="Pramuka" loading="lazy" /></div>
            </div>
            <div className="about-copy">
              <div className="eyebrow"><span className="eyebrow-dot" /> Tentang sekolah</div>
              <h2>Tumbuh, Belajar <span>Berprestasi</span></h2>
              <p className="section-description">SDN 10 Bombana adalah sekolah dasar berstatus negeri dengan akreditasi B yang terletak di Desa Wumbuburo, Kecamatan Kabaena Timur, Kabupaten Bombana, Sulawesi Tenggara. Sekolah ini telah berdiri sejak tahun 1976 dan menyelenggarakan kegiatan belajar mengajar pada pagi hari. Dengan luas lahan mencapai 3.250 meter persegi, sekolah ini menjadi salah satu sarana pendidikan dasar yang melayani masyarakat di wilayah Kabaena Timur dan sekitarnya.</p>
            </div>
          </div>
        </section>

        <section id="galeri" className="section-pad gallery-section">
          <div className="container-page">
            <div className="section-heading text-center"><div className="eyebrow justify-center"><span className="eyebrow-dot" /><h2>Potret <span>Kebersamaan</span></h2></div></div>
            <div className="gallery-grid">
              <div className="gallery-item gallery-tall"><img src="/images/Kebersamaan.jpg" alt="kebersamaan" loading="lazy" /><span>Kebersamaan</span></div>
              <div className="gallery-item"><img src="/images/Belajar.jpg" alt="Belajar" loading="lazy" /><span>Belajar bersama</span></div>
              <div className="gallery-item"><img src="/images/Nasionalisme.jpg" alt="Nasionalisme" loading="lazy" /> <span>Nasionalisme</span></div>
              <div className="gallery-item"><img src="/images/Pramuka.jpg" alt="Pramuka" loading="lazy" /><span>Pramuka</span></div>
              <div className="gallery-item"><img src="/images/Kesenian.jpg" alt="Kesenian" loading="lazy" /><span>Kesenian</span></div>
            </div>
         </div>
        </section>

        <section className="quote-section">
          <div className="container-page quote-inner"><div className="quote-mark">“</div><p>Setiap anak punya cahaya. Tugas kita adalah membantu mereka menemukannya dan berani bersinar.</p><span>— SDN 10 Bombana —</span><div className="quote-spark quote-spark-one">✳</div><div className="quote-spark quote-spark-two">✦</div></div>
        </section>

      </main>
    </>
  )
}
