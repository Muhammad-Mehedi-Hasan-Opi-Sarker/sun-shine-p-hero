import React from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import {Link,useLocation} from 'react-router-dom';
import auth from '../../firebase.init';
import { useNavigate } from "react-router-dom";
import Loading from '../sheard/Loading';
import SocialLogin from '../sheard/SocialLogin/SocialLogin';

const Login = () => {
  const navigate =useNavigate();
  const location = useLocation()
    let from = location.state?.from?.pathname || "/";

  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);

  let errorElemet;
  if (error) {
    return (
      errorElemet=<p className='text-danger'> {error?.message}</p>

    );
  }
  if (loading) {
    return <Loading></Loading>
  }
  if (user) {
    navigate(from, { replace: true });
  }

  // login for 
  const handleLogin=event=>{
    event.preventDefault();
    const email=event.target.email.value;
    const password=event.target.password.value;
    signInWithEmailAndPassword(email,password)
  }
  return (
    <div>
      <div>
      <form onSubmit={handleLogin}>
        <div class="hero min-h-screen bg-base-200">
          <div class="hero-content flex-col lg:flex-row-reverse">
            <div class="card flex-shrink-0 lg:w-96 max-w-sm shadow-2xl bg-base-100">
              <div class="card-body">
              <h1 class="lg:text-5xl text-2xl font-bold">Login now!</h1>
                <div class="form-control">
                  <label class="label">
                    <span class="label-text">Email</span>
                  </label>
                  <input type="text" required name='email' placeholder="email" class="input input-bordered" />
                </div>
                <div class="form-control">
                  <label class="label">
                    <span class="label-text">Password</span>
                  </label>
                  <input type="password" required name='password' placeholder="password" class="input input-bordered" />
                  <label class="label">
                    <a href="#" class="label-text-alt link link-hover">Forgot password?</a>
                  </label>
                </div>
                <div class="form-control mt-6 mb-3">
                  {errorElemet}
                  <input type="submit" value="Login" className='btn btn-primary mb-3' />
                  <p>Have account? <Link to='/register'><span className='hover:text-green-600'>
                    Please Register</span></Link></p>
                </div>
                {/* other  */}
                <SocialLogin></SocialLogin>
              </div>
            </div>
          </div>
          
        </div>
      </form>
      </div>
      
    </div>
  );
};

export default Login;