import { useState } from "react";
import { NavLink } from "react-router-dom";
import {Router, router} from 'react-router-dom';
import React from "react";
import "./NavBar.css";

function NavBar() {
  return (
    <>
      <header className="main-header">
        <div id="h1-div">
          <h1 id="header-h1">Devin Augot</h1>
        </div>
        <div id="navlist">
          <div className="navlist-right">
            <router href="/Index">Home</router>
            <a href="/Projects">Projects</a>
            <a href="/Contact">Contact</a>
          </div>
        </div>
      </header>
    </>
  );
}

export default NavBar;
