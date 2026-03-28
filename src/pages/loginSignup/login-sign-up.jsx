import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './login-sign-up.css'
import person_icon from '../../assets/person.png'
import email_icon from '../../assets/email.png'
import password_icon from '../../assets/password.png'
import { use } from "react";

/*........................................................................................................*/

function LoginSignUp() {

    {/* LOGIN AND SIGN UP MODE ARE DECIDED HERE*/}
    const[mode,setMode] = useState("Sign up")
    const[signupRegistration, setRegistration] = useState("")

    {/* THIS LINES RETRIVES INPUTES  */}
    const [institute, setInstitute] = useState("");
    const [email, setEmail] = useState("");
    const [department, setDepartment] = useState("");
    const [level, setLevel] = useState("");
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    


    //REDIRECTING PAGE
    const navigate = useNavigate();
    





    {/* LOGIN AND SIGN UP CONFIRMATION */}
    const[submition, setSubmition] = useState(false)
    const[isAMember, setIsAMember] = useState(false)


    



/*THIS CODE RETURNS TO SIGN UP PAGE, FROM FINISH UP PAGE */
const[returnToSignup, setReturn] = useState("")




//THIS CODE HANDLES SIGN UP AND FINISH UP ERRORS
/*
---------------------------------------------------------------
                       FINISH UP ERROR HANDLEING
*/
const[levelErr, setLvlErr] = useState(true)
const[departmentErr, setDpartErr] = useState(true)
const[idErr, setIdErr] = useState(true)
const[confirmPasslErr, setConfirmPassErr] = useState(true)


const handleFinishUp = () => {
    setLvlErr(true);
    setDpartErr(true);
    setConfirmPassErr(true);
    setIdErr(true)
    const validLevels = ["100","200","300","400"]

   if(!level){
    setLvlErr(false);
   }

   else if(!validLevels.includes(level)){
    setLvlErr(false);
   }

   else if(!department){
    setDpartErr(false);
   }

   else if(!id){
    setIdErr(false);
   }

   else if(id.length !== 8 || !Number.isInteger(Number(id))){
    setIdErr(false);
  }

   else if(!confirmPassword){
    setConfirmPassErr(false);
   }

  else if (password !== confirmPassword) {
    setConfirmPassErr(false);
  } else{
    
    alert("Submited, an email will be sent to you to confirm")
    setSubmition(true)
    
    
  }
  
  

}

//    SIGNUP ERROR HANDLEING

const[instituteErr, setInstErr] = useState()
const[emailErr, setMailErr] = useState()
const[passwordErr, setpassErr] = useState()

const handleSignupError = () =>{

    setInstErr(true)
    setMailErr(true)
    setpassErr(true)

    if(!institute){
        setInstErr(false);
    }
    else if(!email){
        setMailErr(false);
    } 
    else if(!password){
        setpassErr(false);
    } 
    else if (institute.trim().toUpperCase() !== "UPSA"){
        setInstErr(false);
    }
    else if (!email.includes("@upsamail.edu.gh")) {
        setMailErr(false);
    } 
    else if (password.length < 6) {
        setpassErr(false);
        
    }
    else{
        setRegistration("next");
            setReturn("next");
        
    }


}

// LOGIN ERROR HANDLING

const loginData = {
        email,
        password
    };

const handleLoginAuth = () => {
    



    setMailErr(true);
    setpassErr(true);


    if(!email){
        setMailErr(false);
    } 
    else if (!email.includes("@upsamail.edu.gh")) {
        setMailErr(false);
    } 
    else if (password.length < 6) {
        setpassErr(false);
        
    } else{
         setIsAMember(true)
    }
    

}
//SUCCESFUL LOGIN
const authSuccesfull = () => {
        if( isAMember === true) {
            localStorage.setItem( "user", JSON.stringify(loginData));

            navigate("/main-app")
        }
        console.log(JSON.parse(localStorage.getItem("user")))
    }
 //------------------------------------------------------------------



    return(
        <>

        {/***********LOGIN-SIGNUP PAGE********************/}

        {/* NNAVIGATION BAR*/}
            <div className="login-signup-page">
                <div className="nav-bar">
                    <div className="logo">Uni-HUB</div>
                </div>

                
                <div className="container">
                    { signupRegistration === "next" ? 
                         <>
                         {/* 
    -------------------------------------------------------
    THIS LINE MOVES BETWEEN SIGN UP PAGE AND FINISH UP PAGE
                    IT STARTS HERE
    --------------------------------------------------------
                          */}
                         {returnToSignup === "return" ?
                         <>
                            <div className="form-title">
                                {mode}
                            </div>
                            <div className="form-inputs">

                                {/* HIDES THE INSTITUTE INPUT WHEN mode === login */}
                                { mode === "Login"? <div></div> :  <div className={instituteErr === false ? "error" : "input"}>

                                    {/* INSTITUTE INPUT */}
                                    <img src={person_icon} alt="" />

                                    <input className={ instituteErr === false  ? "error-input" :""} type="text"
                                    placeholder="Insitute  (UPSA)"
                                    value={institute}
                                    onChange={(e) => setInstitute(e.target.value)}
                                     />
                                </div>}

                                {/* EMAIL INPUT */}
                                <div className={emailErr === false ? "error" : "input"}>
                                    <img src={email_icon} alt="" />

                                    <input className={emailErr === false ? "error-input" : ""} type="text" 
                                    placeholder="Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                     />
                                    
                                </div>

                                {/* PASSWORD INPUT */}
                                <div className={passwordErr === false ? "error" : "input"}>
                                    <img src={password_icon} alt="" />

                                <input className={ passwordErr === false  ? "error-input" :""}
                                    type={passwordErr === false ? "text" : "password"} 
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                     />
                                </div>

                                {/* FORGOT BUTTON WHEN ITS SIGN UP MODE */}
                                {mode === "Sign up" ? <div></div>
                                 : //else
                                 <div className="pass-retrieve">forgot  password?</div>}
                                
                            </div>
                            <div className="input-submit">

                                {/* BUTTON CHANGES TO NEXT WHEN "mode === sign up" */}
                                {mode === "Sign up"? <button className="sign-up-btn"
                                onClick={handleSignupError}
                                >Next</button>
                                 : // ELSE IT CHANGES TO SIGN UP
                                 <button 
                                 type="button"
                                className={ mode  === "Login" ? "gray" : "sign-up-btn"}
                                onClick={() =>{
                                    setMode("Sign up")
                                }}>Sign up</button>}

                                {/* LOGIN BUTTON WHEN "mode === Login" */}
                                { mode === "Login"? <button 
                                className="sign-up-btn"
                                type="submit"
                                onClick={handleLoginAuth}
                                >Login</button>

                                :// ELSE

                                <button className={ mode  === "Sign up" ? "gray" : "sign-up-btn"} 
                                type="button"
                                onClick={
                                    () =>{
                                    setMode("Login")
                                }}>Login</button>
                                }
                                
                            </div>
                         </>

                         : //ELSE

/*******************************SUBBMITION OF SIGN UP FORM*******************************************/
                         <>
                         {submition === true ?
                         <>
                            <div className="form-title"> Login</div>
                            <div className="form-inputs">

                                

                                {/* EMAIL INPUT */}
                                <div className={emailErr === false ? "error" : "input"}>
                                    <img src={email_icon} alt="" />

                                    <input className={emailErr === false ? "error-input" : ""} type="text" 
                                    placeholder="Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                     />
                                    
                                </div>

                                {/* PASSWORD INPUT */}
                                <div className={passwordErr === false ? "error" : "input"}>
                                    <img src={password_icon} alt="" />

                                    <input className={ passwordErr === false  ? "error-input" :""}type={passwordErr ==="err" ? "text" : "password"} 
                                    placeholder={passwordErr === false ? "text" : "password"}
                                    value={password}
                                    onChange={(e) => setPassword(target.value)}
                                     />
                                </div>

                                
                                 <div 
                                 className="pass-retrieve"
                                 
                                 >forgot  password?</div>
                                
                            </div>
                            <div className="input-submit">
                                
                                 <button 
                                className= "gray"
                                type="button"
                                onClick={()=>{window.location.reload()}}
                                >Sign up</button>

                                <button 
                                className="sign-up-btn"
                                type="submit"
                                onClick={() =>{
                                    handleLoginAuth();
                                    authSuccesfull();
                                }
                                    
                                }
                                >Login</button>

                                
                            </div>
                         </>

                         :

                         <>
                         <div className="form-title">Finish up</div>
                            <div className="form-inputs">

                                {/* FINISH UP FORM */}

                                {/* LEVEL */}
                                <div className={ levelErr === false ? "error" : "input"}>
                                    <input 
                                    className={levelErr === false ? "error-input" : ""} 
                                    type="text" 
                                    value={level}
                                    placeholder="Level"
                                    onChange={(e) => setLevel(e.target.value)}
                                    />
                                </div>

                                {/* DEPARTMENT */}
                                <div className={departmentErr ===false ? "error" : "input"}>
                                    <input 
                                    className={ departmentErr === false ? "error-input" : ""} 
                                    type="text" 
                                    value={department}
                                    placeholder="Department"
                                    onChange={(e) => setDepartment(e.target.value)}
                                    />
                                </div>

                                {/* ID NUMBER */}
                                <div className={ idErr === false ? "error" : "input"}>
                                    <input 
                                    className={ idErr === false ? "error-input" : ""} 
                                    type="text" 
                                    value={id}
                                    placeholder="ID number"
                                    onChange={(e) => setId(e.target.value)}
                                    />
                                </div>

                                {/* PASSWORD CONFIRMATION */}
                                <div className={ confirmPasslErr === false ? "error" : "input"}>
                                    <input className={ confirmPasslErr === false ? "error-input" : ""} type="password" 
                                    placeholder="Confirm password"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    />
                                </div>
                            </div>
                            {/* SUBMIT BUTTON ALSO CHANGES TO BACK CONDITIONALLY*/}
                            
                            <div className="input-submit">
                                { password === confirmPassword || confirmPassword === "" ?  <button type="button" 
                                className="submit-btn"
                                onClick={handleFinishUp}
                                >Submit</button>
                                : //ELSE
                                <button 
                                type="button"
                                className="submit-btn"
                                onClick={() => {
                                    setReturn("return")
                                }}
                                >Back</button>
                             }
                            </div>
                         </>
                         } 
                         </>
                         }
                         {/* 
        -------------------------------------------------------------------
                              ^^^^^^ AND IT ENDS HERE^^^^^^^^^^^
        --------------------------------------------------------------------
                          */}


                            
                         </> 
                         : //ELSE!!!!!!
                         <>
                            <div className="form-title">
                                {mode}
                            </div>
                            <div className="form-inputs">

                                {/* HIDES THE INSTITUTE INPUT WHEN mode === login */}
                                { mode === "Login"? <div></div> :  <div className={instituteErr === false ? "error" : "input"}>

                                    {/* INSTITUTE INPUT */}
                                    <img src={person_icon} alt="" />

                                    <input className={ instituteErr === false  ? "error-input" :""} type="text"
                                    placeholder="Insitute (UPSA)"
                                    onChange={(e) => setInstitute(e.target.value)}
                                     />
                                </div>}

                                {/* EMAIL INPUT */}
                                <div className={emailErr === false ? "error" : "input"}>
                                    <img src={email_icon} alt="" />

                                    <input className={ emailErr === false ? "error-input" : ""} type="text" 
                                    placeholder="Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                     />
                                    
                                </div>

                                {/* PASSWORD INPUT */}
                                <div className={passwordErr === false ? "error" : "input"}>
                                    <img src={password_icon} alt="" />

                                    <input className={ passwordErr === false  ? "error-input" :""} type="password" 
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                     />
                                </div>

                                {/* FORGOT BUTTON WHEN ITS SIGN UP MODE */}
                                {mode === "Sign up" ? <div></div>
                                 : //else
                                 <div
                                  className="pass-retrieve"
                                  onClick={() => {
                                    navigate('/forgot-password')
                                  }}
                                  >forgot  password?</div>}
                                
                            </div>
                            <div className="input-submit">

                                {/* BUTTON CHANGES WHEN "mode === sign up" */}
                                {mode === "Sign up"? <button className="sign-up-btn"
                                type="button"
                                onClick={handleSignupError}
                                >Next</button>
                                 : // ELSE
                                 <button 
                                 type="button"
                                className={ mode  === "Login" ? "gray" : "sign-up-btn"}
                                onClick={() =>{
                                    setMode("Sign up")
                                }}>Sign up</button>}

                                {/* BUTTON WHEN "mode === Login" */}
                                { mode === "Login"? <button 
                                className="sign-up-btn"
                                type="submit"
                                onClick={ () => {
                                    handleLoginAuth()
                                    authSuccesfull();
                                } }
                                >Login</button>
                                :// ELSE
                                <button className={ mode  === "Sign up" ? "gray" : "sign-up-btn"} 
                                type="button"
                                onClick={() =>{
                                    setMode("Login")
                                }}>Login</button>
                                }
                                
                            </div>
                         </>
                         }
                    
                </div>
            </div>
        </>
    );

   
}

export  default LoginSignUp