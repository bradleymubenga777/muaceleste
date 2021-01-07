import React, { Component } from 'react'
import Header from './Header.component'
import 'https://drive.google.com/uc?export=view&id=1Ls99W8HxzSDMEBIQ9WLuWFoBpsWe7weu'
import PortfolioSection from './portfolioSection.component'
import CallToAction from './callToAction.component'
import Contact from './contact.component'
import Footer from './footer.component'

export default class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <PortfolioSection />
                <CallToAction />
                <Contact />
                <Footer />
            </div>
        )
    }
}
