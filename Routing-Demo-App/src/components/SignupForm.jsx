import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';

const SignupForm = ({ setIsLoggedIn }) => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
    })

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    function changeHandler(event) {
        setFormData((prevData) => ({
            ...prevData,
            [event.target.name]: event.target.value
        }))
    }

    function submitHandler(event) {
        event.preventDefault();

        if (formData.password != formData.confirmPassword) {
            toast.error("Password do not match");
            return;
        }
        else {
            setIsLoggedIn(true);
            toast.success("Account Created");
            const accountdata = {
                ...formData
            }

            console.log(accountdata);
            navigate('/dashboard');
        }

    }



    return (
        <div>
            <button>
                Student
            </button>
            <button>
                Instructor
            </button>

            <form onSubmit={submitHandler}>
                <div>
                    <label >
                        <p>First Name<sup>*</sup></p>
                        <input type="text"
                            required
                            name='firstName'
                            onChange={changeHandler}
                            placeholder='Enter First Name'
                            value={formData.firstName}
                        />
                    </label>
                    <label >
                        <p>Last Name<sup>*</sup></p>
                        <input type="text"
                            required
                            name='lastName'
                            onChange={changeHandler}
                            placeholder='Enter Last Name'
                            value={formData.lastName}
                        />
                    </label>
                </div>

                <label >
                    <p>email<sup>*</sup></p>
                    <input type="email"
                        required
                        name='email'
                        onChange={changeHandler}
                        placeholder='Enter Email Address'
                        value={formData.email}
                    />
                </label>

                <div>
                    <label >
                        <p>Create Password<sup>*</sup></p>
                        <input type={showPassword ? ("text") : ("password")}
                            required
                            name='password'
                            onChange={changeHandler}
                            placeholder='Enter password'
                            value={formData.password}
                        />
                    </label>
                    <span onClick={() => setShowPassword((prev) => !prev)}>
                        {showPassword ? (<AiOutlineEye />) : (<AiOutlineEyeInvisible />)}
                    </span>

                    <label >
                        <p>Confirm Password<sup>*</sup></p>
                        <input type={showConfirmPassword ? ("text") : ("password")}
                            required
                            name='confirmPassword'
                            onChange={changeHandler}
                            placeholder='Enter Confirm Password'
                            value={formData.confirmPassword}
                        />
                    </label>
                    <span onClick={() => setShowConfirmPassword((prev) => !prev)}>
                        {showConfirmPassword ? (<AiOutlineEye />) : (<AiOutlineEyeInvisible />)}
                    </span>
                </div>

                <button>
                    Create Account
                </button>
            </form>
        </div>
    )
}

export default SignupForm