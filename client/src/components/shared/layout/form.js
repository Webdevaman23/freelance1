import React, { useState } from 'react';
import InputType from "./inputType";
import {Link} from 'react-router-dom'
import { handleLogin, handleRegister } from '../../API/authServices';

function Form({ formType , formTitle , submitBtn}) {
    const [email , setEmail] = useState("")
    const [password , setPassword] = useState("")
    const [name , setName] = useState("")
    const [role , setRole] = useState("user")
    const [website , setWebsite] = useState("")
    const [address , setAddress] = useState("")
    const [phone , setPhone] = useState("")

    return (
        <div>
            <form onSubmit={(e)=>{
                if(formType === 'Login')return handleLogin(e , email , password , role);
                else if(formType === 'Register') return handleRegister(e, email , password , name , role , website , address , phone)
            }}>
                <h1 className='text-center'>{formTitle}</h1>
                <hr />
            {/* Role radio  */}
            <div className='d-flex mb-2'>
                {/* donar  */}
                <div className="form-check ">
                    <input className="form-check-input"
                        type="radio"
                        name="role"
                        id="donarRadio"
                        value={"donar"}
                        onChange={(e)=>{setRole(e.target.value)}}
                        defaultChecked
                        />
                    <label className="form-check-label" htmlFor="donarRadio">
                    User
                    </label>
                </div>

                {/* admin  */}
                <div className="form-check ms-3">
                    <input className="form-check-input"
                        type="radio"
                        name="role"
                        id="adminRadio"
                        value={"admin"}
                        onChange={(e)=>{setRole(e.target.value)}}
                        />
                    <label className="form-check-label" htmlFor="adminRadio">
                    Admin
                    </label>
                </div>

            </div>
        
            {/* switch case  */}
            {(()=>{
                //eslint-disable-next-line
                switch(true){
                  case formType === 'Login' : {
                    return (
                        <>
                            {/* email  */}
                                <InputType 
                                labelText={'Email'}
                                labelFor={"ForEmail"}
                                inputType={'email'}
                                name={'email'}
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                />
                            
                            {/* password  */}
                                <InputType 
                                labelText={'Password'}
                                labelFor={"ForPassword"}
                                inputType={'password'}
                                name={'password'}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                />     
                        </>        
                    )
                  }

                case formType === 'Register' : {
                    return (
                        <>
                        {/* name  */}
                        {
                            (role === "donar" || role === "admin") && (
                            <InputType 
                                labelText={'Name'}
                                labelFor={"ForName"}
                                inputType={'text'}
                                name={'name'}
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                            )
                        }

                        {/* email  */}
                            <InputType 
                            labelText={'Email'}
                            labelFor={"ForEmail"}
                            inputType={'email'}
                            name={'email'}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            />

                        {/* password  */}
                            <InputType 
                            labelText={'Password'}
                            labelFor={"ForPassword"}
                            inputType={'password'}
                            name={'password'}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            />
                            

                        {/* website */}
                            <InputType 
                            labelText={'Website'}
                            labelFor={"ForWebsite"}
                            inputType={'text'}
                            name={'website'}
                            value={website}
                            onChange={(e) => setWebsite(e.target.value)}
                            />

                        {/* address */}
                            <InputType 
                            labelText={'Address'}
                            labelFor={"ForAddress"}
                            inputType={'text'}
                            name={'address'}
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            />

                        {/* phone */}
                            <InputType 
                            labelText={'Phone'}
                            labelFor={"ForPhone"}
                            inputType={'text'}
                            name={'phone'}
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            />
                        </>
                    )
                }
                }
            })()}
        
                <div className='d-flex justify-content-between'>
                {
                    formType === 'Login' ? (
                        <p>Not registered yet ? Register
                        <Link to={"/Register"}> Here !</Link>
                        </p>
                    ) : (
                        <p>
                            Already user please
                            <Link to={"/Login"}> Login</Link>
                        </p>
                    )
                }
                    <button className='btn btn-success' type='submit'>
                        {submitBtn}
                    </button>
                </div> 
            </form>
        </div>
    );
}

export default Form;