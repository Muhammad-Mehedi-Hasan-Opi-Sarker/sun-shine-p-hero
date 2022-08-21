import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Loading from '../Loading';
import { useNavigate,useLocation } from "react-router-dom";


const SocialLogin = () => {
    const navigate=useNavigate();
    const location = useLocation()
    let from = location.state?.from?.pathname || "/";

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    if (error) {
        return (
          <div>
            <p>Error: {error.message}</p>
          </div>
        );
      }
      if (loading) {
        return <Loading></Loading>
      }
      if (user) {
        navigate(from, { replace: true });
      }

    return (
        <div>
            <button onClick={()=>signInWithGoogle()} className='btn btn-primary'>Sign In By Google</button>
        </div>
    );
};

export default SocialLogin;