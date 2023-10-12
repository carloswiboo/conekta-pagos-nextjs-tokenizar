import Script from "next/script";
import React, { useEffect } from "react";

const Checkout = () => {
  useEffect(() => {
    const config = {
      targetIFrame: "#conektaIframeContainer",
      publicKey: "key_Dvwd1aDu7Aaq2Ivb4edElRL",
      locale: "es",
    };

    const callbacks = {
      onCreateTokenSucceeded: function (token) {
        console.log(token);
      },
      onCreateTokenError: function (error) {
        console.log(error);
      },
    };

    window.ConektaCheckoutComponents.Card({
      config,
      callbacks,
      allowTokenization: true,
    });
  }, []);

  return (
    <div>
      <div id="conektaIframeContainer" style={{ height: "1350px" }}></div>
    </div>
  );
};

export default Checkout;
