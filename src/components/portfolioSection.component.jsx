import React from 'react'
import pictureP0 from '../img/pictureP0.jpeg'
import pictureL0 from '../img/pictureL0.jpg'
import pictureL1 from '../img/pictureL1.jpg'
import pictureP2 from '../img/pictureP2.jpeg'
import pictureP1 from '../img/pictureP1.jpeg'
import pictureL2 from '../img/pictureL2.jpeg'


export default function PortfolioSection() {
    return (
        <section id="porfolioSecion" className="container">

            <div className="row">

                <div className="col-lg-4 col-md-12 mb-4 text-center">

                    <img src={pictureP0} className="img-fluid mb-4 roundImg shadows" alt="" />

                    <img src={pictureL0} className="img-fluid mb-4 roundImg shadows" alt=""
                        data-wow-delay="0.3s" />

                </div>


                <div className="col-lg-4 col-md-6 mb-4 text-center">

                    <img src={pictureL1} className="img-fluid mb-4 roundImg shadows" alt=""
                        data-wow-delay="0.1s" />

                    <img src={pictureP2} className="img-fluid mb-4 roundImg shadows" alt=""
                        data-wow-delay="0.4s" />

                </div>


                <div className="col-lg-4 col-md-6 mb-4 text-center">

                    <img src={pictureP1} className="img-fluid mb-4 roundImg shadows" alt=""
                        data-wow-delay="0.2s" />

                    <img src={pictureL2} className="img-fluid mb-4 roundImg shadows" alt=""
                        data-wow-delay="0.5s" />

                </div>

            </div>

    </section>
    )
}
