import React from 'react'
import profilePhoto from '../img/profilePhoto.png'

export default function callToAction() {
    return (
        <section id="callToAction" className="call-to-action homeMobile py-5">
            <div className="container text-center">
                <div className="row align-items-center">
                    <div className="col-12 col-sm-12 col-lg-6 col-xl-6 pb-5">
                        <h2 className="pt-3">Welcome!</h2>

                        <div className="mx-auto heading-line"></div>
            
                        <div className="row justify-content-center align-items-center">
                            <div className="col-10">
                                <p className="py-3 text-justify lead">I am a Cape Town based Professional makeup artist and nail tech. My Services include weddings, special events and photo shoots. I love skin to look like skin and I believe that makeup should not wear you, but it should enhance that natural beauty that is already there.</p>
                            </div>
                        </div>
            
                        <button className="btn btn-lg btn-primary">Book a session</button>
                    </div>

                    <div className="col-12 col-sm-12 col-lg-6 col-xl-6">
                        <img src={profilePhoto} className="img-fluid mb-4 roundImg shadows2" alt=""
                        data-wow-delay="0.5s" />
                    </div>
                </div>
            </div>
    </section>
    )
}
