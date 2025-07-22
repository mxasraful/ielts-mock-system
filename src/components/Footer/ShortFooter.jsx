import React, { useContext } from "react";
import "./Footer.css"; // Assuming you have a CSS file for styling
import { MainContext } from "../../Context/MainContext";

export default function ShortFooter({ clolorBlack }) {
  // Accessing headerData from MainContext
  const { headerData } = useContext(MainContext);

  // Get the current year
  const year = new Date().getFullYear();

  return (
    <footer
      className={`mt-auto ${
        clolorBlack
          ? "short-footer short-footer-black text-white"
          : "short-footer short-footer-white text-black"
      }`}
    >
      <div className="container pt-4 pb-3 border-top text-center">
        <p className="mb-0">
          &copy; {year} {headerData?.title}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
