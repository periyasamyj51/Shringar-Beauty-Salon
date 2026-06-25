function Navbar({ mapUrl }) {
  return (
    <nav className="nav">
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#shop">Gallery</a></li>
      </ul>
      <div className="logo">
        <span className="small">SHRINGAR</span>
        <span className="big">BEAUTY</span>
        <span className="small">SALON</span>
      </div>
      <ul className="nav-links">
        <li><a href="#testimonials">Care</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <a href={mapUrl} className="nav-cta" target="_blank" rel="noreferrer">Open Maps</a>
      <button className="nav-toggle" aria-label="Menu"><span></span><span></span><span></span></button>
    </nav>
  );
}

export default Navbar;