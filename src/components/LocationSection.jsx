function LocationSection({ mapUrl }) {
  return (
    <section className="review-spotlight">
      <div>
        <span className="eyebrow">Find Us</span>
        <h2>Shringar Beauty Salon - Nungambakkam Chennai</h2>
      </div>
      <div className="review-card">
        <p>Located in Nungambakkam, Chennai, Tamil Nadu. The Google Maps listing points to coordinates 13.0589763, 80.2422602 for directions and current public details.</p>
        <div className="reviewer">
          <div className="avatar"></div>
          <div>
            <div className="name">Nungambakkam, Chennai</div>
            <div className="role">Google Maps Listing</div>
          </div>
        </div>
        <div className="review-nav">
          <a href={mapUrl} target="_blank" rel="noreferrer"><button type="button">&larr;</button></a>
          <a href={mapUrl} target="_blank" rel="noreferrer"><button type="button">&rarr;</button></a>
        </div>
      </div>
    </section>
  );
}

export default LocationSection;