"use client";

import React from "react";
import styled from "styled-components";
export const Navbar = () => {
  const StyledNavbar = styled.nav`
    width: 100%;
    border-bottom: 1px solid #eaeaea;
    position: absolute;
    top: 0;
    z-index: 100;
    /* padding: 1rem; */
    display: flex;
    justify-content: space-between;
  `;
  return (
    <StyledNavbar>
      <div className="container mx-auto flex items-center justify-between p-5">
        <div>
          <a href="/">
            <p>Strapi Template</p>
          </a>
        </div>
        <div>
          <ul className="flex items-center">
            <li className="mx-3">
              <a href="/">Home</a>
            </li>
            <li className="mx-3">
              <a href="/about">About</a>
            </li>
            <li className="mx-3">
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </StyledNavbar>
  );
};
