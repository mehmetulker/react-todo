import React from "react";

function Footer() {
  return (
    <div>
      <footer className="info">
        <p>Click to edit a todo</p>
        <p>
          Created by <a href="https://d12n.me/">Dmitry Sharabin</a>
          <a href="https://codepen.io/dmitrysharabin/pen/MWgQNYZ">
            Original version of the study
          </a>
        </p>
        <p className="footer">
          Thank you Dmitry Sharabin.
          <br />
          <a href="https://github.com/mehmetulker/react-todo">
            Updated by Mehmet ÜLKER using the React library.
          </a>
        </p>
      </footer>
    </div>
  );
}

export default Footer;
