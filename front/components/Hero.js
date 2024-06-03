"use client";

import React from "react";
import Navigation from "./Navigation";
import { Container, Row, Col } from "react-bootstrap";
import alephshib from "../images/alephshib.png";
import telegram from "../images/icons/telegranImg.png";
import twitter from "../images/icons/twitterImg.png";
import chatApp from "../images/icons/openChat.png";
import Image from "next/image";

import alephzero from "../images/aleph-zero-logo.svg";
import Link from "next/link";
// import artzero from '../images/alephshib-artzero.svg'
// import dextools from '../images/dextools.webp'
// import cmc from '../images/cmc.webp'
// import coingecko from '../images/coingecko.webp'

const Hero = () => {
  return (
    <div className="hero-section">
      <Navigation />
      <div className="hero-inner">
        <Container>
          <Row>
            <Col md={7} id="first">
              <div
                className="hero-left"
                data-aos="zoom-in"
                data-aos-duration="1000"
                data-aos-once="true"
              >
                <div className="">
                  <div className="mb-3">
                    <h1 className="hero-title">Boom Fart</h1>
                  </div>
                  <Row>
                    <Col md={9}>
                      <p className="hero-text">
                        In the whimsical world of crypto, where every coin has a
                        story, one tale stands out with an explosive twist — the
                        story of Boom Fart. The crypto community quickly
                        embraced Boom Fart, and it became the go-to token for
                        those who believed that wealth could be built on
                        laughter!
                      </p>
                    </Col>
                  </Row>
                  <div className="d-flex end pt-3 btns-mobile-center">
                    
                        <Link href="https://google.com" className="buy-now-btn hvr-back-pulse me-3" >
                        Buy
                    </Link>
                    <div className="buy-now-btn hvr-back-pulse">View Chart</div>
                  </div>
                  {/* <div className="d-flex justify-content-start mt-6 mb-3 pt-5">
                    <a
                      href="https://t.me/+0b074kP2OpVkZDk0"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div className="circle">
                        <Image
                          style={{
                            width: "3.5rem",
                            height: "3.5rem",
                            borderRadius: "50%",
                          }}
                          src={telegram}
                          alt="alephshib telegram"
                        />
                      </div>
                    </a>
                    <a
                      href="https://twitter.com/BoomFartcoin"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div className="circle">
                        <Image
                          src={twitter}
                          style={{
                            width: "4rem",
                            height: "4rem",
                            borderRadius: "50%",
                          }}
                          alt="alephshib twitter"
                        />
                      </div>
                    </a>
                    <a
                      href="https://oc.app/?ref=xv6c4-xaaaa-aaaaf-bjlla-cai"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div className="circle">
                        <Image
                          src={chatApp}
                          style={{
                            width: "3rem",
                            height: "3rem",
                            borderRadius: "50%",
                            backgroundColor: "black",
                            margin: "0 auto !important",
                          }}
                          alt="alephshib twitter"
                        />
                      </div>
                    </a>
                  </div> */}
                  <div className="d-flex justify-content-start mt-6 mb-3 pt-5">
                    <Link href="https://t.me/+0b074kP2OpVkZDk0">
                      <div className="circle">
                        <Image
                          style={{
                            width: "3.5rem",
                            height: "3.5rem",
                            borderRadius: "50%",
                          }}
                          src={telegram}
                          alt="alephshib telegram"
                        />
                      </div>
                    </Link>

                    <Link href="https://twitter.com/BoomFartcoin">
                      <div className="circle">
                        <Image
                          src={twitter}
                          style={{
                            width: "4rem",
                            height: "4rem",
                            borderRadius: "50%",
                          }}
                          alt="alephshib twitter"
                        />
                      </div>
                    </Link>

                    <Link href="https://oc.app/?ref=xv6c4-xaaaa-aaaaf-bjlla-cai">
                      <div className="circle">
                        <Image
                          src={chatApp}
                          style={{
                            width: "3rem",
                            height: "3rem",
                            borderRadius: "50%",
                            backgroundColor: "white",
                          }}
                          alt="alephshib twitter"
                        />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={5} id="second">
              <div
                className="landing-hero-img"
                data-aos="zoom-in"
                data-aos-duration="1000"
                data-aos-once="true"
              >
                <Image
                  className="w-10 h-10 rounded-full"
                  style={{
                    width: "15rem",
                    height: "15rem",
                    borderRadius: "50%",
                  }}
                  src={alephshib}
                  alt="logo"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      {/* <div className="d-flex justify-content-center brands mb-3"></div> */}
    </div>
  );
};

export default Hero;
