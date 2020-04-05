import React from 'react'
import Header from './header'
import Carousel from './carousel';
import Films from './list-fiml/fiml'
import Cinema from './Cinema/cinema';
import News from "./New";
import AppHome from "./AppHome/AppHome";
import Footer from './footer'
export default function Home() {
    return (
        <div>
        <Header />
        <Carousel />
        <Films />
        <Cinema />
        <News />
        <AppHome />
        <Footer />
        </div>
    )
}
