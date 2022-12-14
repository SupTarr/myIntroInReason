// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Curry from "rescript/lib/es6/curry.js";
import * as React from "react";
import * as Js_string from "rescript/lib/es6/js_string.js";

import '../../../../input.css'
;

var fizzBuzz = (function (stop) {
    let result = [];
    for (var i = 1; i <= stop; i++) {
      if (i % 15 === 0) {
        result.push("FizzBuzz");
      } else if (i % 3 === 0) {
        result.push("Fizz");
      } else if (i % 5 === 0) {
        result.push("Buzz");
      } else {
        result.push(i.toString());
      }
    }
    return result
  });

function FizzBuzz(Props) {
  var match = React.useState(function () {
        return 10;
      });
  var setFizzBuzzStop = match[1];
  var fizzBuzzStop = match[0];
  var handleFizzBuzzStopChange = function ($$event) {
    var value = $$event.currentTarget.value;
    if (Js_string.charAt(0, value) === "0") {
      return Curry._1(setFizzBuzzStop, (function (param) {
                    return 0;
                  }));
    } else {
      return Curry._1(setFizzBuzzStop, (function (param) {
                    return value;
                  }));
    }
  };
  var fizzBuzzitems = fizzBuzz(fizzBuzzStop).map(function (fizz, index) {
        return React.createElement("li", {
                    key: String(index)
                  }, fizz);
      });
  return React.createElement("section", undefined, React.createElement("h2", {
                  className: "text-center text-xl font-bold mt-10 mb-2"
                }, "Fizz-Buzz Challenge"), React.createElement("div", {
                  className: "flex flex-wrap max-w-[1000px] mx-auto justify-around"
                }, React.createElement("div", {
                      className: "mx-5 mb-3"
                    }, React.createElement("h3", {
                          className: "max-w-[250px] mb-3"
                        }, "The task of Fizz-Buzz is: Print integers one-to-N, but print “Fizz” if an integer is divisible by three, “Buzz” if an integer is divisible by five, and “FizzBuzz” if an integer is divisible by both three and five."), React.createElement("p", {
                          className: "pb-2"
                        }, "Input where you want to stop"), React.createElement("input", {
                          className: "max-w-[100px] p-2 rounded-lg",
                          id: "fizzBuzzInput",
                          min: "0",
                          type: "number",
                          value: String(fizzBuzzStop),
                          onChange: handleFizzBuzzStopChange
                        })), React.createElement("pre", {
                      className: "transition max-w-[350px] h-[300px] mx-5 mb-3 p-5 overflow-scroll bg-red-300 rounded-xl drop-shadow-lg hover:drop-shadow-2xl"
                    }, React.createElement("code", undefined, "function fizzBuzz (stop) {\n  let result = [];\n  for (var i = 1; i <= stop; i++) {\n    if (i % 15 === 0) {\n      result.push(\"FizzBuzz\");\n    } else if (i % 3 === 0) {\n      result.push(\"Fizz\");\n    } else if (i % 5 === 0) {\n      result.push(\"Buzz\");\n    } else {\n      result.push(i.toString());\n    }\n  }\n  return result\n}")), fizzBuzzStop.toString().length !== 0 && fizzBuzzStop !== 0 ? React.createElement("div", {
                        className: "transition min-w-[150px] h-[300px] mx-5 mb-3 p-5 bg-red-200 rounded-xl overflow-y-scroll drop-shadow-lg hover:drop-shadow-2xl"
                      }, fizzBuzzitems) : React.createElement(React.Fragment, undefined)));
}

var make = FizzBuzz;

export {
  fizzBuzz ,
  make ,
}
/*  Not a pure module */
