"use client";

import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import metaverse from "../images/alephshib.png";
import Image from "next/image";
// import fun from '../images/fun.jpg'

const Metaverse = () => {
  return (
    <div id="metaverse" className="about-section">
      <Container
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-once="true"
      >
        <div className="text-center">
          <h3 className="section-title">Enter the Boom Fart</h3>
        </div>
        <Row>
          <Col md={6} className="mb-4">
            <div
              className="section-inner"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-once="true"
            >
              <div>
                <p>The utility of the Boom Fart token won&apos;t stop there!</p>
                <p>
                  2% of the transaction tax is used for marketing and community
                  rewards.
                </p>
                <p>
                  Beyond the basics, the Boom Fart project is using innovative
                  ways to expand while reaching new users, investors and
                  traders.
                </p>
                <p>What you can expect from us:</p>
                <ul className="text-start">
                  <li>Competitions and contests (Twitter, Tiktok...)</li>
                  <li>Boom Fart NFT launch</li>
                  <li>Boom Fart Portfolio Tracker</li>
                  <li>Boom Fart Merch, And more to come</li>
                </ul>
              </div>
            </div>
          </Col>
          <Col md={6} className="mb-4">
            <div
              className="token-image"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-once="true"
            >
              <Image
                className="rotation360 rotateImg"
                style={{
                  height: "15rem",
                  width: "15rem",
                  margin: "0 auto",
                }}
                src={metaverse}
                alt="alephshib"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Metaverse;
