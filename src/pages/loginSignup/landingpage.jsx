import { useNavigate } from "react-router-dom";
import { useState } from "react";
import './landingpage.css'


function LandingPage() {

    const navigate = useNavigate()

    return(
        <>
        <div className="page"></div>
        <div className="blur"></div>

          <header>
                <div className="logo">
                    <p>Uni-HUB</p>
                </div>
            </header>
            <section className="page-content">
                <h1> Connect With Students In UPSA</h1>
                <h2>Buy • Sell • Share • Stay Updated</h2>
                <button 
                    onClick={() =>{
                        navigate('/login-signup')
                    }}
                > GET STARTED</button>
            </section>
        </>
    )

}


export default LandingPage;