import React from 'react';
import { Link } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useNavigate } from 'react-router-dom';
import Loading from '../sheard/Loading';
import SocialLogin from '../sheard/SocialLogin/SocialLogin';

const Registration = () => {
  const navigate = useNavigate();

  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);
  const [updateProfile] = useUpdateProfile(auth);
  // registration data submit for 
  const handleRegis = async(event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    console.log(name,email)
    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: name });
  }

  let errorElement;
  if (error) {
    return (
      errorElement = <div>
        <p className='text-danger'> {error?.message}</p>
      </div>

    );
  }

  if (loading) {
    return <Loading></Loading>
  }

  if (user) {
    return (
      navigate('/home')
    );
  }
  return (
    <div>
      <form onSubmit={handleRegis}>
        <div class="hero min-h-screen bg-base-200">
          <div class="hero-content flex-col lg:flex-row-reverse">
            <div class="card flex-shrink-0 lg:w-96 max-w-sm shadow-2xl bg-base-100">
              <div class="card-body">
                <h1 class="lg:text-5xl text-2xl font-bold">Registration Now</h1>
                <div class="form-control">
                  <label class="label">
                    <span class="label-text">Name</span>
                  </label>
                  <input required type="text" name='name' placeholder="Your Name" class="input input-bordered" />
                </div>
                <div class="form-control">
                  <label class="label">
                    <span class="label-text">Email</span>
                  </label>
                  <input type="text" required name='email' placeholder="Enter Your Email" class="input input-bordered" />
                </div>
                <div class="form-control">
                  <label class="label">
                    <span class="label-text">Password</span>
                  </label>
                  <input type="password" required name='password' placeholder="Enter Strong Password" class="input input-bordered" />
                  <label class="label">
                    <a href="#" class="label-text-alt link link-hover">Forgot password?</a>
                  </label>
                </div>
    
                <div class="form-control mt-6">
                  
                  <input type="submit" value="Login" className='btn btn-primary mb-3' />
                  <p className='mb-3'>Already account? <Link to='/login'><span className='mb-3 hover:text-green-600'>
                    Login Please</span></Link></p>
                    {/* {errorElement} */}
                    <SocialLogin></SocialLogin>
                </div>
                {/* other  */}

              </div>
            </div>
          </div>
        </div>
      </form>
     
    </div>
  );
};

export default Registration;