import React from "react";

const Footer = () => {
  return (
    <section className="footer">
      <div className="container text-center">
        <p>
          &copy; Copyright {new Date().getFullYear()}. Mahmoud Osman. All Rights
          Reserved.
        </p>
      </div>
    </section>
  );
};

export default Footer;
