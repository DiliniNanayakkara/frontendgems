import { React, useEffect, useState } from "react";
import rightimg from "../Images/spinel.jfif";
import "../Pages/Gemspage.css";
import sp from "../Images/sp1.jpg";
function Gemspage() {
  return (
    <div>
      <div className="wrapper">
        <section>
          <div className="row align-items-center justify-content-between">
            <div className="leftcontent col-6 p-3 py-5 my-5 ">
              <center>
                {" "}
                <p className="home-top-heading py-3">Spinel</p>
                <p className="home-top-p ">
                  Among gem enthusiasts spinel has become one of the most sought
                  after gems in the market, with red and pink the top colors.
                  The finest specimens come from Mahenge, Tanzania and Burma.
                  How much is spinel worth? The value of natural spinel can vary
                  greatly depending on the size and quality of the gemstone.
                  Buying direct from AJS Gems you'll get the best value in the
                  market.
                </p>
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
          <center>
            <p className="gems-header">
              All items are in stock and available for purchase
            </p>
          </center>
        </section>
        <section className="filter-section">
          <div className="row py-5 px-5">
            <div className="rang-filter col-6 p-5 border bg-light">
              <div data-role="page">
                <div data-role="header">
                  <h1>Range Slider</h1>
                </div>

                <div data-role="main" class="ui-content">
                  <form method="post" action="/action_page_post.php">
                    <div data-role="rangeslider">
                      <label for="price-min">Price:</label>
                      <input
                        type="range"
                        name="price-min"
                        id="price-min"
                        value="200"
                        min="0"
                        max="1000"
                      />
                      <label for="price-max">Price:</label>
                      <input
                        type="range"
                        name="price-max"
                        id="price-max"
                        value="800"
                        min="0"
                        max="1000"
                      />
                    </div>
                    <input type="submit" data-inline="true" value="Submit" />
                    <p>
                      The range slider can be useful for allowing users to
                      select a specific price range when browsing products.
                    </p>
                  </form>
                </div>
              </div>
            </div>
            <div className="rang-filter col-6 p-5 border bg-light">d</div>
          </div>
        </section>
        <section>
          <div className="row px-5 py-3">
            <div className="filterarea col-3 p-3">
              <div className="row">
                <div className=" col-3 py-2">
                  <p>Sort by:</p>
                </div>
                <div className="col-9">
                  <select
                    class="form-select"
                    aria-label="Default select example"
                  >
                    <option selected>Sort</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="filterarea col-3 p-3">
              {" "}
              <div className="row">
                <div className=" col-3 py-2">
                  <p>Order:</p>
                </div>
                <div className="col-9">
                  <select
                    class="form-select"
                    aria-label="Default select example"
                  >
                    <option selected>Price</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="filterarea col-3 p-3">
              <div className="row">
                <div className="col-3 py-2">
                  <p>Page No:</p>
                </div>
                <div className="col-9">
                  <select
                    class="form-select"
                    aria-label="Default select example"
                  >
                    <option selected>Sort</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="filterarea col-3 p-3 ">
              <center>
                <button className="filterbtn">Apply</button>
              </center>
            </div>
          </div>
        </section>
        <section>
          <div class="container">
            <div class="row p-3 row-cols-2 row-cols-lg-5 g-2 g-lg-3">
              <div class="col">
                <div class="p-2">
                  <div class="card">
                    <center>
                      <img
                        src={sp}
                        class="product-img py-3 card-img-top"
                        alt="..."
                      />

                      <div class="card-body">
                        <p className="card-topic">
                          Mahenge Spinel - 3.32 carats
                        </p>
                        <p className="card-body-text">
                          # SPI5316BZ 9.89 x 7.58 x 5.72 mm. Unheated, Eye Clean
                        </p>

                        <p className="product-price">US $37,500.00 </p>
                        <a href="viewgem" className="clickline">
                          Click for Details
                        </a>
                        <a
                          href="checkout"
                          class="btn "
                          style={{ background: "#085784", color: "white" }}
                        >
                          Add to Cart
                        </a>
                      </div>
                    </center>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="p-2">
                  <div class="card">
                    <center>
                      <img
                        src={sp}
                        class="product-img py-3 card-img-top"
                        alt="..."
                      />

                      <div class="card-body">
                        <p className="card-topic">
                          Mahenge Spinel - 3.32 carats
                        </p>
                        <p className="card-body-text">
                          # SPI5316BZ 9.89 x 7.58 x 5.72 mm. Unheated, Eye Clean
                        </p>

                        <p className="product-price">US $37,500.00 </p>
                        <a href="viewgem" className="clickline">
                          Click for Details
                        </a>
                        <a
                          href="#"
                          class="btn "
                          style={{ background: "#085784", color: "white" }}
                        >
                          Add to Cart
                        </a>
                      </div>
                    </center>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="p-2">
                  <div class="card">
                    <center>
                      <img
                        src={sp}
                        class="product-img py-3 card-img-top"
                        alt="..."
                      />

                      <div class="card-body">
                        <p className="card-topic">
                          Mahenge Spinel - 3.32 carats
                        </p>
                        <p className="card-body-text">
                          # SPI5316BZ 9.89 x 7.58 x 5.72 mm. Unheated, Eye Clean
                        </p>

                        <p className="product-price">US $37,500.00 </p>
                        <a className="clickline">Click for Details</a>
                        <a
                          href="#"
                          class="btn "
                          style={{ background: "#085784", color: "white" }}
                        >
                          Add to Cart
                        </a>
                      </div>
                    </center>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="p-2">
                  <div class="card">
                    <center>
                      <img
                        src={sp}
                        class="product-img py-3 card-img-top"
                        alt="..."
                      />

                      <div class="card-body">
                        <p className="card-topic">
                          Mahenge Spinel - 3.32 carats
                        </p>
                        <p className="card-body-text">
                          # SPI5316BZ 9.89 x 7.58 x 5.72 mm. Unheated, Eye Clean
                        </p>

                        <p className="product-price">US $37,500.00 </p>
                        <a className="clickline">Click for Details</a>
                        <a
                          href="#"
                          class="btn "
                          style={{ background: "#085784", color: "white" }}
                        >
                          Add to Cart
                        </a>
                      </div>
                    </center>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="p-2">
                  <div class="card">
                    <center>
                      <img
                        src={sp}
                        class="product-img py-3 card-img-top"
                        alt="..."
                      />

                      <div class="card-body">
                        <p className="card-topic">
                          Mahenge Spinel - 3.32 carats
                        </p>
                        <p className="card-body-text">
                          # SPI5316BZ 9.89 x 7.58 x 5.72 mm. Unheated, Eye Clean
                        </p>

                        <p className="product-price">US $37,500.00 </p>
                        <a className="clickline">Click for Details</a>
                        <a
                          href="#"
                          class="btn "
                          style={{ background: "#085784", color: "white" }}
                        >
                          Add to Cart
                        </a>
                      </div>
                    </center>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="p-2">
                  <div class="card">
                    <center>
                      <img
                        src={sp}
                        class="product-img py-3 card-img-top"
                        alt="..."
                      />

                      <div class="card-body">
                        <p className="card-topic">
                          Mahenge Spinel - 3.32 carats
                        </p>
                        <p className="card-body-text">
                          # SPI5316BZ 9.89 x 7.58 x 5.72 mm. Unheated, Eye Clean
                        </p>

                        <p className="product-price">US $37,500.00 </p>
                        <a className="clickline">Click for Details</a>
                        <a
                          href="#"
                          class="btn "
                          style={{ background: "#085784", color: "white" }}
                        >
                          Add to Cart
                        </a>
                      </div>
                    </center>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="p-2">
                  <div class="card">
                    <center>
                      <img
                        src={sp}
                        class="product-img py-3 card-img-top"
                        alt="..."
                      />

                      <div class="card-body">
                        <p className="card-topic">
                          Mahenge Spinel - 3.32 carats
                        </p>
                        <p className="card-body-text">
                          # SPI5316BZ 9.89 x 7.58 x 5.72 mm. Unheated, Eye Clean
                        </p>

                        <p className="product-price">US $37,500.00 </p>
                        <a className="clickline">Click for Details</a>
                        <a
                          href="#"
                          class="btn "
                          style={{ background: "#085784", color: "white" }}
                        >
                          Add to Cart
                        </a>
                      </div>
                    </center>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="p-2">
                  <div class="card">
                    <center>
                      <img
                        src={sp}
                        class="product-img py-3 card-img-top"
                        alt="..."
                      />

                      <div class="card-body">
                        <p className="card-topic">
                          Mahenge Spinel - 3.32 carats
                        </p>
                        <p className="card-body-text">
                          # SPI5316BZ 9.89 x 7.58 x 5.72 mm. Unheated, Eye Clean
                        </p>

                        <p className="product-price">US $37,500.00 </p>
                        <a className="clickline">Click for Details</a>
                        <a
                          href="#"
                          class="btn "
                          style={{ background: "#085784", color: "white" }}
                        >
                          Add to Cart
                        </a>
                      </div>
                    </center>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="p-2">
                  <div class="card">
                    <center>
                      <img
                        src={sp}
                        class="product-img py-3 card-img-top"
                        alt="..."
                      />

                      <div class="card-body">
                        <p className="card-topic">
                          Mahenge Spinel - 3.32 carats
                        </p>
                        <p className="card-body-text">
                          # SPI5316BZ 9.89 x 7.58 x 5.72 mm. Unheated, Eye Clean
                        </p>

                        <p className="product-price">US $37,500.00 </p>
                        <a className="clickline">Click for Details</a>
                        <a
                          href="#"
                          class="btn "
                          style={{ background: "#085784", color: "white" }}
                        >
                          Add to Cart
                        </a>
                      </div>
                    </center>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="p-2">
                  <div class="card">
                    <center>
                      <img
                        src={sp}
                        class="product-img py-3 card-img-top"
                        alt="..."
                      />

                      <div class="card-body">
                        <p className="card-topic">
                          Mahenge Spinel - 3.32 carats
                        </p>
                        <p className="card-body-text">
                          # SPI5316BZ 9.89 x 7.58 x 5.72 mm. Unheated, Eye Clean
                        </p>

                        <p className="product-price">US $37,500.00 </p>
                        <a className="clickline">Click for Details</a>
                        <a
                          href="#"
                          class="btn "
                          style={{ background: "#085784", color: "white" }}
                        >
                          Add to Cart
                        </a>
                      </div>
                    </center>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <nav aria-label="Page navigation example">
            <ul class="pagination justify-content-center">
              <li class="page-item disabled">
                <a class="page-link" href="#" tabindex="-1">
                  Previous
                </a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">
                  1
                </a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">
                  2
                </a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">
                  3
                </a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">
                  4
                </a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">
                  5
                </a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">
                  6
                </a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">
                  Next
                </a>
              </li>
            </ul>
          </nav>
        </section>
      </div>
    </div>
  );
}

export default Gemspage;
