"use client";

import React from "react";
import { Container } from "react-bootstrap";
import telegram from "../images/icons/telegranImg.png";
import twitter from "../images/icons/twitterImg.png";
import chatApp from "../images/icons/openChat.png";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div>
      <div className="text-center">
        <Container>
          <div className="d-flex justify-content-center mt-5 mb-3">
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
          <div className="mb-5">
            <Link href="boomfartcoin.com" className="mail">
              help@boomfart.co.ke
            </Link>
          </div>
        </Container>
      </div>
      <footer>
        <p className="mb-0">
          Copyright © {year} Boom Fart. All Rights Reserved
        </p>
      </footer>
    </div>
  );
};

export default Footer;
