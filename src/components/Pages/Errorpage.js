import React from "react";

import Error from "../Images/error.gif";
function ErrorPage() {
  return (
    <div>
      <div className="wrapper">
        <div className="wrappercontent"></div>
        <section>
          <center>
            {" "}
            <img src={Error} />
          </center>
        </section>
      </div>
    </div>
  );
}

export default ErrorPage;
