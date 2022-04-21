import React, { useState, useEffect } from 'react';
import { FaSignInAlt } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';
import { login, reset } from '../features/auth/authSlice';
import Spinner from '../components/Spinner';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';

const googleClientId = process.env.REACT_APP_GOOGLE_CLIENT_ID || '';
const facebookAppId = process.env.REACT_APP_FACEBOOK_APP_ID || '';

function LoginPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess || user) {
      navigate('/');
    }

    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const userData = {
      email,
      password,
    };

    dispatch(login(userData));
  };

  const onSuccess = async (res) => {
    const userData = {
      email: '',
      password: '',
    };

    if (res.googleId) {
      userData.email = res.profileObj.email;
      userData.password = res.tokenId;
    } else if (res.graphDomain === 'facebook') {
      userData.email = res.email;
      userData.password = res.accessToken;
    }

    try {
      dispatch(login(userData));
    } catch (error) {
      console.log(error);
    }
  };

  const onFailure = (res) => {
    console.log('[Login Failed] res: ', res);
  };

  // const responseFacebook = (res) => {
  //   console.log('[Login Success] currentUser: ', res);
  // };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <section className="heading">
        <h1>
          <FaSignInAlt />
          {t('login')}
        </h1>
        <p>{t('login_message')}</p>
      </section>
      <section className="form">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={email}
              placeholder="Enter your email"
              onChange={onChange}
            />
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={password}
              placeholder="Enter your password"
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-block">
              Login
            </button>
          </div>
        </form>
      </section>
      <section>
        <p>
          Don't have an account? <a href="/register">Register</a>
        </p>
      </section>
      <br />
      <div className="separator">
        <hr className="hr-text" data-content="OR" />
      </div>
      <div className="login-items">
        <GoogleLogin
          clientId={googleClientId}
          buttonText=""
          onSuccess={onSuccess}
          onFailure={onFailure}
          cookiePolicy={'single_host_origin'}
          render={(renderProps) => (
            <span>
              <button
                className="buttonGoogle"
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
              />
            </span>
          )}
        />
        <FacebookLogin
          appId={facebookAppId}
          autoLoad={false}
          fields="name,email,picture"
          callback={onSuccess}
          cssClass="buttonFacebook"
          textButton=""
        />
      </div>
    </>
  );
}

export default LoginPage;
