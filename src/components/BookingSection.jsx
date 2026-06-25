import BackgroundVideo from './BackgroundVideo.jsx';

function BookingSection() {
  const handleBookingSubmit = (event) => {
    event.preventDefault();
    window.alert('Thanks! Please open Google Maps or contact the salon to confirm your appointment.');
  };

  return (
    <section className="booking" id="booking">
      <BackgroundVideo className="booking-bg-video" src="/videos/7509480-hd_1920_1080_25fps.mp4" />
      <div className="booking-services">
        <div className="service-pill">
          <div className="service-icon">&#9986;</div>
          <div>
            <div className="label">Hair Styling</div>
            <div className="desc">Cut, finish, and styling.</div>
          </div>
          <div className="price">Enquire</div>
        </div>
        <div className="service-pill">
          <div className="service-icon">&#9986;</div>
          <div>
            <div className="label">Skin Care</div>
            <div className="desc">Facial and grooming care.</div>
          </div>
          <div className="price">Enquire</div>
        </div>
        <div className="service-pill">
          <div className="service-icon">&#9986;</div>
          <div>
            <div className="label">Makeup</div>
            <div className="desc">Bridal and party looks.</div>
          </div>
          <div className="price">Enquire</div>
        </div>
      </div>

      <div className="booking-grid">
        <div className="booking-photo">
          <div className="booking-photo-caption">
            <span className="tag">Appointment</span>
            <h3>Schedule Your<br />Salon Visit</h3>
          </div>
        </div>
        <form className="booking-form" onSubmit={handleBookingSubmit}>
          <input type="text" placeholder="First Name" required />
          <input type="text" placeholder="Last Name" required />
          <input type="tel" placeholder="Phone Number" required />
          <input type="email" placeholder="Email" required />
          <select required defaultValue="">
            <option value="" disabled>Service</option>
            <option>Hair Styling</option>
            <option>Facial / Skin Care</option>
            <option>Threading / Waxing</option>
            <option>Bridal / Party Makeup</option>
          </select>
          <select required defaultValue="">
            <option value="" disabled>Visit Type</option>
            <option>First Visit</option>
            <option>Regular Appointment</option>
            <option>Event / Occasion</option>
          </select>
          <input type="datetime-local" placeholder="Date & Time" className="full" />
          <textarea placeholder="Write a short note" className="full"></textarea>
          <button type="submit">Make an Appointment</button>
        </form>
      </div>
    </section>
  );
}

export default BookingSection;