import BackgroundVideo from './BackgroundVideo.jsx';

function AboutSection() {
  return (
    <section className="intro video-section" id="about">
      <BackgroundVideo className="section-bg-video" src="/videos/7291967-uhd_3840_2160_25fps.mp4" />
      <div className="section-video-overlay"></div>
      <div className="intro-left">
        <span className="eyebrow">Based in Nungambakkam, Chennai</span>
        <h2>A local beauty destination for hair, skin, makeup, grooming, and occasion-ready salon services.</h2>
      </div>
      <div className="intro-right">
        <p><strong>Shringar Beauty Salon - Nungambakkam Chennai</strong> is listed on Google Maps at the heart of Nungambakkam, serving clients who want neat finishing, thoughtful care, and a confident salon experience.</p>
        <p>Come in for a refresh, a full beauty session, or styling before an important day. Each visit is focused on comfort, clean detailing, and a look that feels true to you.</p>
        <div className="intro-photos">
          <div className="photo-card curl"><span className="tag">Hair styling</span></div>
          <div className="photo-card balayage"><span className="tag">Beauty care</span></div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;