function TeamPreview() {
  return (
    <>
      <section className="team-intro">
        <h2>Salon Care For Every Occasion</h2>
        <p>Hair, skin, makeup, and everyday grooming.</p>
        <a href="#stylists" className="btn-dark">View Services</a>
      </section>

      <div className="team-grid">
        <div className="team-card"><div className="face"></div></div>
        <div className="team-card"><div className="face"></div></div>
        <div className="team-card"><div className="face"></div></div>
      </div>
    </>
  );
}

export default TeamPreview;