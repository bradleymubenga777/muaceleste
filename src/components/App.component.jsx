import React, { Component } from 'react'
import Header from './Header.component'
import PortfolioSection from './portfolioSection.component'
import CallToAction from './callToAction.component'
import Contact from './contact.component'
import Footer from './footer.component'
import '../importCss.css'

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
