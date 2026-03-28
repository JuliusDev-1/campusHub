import './login-sign-up.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import password_icon from '../../assets/password.png'



function ChangePassword(){


    return(
        <>
        <div className="login-signup-page">
                    <div className="container">
        
                    <div className="form-title">Password</div>
                    <div className="pass-retrieve">Enter a new password</div>
                        <div className="form-inputs">
        
                            <div className="input">
                                <img src={password_icon} alt="" />
                                <input type="text" 
                                placeholder="New password"
                                onChange={(e) => {setEmail(e.target.value)}}
                                />
                            </div>

                            <div className="input">
                                <input type="text" 
                                placeholder="Confirm password"
                                />
                            </div>
                            
                        </div>
                        
                        <div className="input-submit">
                            <button type="button" 
                            className="submit-btn"
                            onClick={() => {
                                sendCodeAuth()
                            }}
                            >Change password</button>
                            
                        </div>
                    </div>
                 </div>
        </>
    )

}

export default ChangePassword;