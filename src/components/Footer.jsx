import BackgroundVideo from './BackgroundVideo.jsx';

function Footer({ mapUrl }) {
  return (
    <footer id="contact">
      <BackgroundVideo className="footer-bg-video" src="/videos/12322774-hd_1920_1080_30fps.mp4" />
      <div className="footer-grid">
        <div className="footer-col">
          <h4>Navigate</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#booking">Services</a></li>
            <li><a href="#shop">Gallery</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#booking">Book Now</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Information</h4>
          <ul>
            <li><a href={mapUrl} target="_blank" rel="noreferrer">Google Maps</a></li>
            <li><a href="#booking">Appointments</a></li>
            <li><a href="#stylists">Services</a></li>
            <li><a href="#contact">Location</a></li>
          </ul>
        </div>
        <div className="footer-col footer-hours">
          <h4>Location</h4>
          <ul>
            <li><span>Area</span><span>Nungambakkam</span></li>
            <li><span>City</span><span>Chennai</span></li>
            <li><span>State</span><span>Tamil Nadu</span></li>
            <li><span>Latitude</span><span>13.0589763</span></li>
            <li><span>Longitude</span><span>80.2422602</span></li>
          </ul>
        </div>
        <div className="footer-logo">SB</div>
        <div className="footer-col footer-form">
          <input type="text" placeholder="Full Name" />
          <input type="email" placeholder="Email Address" />
          <button type="button" onClick={() => window.alert('Thanks for reaching out to Shringar Beauty Salon!')}>Call To Action</button>
        </div>
      </div>
      <div className="footer-bottom">
        SHRINGAR BEAUTY SALON - NUNGAMBAKKAM CHENNAI &nbsp;|&nbsp; Nungambakkam, Chennai, Tamil Nadu &nbsp;|&nbsp; Use Google Maps for directions
      </div>
    </footer>
  );
}

export default Footer;