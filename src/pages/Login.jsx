import React from 'react'
import { useForm } from 'react-hook-form'
import { loginUser, userLogOut } from '../store/slices/userInfo.slice'
import { useDispatch, useSelector } from 'react-redux'

const Login = () => {

  const {register, handleSubmit, reset} = useForm();

  const {token, user: {firstName, lastName} } = useSelector(store => store.userInfo);

  const dispatch = useDispatch();
  
  const submit = (data) => {
    dispatch(loginUser(data));
    reset({
      email:"",
      password: ""
    })
  }

  const handleLogOut = () => {
    dispatch(userLogOut())
  }

  return (
    <main className='login_main' >
      {
        token? (
          <section className='login_logout' >
            <div className="login_logout_icon_container">
              <i  className='bx bx-user login_logout_icon' ></i>
            </div>
            <h4 className='login_logout_username' >Welcome! {firstName} {lastName}</h4>
            <button onClick={handleLogOut} className="login_logout_btn" > 
              Log out <i className='bx bx-log-out' ></i>
            </button>
          </section>
        ) : (
          <form onSubmit={handleSubmit(submit)} className="login_form">
            <h4 className='login_form_message' >Welcome! Enter your email and password to continue</h4>
            <div className='login_form_data'>
              <h5>Test data</h5>
              <p><i className='bx bx-envelope'></i> john@gmail.com</p>
              <p><i className='bx bx-lock-alt' ></i> john1234</p>
            </div>
            <div className='login_form_input'>
              <input type="text" placeholder='Email' required {...register("email")} />
              <input type="password" placeholder='Password' required {...register("password")} />  
            </div>
            <button className='login_form_btn' >Login <i className='bx bx-log-in'></i> </button>
            <p className='login_form_register' >Don't have an account? <span>Sing up</span> </p>
          </form>    
        )
      }

    </main>
  )
}

export default Login