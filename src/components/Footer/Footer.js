import React from "react";
import logo from "../Images/logo.jpg";
import "../Footer/footer.css";
const Footer = () => {
  return (
    <div>
      <footer class="text-center text-lg-start text-muted">
        <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          <div class="me-5 d-none d-lg-block">
            <span>Get connected with us on social networks:</span>
          </div>

          <div>
            <a href="" class="me-4 text-reset">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a href="" class="me-4 text-reset">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="" class="me-4 text-reset">
              <i class="fab fa-google"></i>
            </a>
            <a href="" class="me-4 text-reset">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="" class="me-4 text-reset">
              <i class="fab fa-linkedin"></i>
            </a>
            <a href="" class="me-4 text-reset">
              <i class="fab fa-github"></i>
            </a>
          </div>
        </section>

        <section class="">
          <div class="container text-center text-md-start mt-5">
            <div class="row mt-3">
              <div class="col-md-3 col-lg-3 col-xl-3 mx-auto mb-4">
                <h6 class="text-uppercase fw-bold mb-4">Company Name</h6>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
                <img src={logo} style={{ height: "100px" }} />
              </div>
              <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 class="text-uppercase fw-bold mb-4">ABOUT US</h6>
                <p>Why Choose Us?</p>
                <p>Customer Reviews</p>
                <p>Charity Foundation</p>
                <p>President</p>
                <p>Staff</p>
                <p>Blog</p>
                <p>Showroom</p>
                <p>Technology</p>
                <p>Workshop</p>
                <p>Laboratory</p>
                <p>In The Press</p>
              </div>
              <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 class="text-uppercase fw-bold mb-4">CUSTOMER CARE</h6>
                <p>Contact Us</p>
                <p>General Questions</p>
                <p>Return Policy</p>
                <p>Extend Protection Plans</p>
                <p>Our Location</p>
                <p>Grading, Sizing & More</p>
                <p>Payment Policy</p>
                <p>Shipping</p>
                <p>Security & Fraud Policy</p>
                <p>Privacy Policy</p>
              </div>

              <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 class="text-uppercase fw-bold mb-4">EDUCATION</h6>
                <p>Treated vs. Untreated Sapphires</p>
                <p>What is Heat Treatment?</p>
                <p>Judging Quality in Sapphires</p>
                <p>Sapphire Colors & Varieties</p>
                <p>Sapphire Origins & Sources</p>
                <p>Fun Facts About Sapphires</p>
                <p>Keep Your Jewelry Looking New</p>
                <p>
                  <i class="fas fa-plus-square"></i> View More
                </p>
              </div>
            </div>
          </div>
        </section>
      </footer>
    </div>
  );
};

export default Footer;
