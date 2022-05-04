import { React, useEffect, useState } from "react";
import "../Pages/viewgem.css";
import spinel2 from "../Images/spinel2.png";
import comvideo from "../Images/comvideo.png";
import certificate from "../Images/certificate.png";
import Reviews from "../reviews/reviews";
function Viewgems() {
  return (
    <div>
      <div className="wrapper">
        <section>
          <div class="p-5 card">
            <div class="card-body">
              <h5 class="viewgems-header card-title">
                Mahenge Spinel - 3.32 carats
              </h5>
              <p class="viewgems-top-p-text card-text">
                A gorgeous pink-red spinel from the Mahenge region of Tanzania.
                These rare spinels have a neon-like glow that is unique in the
                gem world. Excellent color saturation and perfect size for an
                impressive ring or pendant. Certified as natural and unheated by
                GemResearch Swisslab (GRS) with the color noted as "pinkish-red"
                and origin "Tanzania". A remarkable gem that we guarantee will
                draw comments. We can set this fine gem in custom jewelry just
                for you.
              </p>
            </div>
          </div>
        </section>
        <section>
          <div className="row p-5">
            <div className="view-img-card col-5 p-5 ">
              <img className="viewgem-img" src={spinel2} />
            </div>
            <div className="view-img-card col-7 p-5 ">
              <p className="itemtag">
                <i class="fas fa-tag"></i>Item ID : J78697
              </p>
              <p className="pricetag">$40,000.00</p>
              <p className="redtext">Holiday Sale : $37,500.00</p>
              <p className="Available">Available/Fast Shipping</p>
              <p className="return">14 Day No Hassle Return Policy*</p>
              <a href="checkout" className="topbtn btn">
                ADD TO CART
              </a>
              <div className="row py-5">
                <div className="col-11">
                  <div className="row">
                    <div className="col-3  m-0  p-1">
                      <button className="btnrow">
                        <i class="fas fa-share-alt"></i>Share
                      </button>
                    </div>
                    <div className="col-3  m-0  p-1">
                      <button className="btnrow">
                        <i class="fas fa-heart"></i>Favorite
                      </button>
                    </div>
                    <div className="col-3  m-0  p-1">
                      <button className="btnrow">
                        <i class="fas fa-balance-scale"></i>Compare
                      </button>
                    </div>
                    <div className="col-3  m-0 p-1">
                      <button className="btnrow">
                        <i class="fas fa-question-circle"></i>Ask Questions
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container p-3">
            <div className="stone_details row justify-content-center p-5 bg-light">
              <div className="stonedetailscol col  ">
                <table class="table">
                  <tbody>
                    <tr>
                      <th className="stone_details_h" scope="row">
                        Lot# :{" "}
                      </th>
                      <td className="stone_details_h">SPI5316BZ</td>
                    </tr>
                    <tr>
                      <th className="stone_details_h" scope="row">
                        Total weight:{" "}
                      </th>
                      <td className="stone_details_h">3.32 Carats</td>
                    </tr>
                    <tr>
                      <th className="stone_details_h" scope="row">
                        Price (USD):
                      </th>
                      <td className="stone_details_h">$37,500.00</td>
                    </tr>
                    <tr>
                      <th className="stone_details_h" scope="row">
                        Pieces:{" "}
                      </th>
                      <td className="stone_details_h">1</td>
                    </tr>
                    <tr>
                      <th className="stone_details_h" scope="row">
                        Clarity:
                      </th>
                      <td className="stone_details_h">Eye Clean</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="stonedetailscol col-4 ">
                <table class="table">
                  <tbody>
                    <tr>
                      <th className="stone_details_h" scope="row">
                        Origin:{" "}
                      </th>
                      <td className="stone_details_h">Mahenge, Tanzania</td>
                    </tr>
                    <tr>
                      <th className="stone_details_h" scope="row">
                        Shape:{" "}
                      </th>
                      <td className="stone_details_h">Oval</td>
                    </tr>
                    <tr>
                      <th className="stone_details_h" scope="row">
                        Cut:
                      </th>
                      <td className="stone_details_h">Portuguese</td>
                    </tr>
                    <tr>
                      <th className="stone_details_h" scope="row">
                        Comment:{" "}
                      </th>
                      <td className="stone_details_h">Unheated</td>
                    </tr>
                    <tr>
                      <th className="stone_details_h" scope="row">
                        Size:
                      </th>
                      <td className="stone_details_h ">
                        9.89 x 7.58 x 5.72 mm. Mahenge-Spinel - 3.32 carats
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="stonedetailscol col-4   py-5">
                <button className="filterbtn">See all Spinel</button>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <div className="row">
              <div className="videoimg col-6 p-3 justify-content-center bg-light border">
                <img className="comvideo" src={comvideo} />
              </div>
              <div className="videoimg col-6 p-3 bg-light border">
                <img className="comvideo" src={certificate} />
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container p-3 ">
            <div className="blue row  p-3">
              <div className="col-8 p-4">
                <p className="bluetextc">
                  Still can't find the jewelry you want?
                </p>
                <p className="bluenormaltext">
                  No hard-selling, our customer service representatives do not
                  work on commission. We're a No-Pressure Company
                </p>
              </div>
              <div className="stonedetailscol col-4 p-5">
                <button className="filterbtn ">CONTACT US TODAY</button>
              </div>
            </div>
          </div>
        </section>
        <Reviews />
      </div>
    </div>
  );
}

export default Viewgems;
