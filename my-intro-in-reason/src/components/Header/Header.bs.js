// Generated by ReScript, PLEASE EDIT WITH CARE

import * as React from "react";

import "../../input.css";

function Header(Props) {
  var name = Props.name;
  var greeting =
    name !== undefined ? "Hello, I am " + name + "!" : "Hello stranger!";
  return React.createElement(
    "section",
    {
      className: "flex flex-wrap justify-around",
    },
    React.createElement(
      "div",
      {
        className: "font-mono text-blue-400 hover:text-lg",
      },
      greeting
    ),
    React.createElement(
      "figure",
      undefined,
      React.createElement("img", {
        className: "max-w-[200px]",
        alt: "My Profile Picture",
        src: "../profile.jpg",
      })
    )
  );
}

var make = Header;

export { make };
/*  Not a pure module */
