import React, { useState, useEffect } from "react";
import eye from "./eye.svg"
import eyeslash from "./eyeslash.svg"
import emptybox from "./emptybox.svg"
import checkbox from "./checkbox.svg"
import tick from "./tick.svg"
import Popup from "./popup"
//import { useAlert } from 'react-alert'
const initForm = {
    email: '',
    password: '',
};

function SignUp() {
    const [form, setForm] = useState(initForm);
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [check, setCheck] = useState(false);
    const [validEmail, setValidEmail] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const togglePopup = () => {
        setIsOpen(!isOpen);
    }
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const updateForm = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };
    const changePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    }
    const changeCheck = () => {
        setCheck(!check);
    }
    useEffect(() => {
        if (re.test(String(form.email).toLowerCase()) === true) setValidEmail(true);
        else setValidEmail(false);
    }, [form]);
    /*const handleSubmit = async (form) => {
        try {
            await (async () => addUser(form));

        } catch (error) {
            alert.show('Something went wrong, please try again!')
        }
    }*/
    return (
        <div className="mainBody">
            <h2>Your email</h2>
            <div id="input_container"><input
                id='input'
                type="text"
                autoComplete="off"
                name="email"
                onChange={updateForm}
                placeholder="Enter email"
            />
                {validEmail && <img id="input_img" src={tick}></img>}
            </div>
            <h2>Password</h2>
            <div id="input_container"><input
                id="input"
                type={!passwordVisible ? "password" : "text"}
                autoComplete="off"
                name="password"
                onChange={updateForm}
                placeholder="Enter Password"
            />
                <img id="input_img" src={!passwordVisible ? eye : eyeslash} onClick={changePasswordVisibility}></img>
            </div>
            <div><img id="checkbox" src={!check ? emptybox : checkbox} onClick={changeCheck}></img>I agree to the Terms and Conditions and Privacy Policy.</div>
            <button type="button" disabled={!validEmail || form.password.length < 8 || !check} onClick={togglePopup} > Register</button>
            {isOpen && <Popup
                content={<>
                    <b>Successful!!!</b>
                    <p>Your registration with BuzzTara is successfull!</p>
                </>}
                handleClose={togglePopup}
            />}
        </div >
    );
}

export default SignUp;  