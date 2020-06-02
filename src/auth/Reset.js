import React, {useState,useEffect} from 'react';
import Layout from './../core/Layout';
import axios from 'axios'
import jwt from 'jsonwebtoken'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

const Reset = ({match}) => {
    const [values, setValues] = useState({
        token: "",
        newPassword:"",
        buttonText: 'Reset Password'
    });

    useEffect(() => {
        let token = match.params.token
        if(token){
            setValues({...values,token})
        }
        
    },[])

    const {token,newPassword,buttonText} = values

    const handleChange = (event) => {
        setValues({...values, newPassword: event.target.value})
    }

    const clickSubmit = event => {
        event.preventDefault()
        setValues({...values, buttonText: 'Reseting'})

        axios({
            method: 'PUT',
            url: `${process.env.REACT_APP_API}/reset-password`,
            data:{newPassword, resetPasswordLink: token}
        })
        .then(response => {
            console.log('RESET PASSWORD SUCCESS', response)
            toast.success(response.data.message)
            setValues({...values, buttonText: 'Done'})
            
        })
        .catch(error =>{
            console.log('RESET PASSWORD ERROR', error.response.data);
            toast.error(error.response.data.error);
            setValues({...values, buttonText:"RESET"})
        })
    } 

    const resetForm = () => (
        <form>
            <div className="form-group">
                <label htmlFor="reset password" className="text-muted">Reset Password</label>
                <input onChange={handleChange} value={newPassword} type="password" className="form-control" placeholder="New Password" required/>
            </div>
            <div>
                <button className="btn btn-primary" onClick={clickSubmit}>{buttonText}</button>
            </div>
        </form>
    )

    return(
        <Layout>
            <div className="col-md-6 offset-md-3">
                <ToastContainer />
                <h1 className="p-5 text-center">Hey, Enter Your New Password</h1>
                {resetForm()}
            </div>
        </Layout>
)
}

export default Reset;



