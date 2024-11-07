import React from "react";
import "../CSS/platform.css"; 

const Platform = () => {
  return (
    <div className="platform-container">
     
      <header className="navbar">
        <div className="logo">Play B<span className="highlight">O</span>X</div>
        <nav>
          <ul>
            <li>Home</li>
            <li>Movies</li>
            <li>Webseries</li>
            <li>Platform</li>
          </ul>
        </nav>
        <div className="user-avatar">
          <img src="/path-to-avatar" alt="User" />
        </div>
      </header>

      <div className="services-container">
        <div className="service">Netflix</div>
        <div className="service">Prime Video</div>
        <div className="service">Disney+ Hotstar</div>
        <div className="service">MX Player</div>
        <div className="service">ZEE5</div>
        <div className="service">Voot</div>
      </div>

      <section className="movie-section">
        <div className="section-header">
          <h2>Hollywood Movies</h2>
          <button className="see-all">See all</button>
        </div>
        <div className="movie-list">
          <div className="movie-item">
            <img src="/path-to-image" alt="WandaVision" />
            <p>WandaVision</p>
          </div>
          <div className="movie-item">
            <img src="/path-to-image" alt="Bandhobi" />
            <p>Bandhobi</p>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-links">
            <h3>Play Box</h3>
            <ul>
              <li>Home</li>
              <li>Movies</li>
              <li>Sports</li>
              <li>Webseries</li>
              <li>Platform</li>
            </ul>
          </div>
          <div className="connect-with-us">
            <h3>Connect With Us</h3>
            <div className="social-icons">
              <i className="icon-facebook"></i>
              <i className="icon-linkedin"></i>
              <i className="icon-instagram"></i>
              <i className="icon-twitter"></i>
            </div>
          </div>
          <div className="support">
            <h3>Support</h3>
            <ul>
              <li>Help Center</li>
              <li>Terms of Use</li>
              <li>Privacy Policy</li>
              <li>Content Complaints</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Platform;
