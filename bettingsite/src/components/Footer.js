import React from 'react';

function Footer() {
  return (
    <footer className="bg-light text-center text-lg-start">
      <div className="container p-4">
        <div className="row">
          <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
            <h5 className="text-uppercase">About Us</h5>
            <p>
              Online betting can be addictive and lead to financial and emotional harm. Approach with caution and set limits.  </p>
          </div>
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">Links</h5>
            <ul className="list-unstyled mb-0">
              <li>
                <a href="/" className="text-dark">Link 1</a>
              </li>
              <li>
                <a href="/" className="text-dark">Link 2</a>
              </li>
              <li>
                <a href="/" className="text-dark">Link 3</a>
              </li>
              <li>
                <a href="/" className="text-dark">Link 4</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">Contact</h5>
            <ul className="list-unstyled mb-0">
              <li>
                <a href="/" className="text-dark">Email: info@maakarmabettingsite.com</a>
              </li>
              <li>
                <a href="/" className="text-dark">Phone: +1 234 567 890</a>
              </li>
              <li>
                <a href="/" className="text-dark">Address: nitk, karnatak INDIA</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        &copy; {new Date().getFullYear()} My eCommerce Site. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
