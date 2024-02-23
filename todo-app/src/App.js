import React, { Fragment } from "react";

import "./App.css";

//components

import InputTodo from "./components/InputTodo";

function MyButton() {
    return (
      <button>
        I'm a button
      </button>
    );
  }
  
  export default function MyApp() {
    return (
      <div>
        <h1>Welcome to my app</h1>
        <MyButton />
      </div>
    );
  };