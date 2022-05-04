import { React, useEffect, useState } from "react";
import add from "../Images/add.png";
import rightimg from "../Images/rightimg.jpg";
import s1 from "../Images/1.jpg";
import s2 from "../Images/2.png";
import s3 from "../Images/3.jpg";
import s4 from "../Images/4.jpg";
import s5 from "../Images/5.jpg";
import s6 from "../Images/6.jpg";
import s7 from "../Images/7.jpg";
import s8 from "../Images/8.jpg";
import r1 from "../Images/r1.jpg";
import r2 from "../Images/r2.jpg";
import r3 from "../Images/r3.jpg";
import "../Pages/Home.css";
import sp1 from "../Images/s1.jpg";
import sp2 from "../Images/s2.jpg";
import sp3 from "../Images/s3.jpg";
import sp4 from "../Images/s4.jpg";
import sp5 from "../Images/s5.jpg";
import sp6 from "../Images/s6.jpg";
import sp7 from "../Images/s7.jpg";
import sp8 from "../Images/s8.jpg";
import sp9 from "../Images/s9.jpg";
import sp10 from "../Images/s10.jpg";
function Home() {
  return (
    <div>
      <div className="wrapper">
        <section>
          <div className="row g-1">
            <div className="col-12 p-3">
              <img className="add" src={add} />
            </div>
          </div>
        </section>
        <section>
          <div className="row align-items-center justify-content-between">
            <div className="leftcontent col-6 p-3 py-5 my-5 ">
              <center>
                {" "}
                <p className="home-top-heading py-3">
                  The Finest Natural Gemstones
                </p>
                <p className="home-top-p ">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
                <div className="py-3">
                  {" "}
                  <button className="topbtn ">GET STARTED</button>
                </div>
              </center>
            </div>
            <div className="rightimgcol col-6 p-5">
              <center>
                {" "}
                <img className="rightimg img-fluid" src={rightimg} />
              </center>
            </div>
          </div>
        </section>
        <section>
          <div class="py-5 container">
            <div class="row row-cols-2 align-items-center justify-content-between row-cols-lg-5 g-2 g-lg-3">
              <div class="topcat col-3">
                <div class="p-3" href="#">
                  <center>
                    <img src={s1} />
                    <p className="ruby-p-text pt-5">Spinel</p>

                    <a href="gemspage" className="viewmorea">
                      View More
                    </a>
                  </center>
                </div>
              </div>

              <div class="topcat col-3">
                <div class="p-3">
                  {" "}
                  <center>
                    <img src={s2} />
                    <p className="ruby-p-text pt-5">Jadeite Jade</p>

                    <a href="#" className="viewmorea">
                      View More
                    </a>
                  </center>
                </div>
              </div>
              <div class="topcat col-3">
                <div class="p-3 ">
                  {" "}
                  <center>
                    <img src={s3} />
                    <p className="ruby-p-text pt-5">Tanzanite</p>

                    <a href="#" className="viewmorea">
                      View More
                    </a>
                  </center>
                </div>
              </div>
              <div class="topcat col-3">
                <div class="p-3">
                  {" "}
                  <center>
                    <img src={s4} />
                    <p className="ruby-p-text pt-5">Jadeite Jade</p>

                    <a href="#" className="viewmorea">
                      View More
                    </a>
                  </center>
                </div>
              </div>
              <div class="topcat col-3">
                <div class="p-3 ">
                  {" "}
                  <center>
                    <img src={s5} />
                    <p className="ruby-p-text pt-5">Tanzanite</p>

                    <a href="#" className="viewmorea">
                      View More
                    </a>
                  </center>
                </div>
              </div>
              <div class="topcat col-3">
                <div class="p-3 ">
                  {" "}
                  <center>
                    <img src={s6} />
                    <p className="ruby-p-text pt-5">Gem Silica Chrysocolla</p>

                    <a href="#" className="viewmorea">
                      View More
                    </a>
                  </center>
                </div>
              </div>
              <div class="topcat col-3">
                <div class="p-3">
                  {" "}
                  <center>
                    <img src={s7} />
                    <p className="ruby-p-text pt-5">Matched Pairs</p>

                    <a href="#" className="viewmorea">
                      View More
                    </a>
                  </center>
                </div>
              </div>
              <div class="topcat col-3">
                <div class="p-3 ">
                  {" "}
                  <center>
                    <img src={s8} />
                    <p className="ruby-p-text pt-5">Imperial Topaz</p>

                    <a href="#" className="viewmorea">
                      View More
                    </a>
                  </center>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div class="py-5 container">
            <div class="row row-cols-2 align-items-center justify-content-between row-cols-lg-5 g-2 g-lg-3">
              <div class="col-12">
                <div class="p-3 border  ">
                  {" "}
                  <center>
                    <p className="Ruby-header">Ruby</p>
                    <p className="ruby-p-text">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book.{" "}
                    </p>
                    <div class="container">
                      <div class="row justify-content-md-center">
                        <div class="col col-lg-2">
                          {" "}
                          <center>
                            <img src={r1} />
                            <p className="ruby-p-text pt-5">Burma Ruby</p>
                          </center>
                        </div>
                        <div class="col-md-auto">
                          {" "}
                          <center>
                            <img src={r2} />
                            <p className="ruby-p-text pt-5">Mozambique Ruby</p>
                          </center>
                        </div>
                        <div class="col col-lg-2">
                          {" "}
                          <center>
                            <img src={r3} />
                            <p className="ruby-p-text pt-5">Star Ruby</p>
                          </center>
                        </div>
                      </div>
                    </div>
                  </center>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div class="py-5 container">
            <div class="row row-cols-2 align-items-center justify-content-between row-cols-lg-5 g-2 g-lg-3">
              <div class="col-12">
                <div class="p-3 border  ">
                  {" "}
                  <center>
                    <p className="Ruby-header">Sapphire</p>
                    <p className="ruby-p-text">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book.{" "}
                    </p>
                    <div class="container">
                      <div class="row justify-content-md-center">
                        <div class="col p-3 col-lg-2">
                          {" "}
                          <center>
                            <img src={sp1} />
                            <p className="ruby-p-text pt-5">Burma Ruby</p>
                          </center>
                        </div>
                        <div class="col  p-3 col-lg-2">
                          {" "}
                          <center>
                            <img src={sp2} />
                            <p className="ruby-p-text pt-5">Pink Sapphire</p>
                          </center>
                        </div>
                        <div class="col  p-3 col-lg-2">
                          {" "}
                          <center>
                            <img src={sp3} />
                            <p className="ruby-p-text pt-5"> Yellow Sapphire</p>
                          </center>
                        </div>
                        <div class="col  p-3 col-lg-2">
                          {" "}
                          <center>
                            <img src={sp4} />
                            <p className="ruby-p-text pt-5">
                              Padparadscha Sapphire
                            </p>
                          </center>
                        </div>
                        <div class="col  p-3 col-lg-2">
                          {" "}
                          <center>
                            <img src={sp5} />
                            <p className="ruby-p-text pt-5">Orange Sapphire</p>
                          </center>
                        </div>
                        <div class="col  p-3 col-lg-2">
                          {" "}
                          <center>
                            <img src={sp6} />
                            <p className="ruby-p-text pt-5">
                              Blue Star Sapphire
                            </p>
                          </center>
                        </div>
                        <div class="col  p-3 col-lg-2">
                          {" "}
                          <center>
                            <img src={sp7} />
                            <p className="ruby-p-text pt-5">
                              Cabochon Sapphire
                            </p>
                          </center>
                        </div>
                        <div class="col  p-3 col-lg-2">
                          {" "}
                          <center>
                            <img src={sp8} />
                            <p className="ruby-p-text pt-5">
                              Fancy Color Sapphire
                            </p>
                          </center>
                        </div>
                        <div class="col  p-3 col-lg-2">
                          {" "}
                          <center>
                            <img src={sp9} />
                            <p className="ruby-p-text pt-5">
                              Multi-Color Sapphire
                            </p>
                          </center>
                        </div>
                        <div class="col  p-3 col-lg-2">
                          {" "}
                          <center>
                            <img src={sp10} />
                            <p className="ruby-p-text pt-5">White Sapphire</p>
                          </center>
                        </div>
                      </div>
                    </div>
                  </center>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div class="col-10 m-auto alert " role="alert">
            <h4 class="end-heading py-5 alert-heading ">
              Shop and find top quality gemstones
            </h4>
            <p className="ent-p-text  mb-0">
              At AJS Gems we source, cut and export gemstones to the world. We
              have extensive hands-on experience creating rare treasures from
              the mines to your collection whether it's for investment or the
              pleasure of wearing a fine gemstone ring. Here you will find a
              safe secure environment which will provide an easy way to learn,
              try and compare fine unique gemstones.
            </p>

            <p class="ent-p-text py-2 mb-0">
              AJS Gems has a tremendous advantage in acquiring the best
              gemstones -- right out of the ground!
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;
