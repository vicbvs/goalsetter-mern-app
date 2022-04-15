import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { FaUser } from 'react-icons/fa'
import { register, reset } from './../features/auth/authSlice'
import Spinner from '../components/Spinner'
import GoogleLogin from 'react-google-login'
import FacebookLogin from 'react-facebook-login';

const googleClientId = process.env.REACT_APP_GOOGLE_CLIENT_ID || '';
const facebookAppId = process.env.REACT_APP_FACEBOOK_APP_ID || '';

function RegisterPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  })

  const { name, email, password, password2 } = formData

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const {user, isLoading, isError, isSuccess, message} = useSelector((state) => state.auth)

  useEffect(() => {
    if(isError) {
      toast.error(message)
    }

    if(isSuccess || user) {
      navigate('/')
    }

    dispatch(reset())

  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()

    if (password !== password2) {
      toast.error('Passwords do not match')
    } else {
      const userData = {
        name,
        email,
        password
      }

      dispatch(register(userData))
    }
  }

  const onSuccess = async (res) => {
    const userData = {
      name: '',
      email: '',
      password: ''
    }

    if (res.googleId) {
      userData.name = res.profileObj.givenName;
      userData.email = res.profileObj.email;
      userData.password = res.tokenId;
    } else if (res.graphDomain === 'facebook') {
      userData.name = res.name.split(' ')[0];
      userData.email = res.email;
      userData.password = res.accessToken;
    }

    try {
      dispatch(register(userData))
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

  if(isLoading) {
    return <Spinner />
  }

  return (
    <>
      <section className='heading'>
        <h1>
          <FaUser />
          Register
        </h1>
        <p>Please create an account</p>
      </section>
      <section className='form'>
        <form onSubmit={onSubmit}>
          <div className='form-group'>
            <input 
              type="text" 
              className="form-control" 
              id="name" 
              name="name" 
              value={name} 
              placeholder="Enter your name" 
              onChange={onChange} />
            <input 
              type="email" 
              className="form-control" 
              id="email" 
              name="email" 
              value={email} 
              placeholder="Enter your email" 
              onChange={onChange} />
            <input 
              type="password" 
              className="form-control" 
              id="password" 
              name="password" 
              value={password} 
              placeholder="Enter your password" 
              onChange={onChange} />
            <input 
              type="password" 
              className="form-control" 
              id="password2" 
              name="password2" 
              value={password2} 
              placeholder="Confirm your password" 
              onChange={onChange} />
          </div>
          <div className='form-group'>
            <button type="submit" className="btn btn-block">Register</button>
          </div>
        </form>
      </section>
      <section>
        <p>Already have an account? <a href='/login'>Login</a></p>
      </section>
      <br />
      <div className='separator'>
        <hr className="hr-text" data-content="OR" />
      </div>
      <div className='login-items'>
        <GoogleLogin
          clientId={googleClientId}
          buttonText=""
          onSuccess={onSuccess}
          onFailure={onFailure}
          cookiePolicy={'single_host_origin'}
          render={renderProps => (
            <span>
              <button 
                className='buttonGoogle' 
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
  )
}

export default RegisterPage