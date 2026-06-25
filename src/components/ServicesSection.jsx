import BackgroundVideo from './BackgroundVideo.jsx';

function ServicesSection() {
  return (
    <section className="stylists video-section service-video-section" id="stylists">
      <BackgroundVideo className="section-bg-video" src="/videos/9218215-hd_1920_1080_30fps.mp4" />
      <div className="section-video-overlay"></div>
      <span className="eyebrow">Our Services</span>
      <h2>Beauty Services At Shringar</h2>
      <div className="stylist-grid">
        <div className="stylist-card">
          <div className="photo"></div>
          <div className="name">Hair Services</div>
          <div className="role">Cut, style, finish</div>
        </div>
        <div className="stylist-card">
          <div className="photo"></div>
          <div className="name">Beauty Care</div>
          <div className="role">Skin and grooming</div>
        </div>
        <div className="stylist-card">
          <div className="photo"></div>
          <div className="name">Occasion Makeup</div>
          <div className="role">Bridal and party looks</div>
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;