import { React, useEffect, useState } from "react";
import "../Pages/checkout.css";
import spinel2 from "../Images/spinel2.png";
import Reviews from "../reviews/reviews";
function Checkout() {
  return (
    <div>
      <div className="wrapper">
        <div className="row p-5">
          <div className="responsivecheckout col-9">
            <p className="shippingheader">Your Shopping Cart</p>
            <div className="row" style={{ background: "#ECECEC" }}>
              <div className="checkouthead col-9 p-3 ">Item</div>
              <div className="checkouthead col-3 p-3">Subtotal</div>
            </div>
            <p className="carttop py-3">Mahenge Spinel - 3.32 carats</p>
            <div className="row">
              <div className="responscart col-3">
                <img className="cartimg" src={spinel2} />
              </div>
              <div className="responscart col-5">
                <table class="table py-5">
                  <tbody>
                    <tr>
                      <th className="stone_details_h" scope="row">
                        Total weight:{" "}
                      </th>
                      <td className="stone_details_cart">3.32 Carats</td>
                    </tr>
                    <tr>
                      <th className="stone_details_h" scope="row">
                        Clarity:{" "}
                      </th>
                      <td className="stone_details_cart">Eye Clean</td>
                    </tr>
                    <tr>
                      <th className="stone_details_h" scope="row">
                        Size :
                      </th>
                      <td className="stone_details_cart">
                        9.89 x 7.58 x 5.72 mm. Mahenge-Spinel - 3.32 carats
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="responscart col-2">
                <button className="Viewitembtn p-2 col-12">
                  <i class="fas fa-search"></i>View Item
                </button>
                <button className="Removebtn p-2 col-12">
                  <i class="fas fa-times"></i>Remove
                </button>
              </div>
              <div className="responscart col-2">
                <p className="prevprice pt-2">$40,000.00</p>
                <p className="redprice pt-2">$37,500.00</p>
              </div>
            </div>
            <hr style={{ color: "rgba(0, 0, 0, 0.22);" }} />
            <div className="row">
              <div className="bottomclass col-6 p-3">
                <p className="specalnote">
                  Do you have any notes or questions?
                </p>
                <p className="specialnotetext">
                  If you have any questions or details you would like to add to
                  your order please do so here.
                </p>
                <form>
                  <div class="form-group  py-5">
                    <textarea
                      class="form-control"
                      id="exampleFormControlTextarea1"
                      rows="3"
                      placeholde="type here"
                    ></textarea>
                  </div>
                  <button className="notesavebtn ">Save Note</button>
                </form>
              </div>
              <div className="bottomclass col-6 p-3">
                <table class="table py-5">
                  <tbody>
                    <tr>
                      <th className="stone_details_h" scope="row">
                        Subtotal :{" "}
                      </th>
                      <td
                        className="stone_details_cart"
                        style={{ float: "right" }}
                      >
                        $37,500.00
                      </td>
                    </tr>
                    <tr>
                      <th className="stone_details_h" scope="row">
                        Tax :{" "}
                      </th>
                      <td
                        className="stone_details_cart"
                        style={{ float: "right" }}
                      >
                        Calculated at Checkout
                      </td>
                    </tr>
                    <tr>
                      <th className="stone_details_h" scope="row">
                        Shipping :
                      </th>
                      <td
                        className="stone_details_cart"
                        style={{ float: "right" }}
                      >
                        FREE Worldwide Shipping*
                      </td>
                    </tr>
                  </tbody>
                </table>
                <hr />
                <div className="totalarea row p-3">
                  <div className="totaltag col-9">Total</div>
                  <div className="totalprice col-2">$37,500.00</div>
                </div>
                <div className="row p-2 mt-2 mb-3 border">
                  <div className="pleasenotetext col">
                    *Please Note: The price shown above is a close approximation
                    of your order total after converting from USD to your
                    currency. Please understand that the final price may differ
                    slightly due to exchange rate fluctuations.
                  </div>
                </div>
                <a href="shippingdetails" className="filterbtn btn">
                  CHECKOUT
                </a>
              </div>
            </div>
          </div>

          <div className="responsivecheckout col-3">
            <div class="card bg-light mb-3">
              <div class="rightcartheader card-header">What Happens Next?</div>
              <div class="card-body bg-white">
                <p class="rightcardbodyrtext card-text ">
                  After you place your order, our sales team will review all of
                  the details.
                </p>
                <p class="rightcardbodyrtext card-text">
                  If further information is required, we will contact you as
                  soon as possible.
                </p>
                <p className="cardboldheader">Have a question?</p>
                <p className="cardlink">
                  Read our FAQ or feel free to Contact Us.
                </p>
              </div>
            </div>
            <div class="card bg-light mb-3">
              <div class="rightcartheader card-header">
                Shop With Confidence
              </div>
              <div class="card-body bg-white">
                <p className="cardbodyhed">Our Return Policy</p>
                <p class="rightcardbodyrtext card-text ">
                  We offer a 14 day inspection period for you to review most
                  items. If you are not completely satisfied with your item, you
                  can return it for a full refund. Some exclusions may apply.
                  For more information on our return policies, please review our
                  full Return Policy.
                </p>
                <p className="cardbodyhed">Shipping Information</p>
                <p class="rightcardbodyrtext card-text">
                  Your order will be uniquely packaged and shipped fully
                  insured. Once your order has shipped, we will send tracking
                  information to the email address you provide. Please note that
                  a signature will be required upon delivery. For more
                  information please review our full Shipping Policy.
                </p>
                <p className="cardbodyhed">Your Privacy and Security</p>
                <p class="rightcardbodyrtext card-text">
                  All transactions on our website are executed through SSL
                  security technology. The security and privacy of your credit
                  card, personal contact data, and all other electronic
                  information is never at risk of being stolen or misused.
                </p>
                <p className="cardbodyhed">Third Party Lab Reports</p>
                <p class="rightcardbodyrtext card-text">
                  We send all of sapphires and jewelry with our in-house
                  reports. If your item also has a third party lab certification
                  (from the GIA or another institution), this document will be
                  sent separately after the purchase has been confirmed. Third
                  party lab reports cannot be replaced, so we send them after we
                  hear from our customers that they will be keeping their item.
                </p>
              </div>
            </div>
          </div>
        </div>
        <Reviews />
      </div>
    </div>
  );
}

export default Checkout;
