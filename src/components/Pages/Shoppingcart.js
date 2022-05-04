import { React, useEffect, useState } from "react";
import "../Pages/Shippingdetails.css";
import master from "../Images/master.png";
import paypal from "../Images/paypal.png";
import visa from "../Images/visa.png";
function Shippingcart() {
  return (
    <div>
      <div className="wrapper">
        <section>
          <div className="row p-3 border">
            <div className="checkoutformleft col-6 p-5">
              <p className="shippingheader">Checkout</p>
              <p className="shippinginf">1. Shipping Information</p>
              <p className="shippingsubheader">We Will Ship Your Order To : </p>
              <p className="checkoutformlable">K.D. Sarath Edirisinghe</p>
              <p className="shippingtext p-3">
                No : 456 Samaranayaka Road , Piliyandala, Colombo. Sri Lanka
                +94770000000
              </p>
              <div className="w-100">
                <button className="changeaddbtn">
                  Change Shipping Address
                </button>
              </div>
              <p className="shippinginf py-3">2. Payment Information</p>
              <p className="shippingsubheader"> Select Your Payment Method </p>

              <form>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio1"
                    value="option1"
                  />
                  <label class="form-check-label" for="inlineRadio1">
                    <img className="paymentmethodimg py-4" src={master} />
                  </label>
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio2"
                    value="option2"
                  />
                  <label class="form-check-label" for="inlineRadio2">
                    <img className="paymentmethodimg py-4" src={paypal} />
                  </label>
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio3"
                    value="option3"
                  />
                  <label class="form-check-label" for="inlineRadio3">
                    <img className="paymentmethodimg py-4" src={visa} />
                  </label>
                </div>
                <p className="shippingsubheader">Your Credit Card Details</p>
                <p className="formtext">
                  Please enter your credit card details extractly as they appear
                  on your card.
                </p>
                <div class="form-row">
                  <div class="row">
                    <div class="form-group">
                      <label
                        for="inputAddress"
                        className="checkoutformlable py-2"
                      >
                        *Card Number :
                      </label>
                      <input
                        type="text"
                        class="form-control p-2"
                        id="inputAddress"
                        required
                      />
                    </div>
                    <div class="col-6">
                      <label
                        for="inputAddress"
                        className="checkoutformlable py-2"
                      >
                        *Expires :
                      </label>
                      <input
                        type="text"
                        class="checkoutinput form-control p-2"
                        required
                      />
                    </div>
                    <div class="col-6">
                      <label
                        for="inputAddress"
                        className=" checkoutformlable py-2"
                      >
                        *CVV :
                      </label>
                      <input type="text" class="form-control p-2" required />
                    </div>
                  </div>
                </div>
                <div class="form-group">
                  <label for="inputAddress" className="checkoutformlable py-2">
                    *Name on Card :
                  </label>
                  <input
                    type="text"
                    class="form-control p-2"
                    id="inputAddress"
                    required
                  />
                </div>

                <a href="placeorder" type="submit" class="continue   mt-3">
                  Continue
                </a>
              </form>
            </div>
            <div className="checkoutformleft col-6 p-3">
              <p className="shippingheader">Your Order Details</p>
              <table class="table p-5">
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
              <div className="totalarea row p-3">
                <div className="totaltag col-9">Total</div>
                <div className="totalprice col-2">$37,500.00</div>
              </div>
              <p className="Shippinginformation pt-3">Shipping Information</p>
              <p className="shippingtext pt-3">
                Your order will be uniquely packaged and shipped fully insured.
                Once your order has shipped, we will send tracking information
                to the email address you provide. Please note that a signature
                will be required upon delivery.
              </p>
              <p className="shippingtext">
                For more information please review our full Shipping Policy.
              </p>
              <p className="Shippinginformation pt-3">Our Return Policy</p>
              <p className="shippingtext pt-3">
                We offer a 14 day inspection period for you to review most
                items. If you are not completely satisfied with your item, you
                can return it for a full refund. Some exclusions may apply.
              </p>
              <p className="shippingtext">
                For more information on our return policies, please review our
                full Return Policy.
              </p>
              <p className="Shippinginformation pt-3">Do I Need An Account?</p>
              <p className="shippingtext pt-3">
                An account is not necessary to complete your order. However,
                having an account allows you to:
              </p>
              <ul>
                <li className="shippingtext p-2">
                  View and Track the Status of your Orders
                </li>
                <li className="shippingtext p-2">
                  Save Address Details for Faster Ordering next time
                </li>
                <li className="shippingtext p-2">
                  Retrieve your Favorites and Compare List
                </li>
                <li className="shippingtext p-2">
                  Request 3D Renderings, and more!
                </li>
              </ul>
              <p className="shippingtext pt-3">
                Note: We promise to respect your Privacy and Security and will
                not share your information with 3rd parties.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Shippingcart;
