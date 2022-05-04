import { React, useEffect, useState } from "react";
import "../Pages/Shippingdetails.css";
function Shipping() {
  return (
    <div>
      <div className="wrapper">
        <section>
          <div className="row p-3 border">
            <div className="checkoutformleft col-6 p-5">
              <p className="shippingheader">Checkout</p>
              <p className="shippinginf">1. Shipping Information</p>
              <p className="shippingtext">
                Please enter your Shipping Address below. You will have the
                opportunity to select your Shipping Method next.
              </p>
              <form>
                <div class="form-row">
                  <div class="row">
                    <div class="checkoutformleft col-6">
                      <label
                        for="inputAddress"
                        className="checkoutformlable py-3"
                      >
                        *First Name
                      </label>
                      <input
                        type="text"
                        class="checkoutinput form-control p-2"
                        placeholder="First name"
                        required
                      />
                    </div>
                    <div class="col-6">
                      <label
                        for="inputAddress"
                        className=" checkoutformlable py-3"
                      >
                        *Last Name
                      </label>
                      <input
                        type="text"
                        class="form-control p-2"
                        placeholder="Last name"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div class="form-group">
                  <label for="inputAddress" className="checkoutformlable py-3">
                    Company Name :
                  </label>
                  <input
                    type="text"
                    class="form-control p-2"
                    id="inputAddress"
                    placeholder="Company Name"
                  />
                </div>
                <div class="form-group">
                  <label for="inputAddress2" className="checkoutformlable py-3">
                    *Phone :
                  </label>
                  <input
                    type="text"
                    class="form-control p-2"
                    id="inputAddress2"
                    placeholder="Phone Number"
                    required
                  />
                </div>
                <div class="form-group">
                  <label for="inputAddress" className="checkoutformlable py-3">
                    *Street Address :
                  </label>
                  <input
                    type="text"
                    class="form-control p-2"
                    id="inputAddress"
                    placeholder="Street Address"
                    required
                  />
                </div>
                <div class="form-group">
                  <label for="inputAddress" className="checkoutformlable py-3">
                    Address 2 :
                  </label>
                  <input
                    type="text"
                    class="form-control p-2"
                    id="inputAddress"
                    placeholder="Address 2"
                  />
                </div>
                <div class="form-group">
                  <label for="inputAddress" className="checkoutformlable py-3">
                    Suite :
                  </label>
                  <input
                    type="text"
                    class="form-control p-2"
                    id="inputAddress"
                    placeholder="Suite"
                  />
                </div>
                <div class="form-group">
                  <label for="inputAddress" className="checkoutformlable py-3">
                    *Country :
                  </label>
                  <input
                    type="text"
                    class="form-control p-2"
                    id="inputAddress"
                    placeholder="Country"
                    required
                  />
                </div>
                <div class="form-group">
                  <label for="inputAddress" className="checkoutformlable py-3">
                    *City :
                  </label>
                  <input
                    type="text"
                    class="form-control p-2"
                    id="inputAddress"
                    placeholder="City"
                    required
                  />
                </div>
                <div class="form-group">
                  <label for="inputAddress" className="checkoutformlable py-3">
                    *State/Province :
                  </label>
                  <input
                    type="text"
                    class="form-control p-2"
                    id="inputAddress"
                    placeholder="State or Province"
                    required
                  />
                </div>

                <button type="submit" class="continue   mt-3">
                  Continue
                </button>
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

export default Shipping;
