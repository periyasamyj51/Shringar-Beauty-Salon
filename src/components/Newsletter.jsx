function Newsletter() {
  const handleSubscribe = (event) => {
    event.preventDefault();
    window.alert('Thanks for staying in touch with Shringar Beauty Salon!');
  };

  return (
    <section className="newsletter">
      <span className="eyebrow">Keep in Touch</span>
      <h2>Plan Your Next Salon Visit</h2>
      <form className="newsletter-form" onSubmit={handleSubscribe}>
        <input type="email" placeholder="Enter Your Email" required />
        <button type="submit">Subscribe Now</button>
      </form>
      <p className="newsletter-sub">Use Google Maps for directions and current listing details.</p>
    </section>
  );
}

export default Newsletter;