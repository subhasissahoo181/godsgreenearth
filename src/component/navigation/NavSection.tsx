"use client";
import Link from "next/link";
import React, { useState } from "react";
type Props = {
  style: string;
};
type DropdownState = {
  home: boolean;
  pages: boolean;
  shop: boolean;
  blog: boolean;
};
const NavSection = ({ style }: Props) => {
  const [dropdown, setDropdown] = useState<DropdownState>({
    home: false,
    pages: false,
    shop: false,
    blog: false,
  });

  const handleToggleDropdown = (dropdownName: keyof DropdownState) => {
    if (window.innerWidth < 992) {
      setDropdown((prevState) => ({
        ...prevState,
        [dropdownName]: !prevState[dropdownName],
      }));
    }
  };

  return (
    <div className={`rv-1-header__nav ${style}`}>
      <ul className="justify-content-center">
        <li className={dropdown.home ? "rv-dropdown-active" : ""}>
          <a role="button" onClick={() => handleToggleDropdown("home")}>
            Home
          </a>

          <ul className="sub-menu">
            <li>
              <Link href="/">Gardening</Link>
            </li>
            <li>
              <Link href="/home-2">Herbal Tea</Link>
            </li>
            <li>
              <Link href="/home-3">ECO</Link>
            </li>
          </ul>
        </li>

        <li>
          <Link href="/about">About</Link>
        </li>

        <li className={dropdown.pages ? "rv-dropdown-active" : ""}>
          <a role="button" onClick={() => handleToggleDropdown("pages")}>
            Pages
          </a>
          <ul className="sub-menu">
            <li>
              <Link href="/services">Services</Link>
            </li>
            <li>
              <Link href="/services/web-solution">Service Details</Link>
            </li>
            <li>
              <Link href="/projects">Projects</Link>
            </li>
            <li>
              <Link href="/projects/sustainable-planting-drive">
                Project Details
              </Link>
            </li>
            <li>
              <Link href="/team">Team Members</Link>
            </li>
            <li>
              <Link href="/sign-in">Sign In</Link>
            </li>
            <li>
              <Link href="/sign-up">Sign Up</Link>
            </li>
            <li>
              <Link href="/cart">Cart</Link>
            </li>
            <li>
              <Link href="/wishlist">Wishlist</Link>
            </li>
            <li>
              <Link href="/checkout">Checkout</Link>
            </li>
          </ul>
        </li>

        <li className={dropdown.shop ? "rv-dropdown-active" : ""}>
          <a role="button" onClick={() => handleToggleDropdown("shop")}>
            Shop
          </a>
          <ul className="sub-menu">
            <li>
              <Link href="/shop">Shop</Link>
            </li>
            <li>
              <Link href="/shop-sidebar">Shop with Sidebar</Link>
            </li>
            <li>
              <Link href="/shop/herbal-hair-oil">Product Details</Link>
            </li>
          </ul>
        </li>

        <li className={dropdown.blog ? "rv-dropdown-active" : ""}>
          <a role="button" onClick={() => handleToggleDropdown("blog")}>
            Blog
          </a>
          <ul className="sub-menu">
            <li>
              <Link href="/blog">Blog</Link>
            </li>
            <li>
              <Link href="/blog/finding-creative-flow-organic">
                Blog Details
              </Link>
            </li>
          </ul>
        </li>

        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavSection;
