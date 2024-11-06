import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signin, authenticate, isAuthenticated } from '../../auth';

const Loginpage = () => {
  const navigate = useNavigate();
  const { user } = isAuthenticated();

  const [values, setValues] = useState({
    email: '',
    password: '',
    error: '',
    redirectToPage: false
  });

  const { email, password, error, redirectToPage } = values;

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setValues({ ...values, error: false });

    signin({ email, password })
      .then((data) => {
        if (data.error) {
          setValues({ ...values, error: data.error });
        } else {
          authenticate(data, () => {
            setValues({ ...values, redirectToPage: true });
          });
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  // to show error message
  const showError = () => {
    return (
      <div className="bg-red-100 text-red-800 p-4 rounded-lg" style={{ display: error ? '' : 'none' }} role="alert">
        <strong className="font-bold text-sm mr-4">Error!</strong>
        <span className="block text-sm sm:inline max-sm:mt-2">{error}</span>
      </div>
    );
  };

  // to redirect user only when `redirectToPage` is set to true
  useEffect(() => {
    if (redirectToPage) {
      const redirect = '/profile';
      if (user && user.role === 1) {
        navigate('/admin');
      } else {
        navigate(redirect);
      }
    }
  }, [redirectToPage, navigate, user]); // Depend on `redirectToPage`, `navigate`, and `user`

  return (
    <>
      <div className="font-[sans-serif] p-10">
        <div className="grid lg:grid-cols-2 md:grid-cols-2 items-center gap-4 h-full">
          <div className="max-md:order-1 lg:col-span-1 md:h-screen w-full bg-[#000842] lg:p-12 p-8">
            <img src="https://readymadeui.com/signin-image.webp" className="lg:w-[70%] w-full h-full object-contain block mx-auto" alt="login-image" />
          </div>

          <div className="w-full p-6">
            <form>
              <div className="mb-8">
                <h3 className="text-gray-800 text-3xl font-extrabold">Sign in</h3>
                <p className="text-sm mt-4 text-gray-800">
                  Don't have an account <Link to="/register" className="text-blue-600 font-semibold hover:underline ml-1 whitespace-nowrap">Register here</Link>
                </p>
              </div>
              {showError()}
              <div>
                <label className="text-gray-800 text-[15px] mb-2 block" htmlFor='email'>Email</label>
                <div className="relative flex items-center">
                  <input name="email" id='email' type="text" required className="w-full text-sm text-gray-800 bg-gray-100 focus:bg-transparent px-4 py-3.5 rounded-md outline-blue-600" placeholder="Enter email" onChange={handleChange('email')} value={email} />
                </div>
              </div>

              <div className="mt-4">
                <label className="text-gray-800 text-[15px] mb-2 block" htmlFor='password'>Password</label>
                <div className="relative flex items-center">
                  <input name="password" id='password' type="password" required className="w-full text-sm text-gray-800 bg-gray-100 focus:bg-transparent px-4 py-3.5 rounded-md outline-blue-600" placeholder="Enter password" onChange={handleChange('password')} value={password} />
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 mt-4">
                <div className="flex items-center">
                  <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-gray-300 rounded-md" />
                  <label htmlFor="remember-me" className="ml-3 block text-sm">
                    Remember me
                  </label>
                </div>
                <div>
                  <Link to="javascript:void(0);" className="text-blue-600 font-semibold text-sm hover:underline">
                    Forgot Password?
                  </Link>
                </div>
              </div>
              <div className="mt-8">
                <button type="button" className="w-full py-3 px-6 text-sm tracking-wide rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none" onClick={handleSubmit}>
                  Sign in
                </button>
              </div>

              <div className="my-4 flex items-center gap-4">
                <hr className="w-full border-gray-300" />
                <p className="text-sm text-gray-800 text-center">or</p>
                <hr className="w-full border-gray-300" />
              </div>

              <button type="button" className="w-full flex items-center justify-center gap-4 py-3 px-6 text-sm tracking-wide text-gray-800 border border-gray-300 rounded-md bg-gray-50 hover:bg-gray-100 focus:outline-none">
                <svg xmlns="http://www.w3.org/2000/svg" width="20px" className="inline" viewBox="0 0 512 512">
                  <path fill="#fbbd00" d="M120 256c0-25.367 6.989-49.13 19.131-69.477v-86.308H52.823C18.568 144.703 0 198.922 0 256s18.568 111.297 52.823 155.785h86.308v-86.308C126.989 305.13 120 281.367 120 256z" />
                  <path fill="#0f9d58" d="m256 392-60 60 60 60c57.079 0 111.297-18.568 155.785-52.823v-86.216h-86.216C305.044 385.147 281.181 392 256 392z" />
                  <path fill="#31aa52" d="m139.131 325.477-86.308 86.308a260.085 260.085 0 0 0 22.158 25.235C123.333 485.371 187.62 512 256 512V392c-49.624 0-93.117-26.72-116.869-66.523z" />
                  <path fill="#3c79e6" d="M512 256a258.24 258.24 0 0 0-4.192-46.377l-2.251-12.299H256v120h121.452a135.385 135.385 0 0 1-51.884 55.638l86.216 86.216a260.085 260.085 0 0 0 25.235-22.158C485.371 388.667 512 324.38 512 256z" />
                  <path fill="#cf2d48" d="m352.167 159.833 10.606 10.606-79.99 79.99c49.358 1.297 87.242 45.107 87.242 95.541 0 53.301-41.512 96.813-92.837 96.813-45.576 0-83.779-29.258-97.592-69.278 30.312 2.635 58.72 25.204 79.572 48.743 13.315-10.957 22.757-26.442 22.757-43.273 0-33.738-27.662-61.4-61.4-61.4s-61.4 27.662-61.4 61.4c0 33.073 27.076 59.939 59.489 59.939 33.474 0 60.835-27.361 60.835-60.835 0-11.512-9.352-20.865-20.865-20.865-11.513 0-20.865 9.353-20.865 20.865z" />
                </svg>
                Sign in with Google
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Loginpage;
