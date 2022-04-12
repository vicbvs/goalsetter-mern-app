import GoogleLogin from 'react-google-login'
import FacebookLogin from 'react-facebook-login';
// import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';

const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;

function Login() {
  const onSuccess = (res) => {
    console.log('[Login Success] currentUser: ', res.profileObj);
  }

  const onFailure = (res) => {
    console.log('[Login Failed] res: ', res);
  }

  return (
    <div className='login-items'>
      <GoogleLogin
        clientId={clientId}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        cssClass="buttonGoogle"
        render={renderProps => (
          <button className='buttonGoogle'>
            <span>
              <img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg' alt=''/>
            </span>
          </button>
        )}
        isSignedIn={true}
      />
      <FacebookLogin
        appId="690380282006435"
        autoLoad={false}
        fields="name,email,picture"
        callback={onSuccess}
        cssClass="buttonFacebook"
        textButton=""
        icon={<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-original.svg" alt="facebook" />}
      />
    </div>
  )
}

export default Login