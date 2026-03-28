import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login-sign-up.css';
import email_icon from '../../assets/email.png'



function PasswordRetrieval() {
    const[userEmail, setEmail] =  useState("");
    const[newPassword, setNewPassword] = useState("");
    const[confirmNewPassword, setConfirmPass] = useState("");
    const[codeConfirm, setCode] = useState("")
    const[sendCode, setSendCode] = useState(false);
    console.log(userEmail)


    const navigate = useNavigate();

   const sendCodeAuth = () => {
    setSendCode(true)

   }


    return(
        <>
        { sendCode === false ?
            <>
            <div className="login-signup-page">
            <div className="container">

            <div className="form-title">Find</div>
            <div className="pass-retrieve">Enter email to recieve a code</div>
                <div className="form-inputs">

                    <div className="input">
                        <img src={email_icon} alt="" />
                        <input type="text" 
                        placeholder="Email"
                        onChange={(e) => {setEmail(e.target.value)}}
                        />
                    </div>
                    
                </div>
                
                <div className="input-submit">
                    <button type="button" 
                    className="submit-btn"
                    onClick={() => {
                        sendCodeAuth()
                    }}
                    >Send code</button>
                    
                </div>
            </div>
         </div>
            </>

            :

            <>
            <div className="login-signup-page">
            <div className="container">

            <div className="form-title">Confirm</div>
            <div className="pass-retrieve">Enter six digit code recieved</div>
                <div className=" code-input">

                    <div className="input">
                        <input type="text" 
                        placeholder="- - - - - -"
                        />
                    </div>
                    
                </div>
                
                <div className="input-submit">
                    <button type="button" 
                    className="submit-btn"
                    onClick={() => {
                        navigate('/change-password')
                    }}
                    >New password</button>
                    
                </div>
            </div>
            </div>
            </>
        }
         
                                
        </>
    )
}
export default PasswordRetrieval;