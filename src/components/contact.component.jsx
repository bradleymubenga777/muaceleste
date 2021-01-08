import React from 'react'
import '../font-awesome/css/font-awesome.min.css'

export default function Contact() {
    return (
        <section className="portfolio container-fluid my-5">
            <div className="text-center py-3">
                <h2 className="py-3">Contact</h2>

                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="d-flex justify-content-center">
                                <div className="faLink">
                                    <a href="https://www.facebook.com/MUACeleste/" className="mr-5"><i className="fa fa-facebook"></i></a>
                                </div>
                
                                <div className="faLink">
                                    <a href="https://instagram.com/celestinah_the_artist" className="mr-5"><i className="fa fa-instagram"></i></a>
                                </div>
                
                                <div className="faLink">
                                    <a href="https://wa.me/27717342279"><i className="fa fa-whatsapp"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
