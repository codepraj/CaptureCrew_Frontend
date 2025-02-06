import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faInstagram, faTwitter, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="container-fluid my-5">
      <footer className="text-center bg-dark text-lg-start text-white">
        <div className="container p-4 pb-0">
          <section>
            <div className="row">
              
              {/* About Section */}
              <div className="col-lg-4 col-md-6 mb-4">
                <h5 className="text-uppercase">Capture Crew</h5>
                <p className="text-justify">
                  "Capture your precious moments with Capture Crew! Your one-stop destination for professional photography services, ensuring every memory is picture-perfect. Let us frame your story today!"
                </p>
              </div>

              {/* About Us Link */}
              <div className="col-lg-2 col-md-6 mb-4">
                <h5 className="text-uppercase">About Us</h5>
                <ul className="list-unstyled">
                  <li>
                    <Link to="/aboutus" className="text-white text-decoration-none">
                      Learn More
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Contact Us Section */}
              <div className="col-lg-3 col-md-6 mb-4">
                <h5 className="text-uppercase">📞 Contact Us</h5>
                <ul className="list-unstyled">
                  <li>
                    <a href="tel:+1234567890" className="text-white text-decoration-none d-flex align-items-center">
                      <FontAwesomeIcon icon={faPhone} className="me-2" /> +91-8766**5951
                    </a>
                  </li>
                  <li>
                    <a href="mailto:support@capturecrew.com" className="text-white text-decoration-none d-flex align-items-center">
                      <FontAwesomeIcon icon={faEnvelope} className="me-2" /> support@capturecrew.com
                    </a>
                  </li>
                  <li>
                    <a href="https://www.google.com/maps/place/Centre+for+Development+of+Advanced+Computing+(CDAC)/@19.034957,73.0456373,15.22z/data=!4m10!1m2!2m1!1scdac+mumbai!3m6!1s0x3be7c24cce39457b:0x8bd69eab297890b0!8m2!3d19.0258994!4d73.0542462!15sCgtjZGFjIG11bWJhaSIDiAEBkgEbc29mdHdhcmVfdHJhaW5pbmdfaW5zdGl0dXRl4AEA!16s%2Fg%2F1tm8j0wb?entry=ttu&g_ep=EgoyMDI1MDIwMy4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="text-white text-decoration-none d-flex align-items-center">
                      <FontAwesomeIcon icon={faMapMarkerAlt} className="me-2" /> CDAC Mumbai
                    </a>
                  </li>
                </ul>
              </div>

              {/* Follow Us Section */}
              <div className="col-lg-3 col-md-6 mb-4">
                <h5 className="text-uppercase">Follow Us</h5>
                <ul className="list-unstyled">
                  <li>
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-white text-decoration-none d-flex align-items-center">
                      <FontAwesomeIcon icon={faFacebookF} className="me-2" /> Facebook
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-white text-decoration-none d-flex align-items-center">
                      <FontAwesomeIcon icon={faInstagram} className="me-2" /> Instagram
                    </a>
                  </li>
                  <li>
                    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-white text-decoration-none d-flex align-items-center">
                      <FontAwesomeIcon icon={faTwitter} className="me-2" /> Twitter
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white text-decoration-none d-flex align-items-center">
                      <FontAwesomeIcon icon={faLinkedinIn} className="me-2" /> LinkedIn
                    </a>
                  </li>
                </ul>
              </div>

            </div>
          </section>

          {/* Divider */}
          <hr className="mb-4 border-white" />

          {/* Copyright Section */}
          <section className="d-flex justify-content-center align-items-center">
            <span className="me-3">© 2024 CaptureCrew</span>
            <button type="button" className="btn btn-warning text-dark fw-bold rounded-pill px-4">
              Visit Website
            </button>
          </section>

          {/* Divider */}
          <hr className="mb-4 border-white" />
        </div>
      </footer>
    </div>
  );
};

export default Footer;
