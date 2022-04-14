import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import GoogleLogin from 'react-google-login'
import FacebookLogin from 'react-facebook-login';
import GitHubLogin  from 'react-github-login';
import Spinner from '../components/Spinner'
import { register, reset } from './../features/auth/authSlice'

const googleClientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;
const facebookAppId = process.env.REACT_APP_FACEBOOK_APP_ID;
const githubClientId = process.env.REACT_APP_GITHUB_CLIENT_ID;

function Register() {
  const navigate = useNavigate()
  const dispatch = useDispatch();

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

  const googleSuccess = async (res) => {
    const result = res.profileObj;
    const token = res.tokenId;
    
    const userData = {
      name: result.givenName,
      email: result.email,
      password: token
    }

    try {
      dispatch(register(userData))
    } catch (error) {
      console.log(error);
    }
  };
  
  const onSuccess = async (res) => {
    console.log('[Login Success] currentUser: ', res);
  };

  const onFailure = (res) => {
    console.log('[Login Failed] res: ', res);
  };
  
  const responseFacebook = (res) => {
    console.log('[Login Success] currentUser: ', res);
  };  

  if(isLoading) {
    return <Spinner />
  }

  return (
    <div className='login-items'>
      <GoogleLogin
        clientId={googleClientId}
        buttonText=""
        onSuccess={googleSuccess}
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
        callback={responseFacebook}
        cssClass="buttonFacebook"
        textButton=""
      />
      <span>
        <GitHubLogin 
          clientId={githubClientId}
          onSuccess={onSuccess}
          onFailure={onFailure}
          buttonText=""
          className="buttonGithub"
        />
      </span>
    </div>
  )
}

export default Register