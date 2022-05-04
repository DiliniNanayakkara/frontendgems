import { React, useEffect, useState } from "react";
import "../Pages/viewgem.css";
function review() {
  return (
    <div>
      <div className="wrapper">
        <section class="review py-5" id="review">
          <div class="stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star-half-alt"></i>
          </div>
          <center>
            {" "}
            <h1 class="heading pb-5">Over 1,900+ Reviews and Counting! </h1>
          </center>
          <div class="container">
            <div class="row">
              <div class="reviewc col-3">
                <div class="swiper-slide p-3">
                  <div class="user">
                    <img
                      className="user-profileimg"
                      src="https://organicthemes.com/demo/profile/files/2018/05/profile-pic.jpg"
                      alt=""
                    />
                    <div class="user-info p-2">
                      <div class="stars">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star-half-alt"></i>
                      </div>
                    </div>
                  </div>
                  <p class="review-text">
                    Excellent communication, delivered products on time.
                    Fantastic presentation.
                  </p>
                </div>
              </div>
              <div class="reviewc col-3">
                <div class="swiper-slide p-3">
                  <div class="user">
                    <img
                      className="user-profileimg"
                      src="https://organicthemes.com/demo/profile/files/2018/05/profile-pic.jpg"
                      alt=""
                    />
                    <div class="user-info py-2">
                      <div class="stars">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star-half-alt"></i>
                      </div>
                    </div>
                  </div>
                  <p class="review-text">
                    Excellent communication, delivered products on time.
                    Fantastic presentation.
                  </p>
                </div>
              </div>
              <div class="reviewc col-3">
                <div class="swiper-slide p-3">
                  <div class="user">
                    <img
                      className="user-profileimg"
                      src="https://organicthemes.com/demo/profile/files/2018/05/profile-pic.jpg"
                      alt=""
                    />
                    <div class="user-info py-2">
                      <div class="stars">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star-half-alt"></i>
                      </div>
                    </div>
                  </div>
                  <p class="review-text">
                    Excellent communication, delivered products on time.
                    Fantastic presentation.
                  </p>
                </div>
              </div>
              <div class="reviewc col-3">
                <div class="swiper-slide p-3">
                  <div class="user">
                    <img
                      className="user-profileimg"
                      src="https://organicthemes.com/demo/profile/files/2018/05/profile-pic.jpg"
                      alt=""
                    />
                    <div class="user-info py-2">
                      <div class="stars">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star-half-alt"></i>
                      </div>
                    </div>
                  </div>
                  <p class="review-text">
                    Excellent communication, delivered products on time.
                    Fantastic presentation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default review;
