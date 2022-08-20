import React from 'react';

const Login = () => {
  return (
    <div>
      <form>
        <div class="hero min-h-screen bg-base-200">
          <div class="hero-content flex-col lg:flex-row-reverse">
            <div class="card flex-shrink-0 lg:w-96 max-w-sm shadow-2xl bg-base-100">
              <div class="card-body">
              <h1 class="lg:text-5xl text-2xl font-bold">Login now!</h1>
                <div class="form-control">
                  <label class="label">
                    <span class="label-text">Email</span>
                  </label>
                  <input type="text" placeholder="email" class="input input-bordered" />
                </div>
                <div class="form-control">
                  <label class="label">
                    <span class="label-text">Password</span>
                  </label>
                  <input type="text" placeholder="password" class="input input-bordered" />
                  <label class="label">
                    <a href="#" class="label-text-alt link link-hover">Forgot password?</a>
                  </label>
                </div>
                <div class="form-control mt-6">
                  <button class="btn btn-primary">Login</button>
                </div>
              </div>
            </div>
          </div>
        </div>a
      </form>
    </div>
  );
};

export default Login;