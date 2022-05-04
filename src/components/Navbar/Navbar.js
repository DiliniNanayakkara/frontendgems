import React from "react";
import Logo from "../Images/logo.jpg";
import "../Navbar/Navbar.css";
const Navbar = () => {
  return (
    <div>
      <section>
        <div class="row g-0">
          <div class="logoclm col-2  p-3 bg-light">
            <img className="companylogo" src={Logo} />
          </div>
          <div className="mobile-view row g-0">
            <div className="col-6 p-3 bg-light">
              {" "}
              <img className="companylogo" src={Logo} />
            </div>
            <div className="col-6 p-3 bg-light">
              {" "}
              <p className="cartitems">
                {" "}
                Cart<i class="fas fa-cart-plus"></i>
              </p>
            </div>
          </div>
          <div class="spc col-1  p-3 bg-light"></div>
          <div class="spc col-3  p-3 bg-light"></div>
          <div class="searchbarclm col-4  p-3 bg-light">
            <div class="searchbar search-container">
              <form className="headernav" action="/action_page.php">
                <input
                  className="searchinput"
                  type="text"
                  placeholder="Search.."
                  name="search"
                />
                <button className="searchbtn" type="submit">
                  <i class="fa fa-search"></i>
                </button>
              </form>
            </div>
          </div>

          <div class="cartcolm col-2  p-3 bg-light">
            {" "}
            <p className="cartitems">
              {" "}
              Cart<i class="fas fa-cart-plus"></i>
            </p>
          </div>
        </div>
      </section>
      <section>
        <nav class="navbar navbar-expand-lg navbar-light">
          <div class="container-fluid">
            <a href="#" class="navbar-brand"></a>
            <button
              type="button"
              class="mobilenav navbar-toggler float-md-right"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarCollapse">
              <div class="navbar-nav">
                <a href="/" class="nav-item nav-link active">
                  Home
                </a>
                <div class="nav-item dropdown">
                  <a
                    href="#"
                    class="nav-link dropdown-toggle"
                    data-bs-toggle="dropdown"
                  >
                    Shop Gems
                  </a>
                  <div class="dropdown-menu">
                    <a href="#" class="dropdown-item">
                      Pending
                    </a>
                    <a href="*" class="dropdown-item">
                      Pending
                    </a>
                    <a href="#" class="dropdown-item">
                      Pending
                    </a>
                  </div>
                </div>
                <div class="nav-item dropdown">
                  <a
                    href="#"
                    class="nav-link dropdown-toggle"
                    data-bs-toggle="dropdown"
                  >
                    Help
                  </a>
                  <div class="dropdown-menu">
                    <a href="#" class="dropdown-item">
                      Pending
                    </a>
                    <a href="#" class="dropdown-item">
                      Pending
                    </a>
                    <a href="#" class="dropdown-item">
                      Pending
                    </a>
                  </div>
                </div>
                <div class="nav-item dropdown">
                  <a
                    href="#"
                    class="nav-link dropdown-toggle"
                    data-bs-toggle="dropdown"
                  >
                    Customer Review
                  </a>
                  <div class="dropdown-menu">
                    <a href="#" class="dropdown-item">
                      Pending
                    </a>
                    <a href="#" class="dropdown-item">
                      Pending
                    </a>
                    <a href="#" class="dropdown-item">
                      Pending
                    </a>
                  </div>
                </div>
                <div class="nav-item dropdown">
                  <a
                    href="#"
                    class="nav-link dropdown-toggle"
                    data-bs-toggle="dropdown"
                  >
                    Education
                  </a>
                  <div class="dropdown-menu">
                    <a href="#" class="dropdown-item">
                      Pending
                    </a>
                    <a href="#" class="dropdown-item">
                      Pending
                    </a>
                    <a href="#" class="dropdown-item">
                      Pending
                    </a>
                  </div>
                </div>
                <div class="nav-item dropdown">
                  <a
                    href="#"
                    class="nav-link dropdown-toggle"
                    data-bs-toggle="dropdown"
                  >
                    About Us
                  </a>
                  <div class="dropdown-menu">
                    <a href="#" class="dropdown-item">
                      Pending
                    </a>
                    <a href="#" class="dropdown-item">
                      Pending
                    </a>
                    <a href="#" class="dropdown-item">
                      Pending
                    </a>
                  </div>
                </div>
                <div class="nav-item dropdown">
                  <a
                    href="#"
                    class="nav-link dropdown-toggle"
                    data-bs-toggle="dropdown"
                  >
                    Contact Us
                  </a>
                  <div class="dropdown-menu">
                    <a href="#" class="dropdown-item">
                      Pending
                    </a>
                    <a href="#" class="dropdown-item">
                      Pending
                    </a>
                    <a href="#" class="dropdown-item">
                      Pending
                    </a>
                  </div>
                </div>
                <div class="nav-item dropdown">
                  <a
                    href="#"
                    class="nav-link dropdown-toggle"
                    data-bs-toggle="dropdown"
                  >
                    Certificate
                  </a>
                  <div class="dropdown-menu">
                    <a href="#" class="dropdown-item">
                      Pending
                    </a>
                    <a href="#" class="dropdown-item">
                      Pending
                    </a>
                    <a href="#" class="dropdown-item">
                      Pending
                    </a>
                  </div>
                </div>
                <div class="nav-item dropdown">
                  <a
                    href="#"
                    class="nav-link dropdown-toggle"
                    data-bs-toggle="dropdown"
                  >
                    Jewellery
                  </a>
                  <div class="dropdown-menu">
                    <a href="#" class="dropdown-item">
                      Pending
                    </a>
                    <a href="#" class="dropdown-item">
                      Pending
                    </a>
                    <a href="#" class="dropdown-item">
                      Pending
                    </a>
                  </div>
                </div>
              </div>
              <div class="navbar-nav ms-auto">
                <div class="nav-item dropdown">
                  <a href="#" class="nav-link " data-bs-toggle="dropdown">
                    <i class="fas fa-user-alt"></i> Account
                  </a>
                  <div class="dropdown-menu">
                    <a href="#" class="dropdown-item">
                      Pending
                    </a>
                    <a href="#" class="dropdown-item">
                      Pending
                    </a>
                    <a href="#" class="dropdown-item">
                      Pending
                    </a>
                  </div>
                </div>
                <div class="nav-item dropdown">
                  <a href="#" class="nav-link" data-bs-toggle="dropdown">
                    <i class="far fa-heart"></i> Wish List
                  </a>
                  <div class="dropdown-menu">
                    <a href="#" class="dropdown-item">
                      Pending
                    </a>
                    <a href="#" class="dropdown-item">
                      Pending
                    </a>
                    <a href="#" class="dropdown-item">
                      Pending
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </section>
    </div>
  );
};

export default Navbar;
