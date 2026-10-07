import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="logo-mark">
              <Link href="/" aria-label="NC Studios Home">
                <img
                  src="/logo.webp"
                  alt="NC Studios — Creative Agency in Bengaluru"
                  width="89"
                  height="60"
                  loading="lazy"
                  decoding="async"
                />
              </Link>
            </div>
            <p>A full-service creative agency &mdash; web, identity, print and the campaigns that carry it all.</p>
          </div>

          <div className="footer-cols">
            <div className="footer-col">
              <h5>Studio</h5>
              <Link href="/#clients">Clients</Link>
              <Link href="/#services">Services</Link>
              <Link href="/#process">Process</Link>
            </div>

            <div className="footer-col">
              <h5>Contact</h5>
              <a href="mailto:info@ncstudios.in">info@ncstudios.in</a>
              <a href="tel:+919380263271">+91 93802 63271</a>
              <a href="tel:+919482420060">+91 94824 20060</a>
              <p>Bengaluru, India</p>
            </div>

            <div className="footer-col">
              <h5>Follow</h5>
              <a href="https://www.instagram.com/_nc_studios__/" target="_blank" rel="noopener noreferrer">Instagram</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>&copy; 2026 NC Studios. All rights reserved.</span>
          <span>Designed &amp; built by NC Studios.</span>
        </div>
      </div>
    </footer>
  );
}
