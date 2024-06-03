"use client";
import React from "react";
import logo from "../images/alephshib.png";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";

const Navigation = () => {
  return (
    <div className="w-100">
      <div className="ca">
        <div>
          CA:
          ...................................................................................................................................................
        </div>
      </div>
      <Navbar expand="lg" variant="dark" className="pt-4">
        <Container>
          <Navbar.Brand href="/">
            <Image
              src={logo}
              style={{ width: "5rem", height: "5rem", borderRadius: "50%" }}
              alt="alephshib logo"
              className="logo"
            />
            <span style={{ paddingLeft: "1rem" }}>Boom Fart</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto my-2 my-lg-0">
              <Link href="/about" className="nav-link">
                About
              </Link>
              <Link href="/how to buy" className="nav-link">
                How to Buy
              </Link>
              <Link href="/" className="nav-link">
                ICP
              </Link>
              <Link href="/roadmap" className="nav-link">
                Roadmap
              </Link>
              <Link href="/" className="nav-link">
                <Button
                  className="launchapp-btn"
                  style={{ hover: "color white" }}
                >
                  View Chart
                </Button>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
