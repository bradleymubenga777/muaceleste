import React from 'react'
import profilePhoto from '../img/profilePhoto.png'
import '../font-awesome/css/font-awesome.min.css'

export default function Header() {
    return (
    <header className="container text-center pt-5 pb-4">
        <img alt="" className="img-fluid roundImg" src={profilePhoto} width="100px" />

        <div className="mt-2">
            <h4>MUA Celéste</h4>
            <p className="lead textJob">Professional Make-up Artist & Nail Technician.</p>
        </div>

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
                        <a href="https://wa.me/717342279"><i className="fa fa-whatsapp"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </header>
    )
}
