function BookStrip({ mapUrl }) {
  return (
    <section className="book-strip">
      <div className="book-strip-content">
        <h2>Ready to Visit?</h2>
        <p>Find us at Shringar Beauty Salon - Nungambakkam Chennai</p>
        <a href={mapUrl} className="btn-outline" target="_blank" rel="noreferrer">Open Maps</a>
      </div>
      <div className="book-strip-banner">
        <span>PLAN YOUR SALON VISIT IN NUNGAMBAKKAM, CHENNAI &nbsp;&nbsp;&bull;&nbsp;&nbsp; OPEN GOOGLE MAPS FOR DIRECTIONS AND CURRENT DETAILS &nbsp;&nbsp;&bull;&nbsp;&nbsp;</span>
      </div>
    </section>
  );
}

export default BookStrip;