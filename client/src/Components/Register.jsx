import React from "react";
import { Link } from 'react-router-dom';
import avatar from '../assets/profile.png';
import { Toaster } from 'react-hot-toast';
import { useFormik } from 'formik'
import { registerValidation } from '../Helper/validate';
import styles from '../Styles/Username.module.css';
import { useState } from "react";
import convertToBase64 from "../Helper/convert";

function Register() {

  const [file, setFile] = useState()

  const formik = useFormik({
    initialValues : {
      email: 'doyol56239@cnogs.com',
      username: 'example123',
      password : 'admin@123'
    },
    validate : registerValidation,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit : async values => {
      values = await Object.assign(values, { profile : file || ''})
      console.log(values)
    }
  })

  /** formik doensn't support file upload so we need to create this handler */
  const onUpload = async e => {
    const base64 = await convertToBase64(e.target.files[0]);
    setFile(base64);
  }


  return (
    <div className="container mx-auto">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="flex flex-col justify-center items-center h-screen">
        <div className={styles.glass}>
          <div className="title flex flex-col items-center">
            <h4 className="text-4xl font-bold "> Register</h4>
            <span className="py-4 text-xl w-2/3 text-center text-gray-500">
            happy to join you!
            </span>
          </div>
          <form className="py-1" onSubmit={formik.handleSubmit}>
            <div className="profile flex justify-center py-4">
              <label htmlFor="profile">
                <img src={file ||avatar} className={styles.profile_img} alt="avatar" />
              </label>
              <input onChange={onUpload} type="file" id="profile" name="profile"/>
              
            </div>
            <div className="textbox flex flex-col items-center gap-6">
              <input {...formik.getFieldProps('email*')} className={styles.textbox} type="text" placeholder="Email" />
              <input {...formik.getFieldProps('username*')} className={styles.textbox} type="text" placeholder="UserName" />
                 <input {...formik.getFieldProps('password')} className={styles.textbox} type="text" placeholder="Password" />
              <button className={styles.btn} type="submit">Sign Up</button>
            </div>
            <div className="text-center py-4">
              <span className="text-gray-500">Register Now? <Link to="/" className="text-red-500">Login Now</Link></span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;

