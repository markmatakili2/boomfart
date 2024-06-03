"use client"

import React from 'react'
import About from '../../components/About'
import Footer from "../../components/Footer";
import Hero from "../../components/Hero";
import HowToBuy from "../../components/HowToBuy";
import Ignition from "../../components/Ignition";
import Metaverse from "../../components/Metaverse";
import Roadmap from "../../components/Roadmap";
import StakingRewards from "../../components/StakingRewards";
import Tokenomics from "../../components/Tokenomics";
import Vision from "../../components/Vision";

const Home = () => {


    return (
        <>
            <Hero />
            <About />
            <Tokenomics />
            <Vision />
            <Ignition />
            <HowToBuy />
            <StakingRewards />
            <Metaverse />
            <Roadmap />
            <Footer />
        </>
    )
}

export default Home