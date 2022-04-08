import GoogleLogin from 'react-google-login'
import FacebookLogin from 'react-facebook-login';

const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;

function Login() {
  const onSuccess = (res) => {
    console.log('[Login Success] currentUser: ', res.profileObj);
  }

  const onFailure = (res) => {
    console.log('[Login Failed] res: ', res);
  }

  return (
    <div>
      <GoogleLogin
        clientId={clientId}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        style={{ marginTop: '100px' }}
        isSignedIn={true}
      />
      <FacebookLogin
        appId="690380282006435"
        autoLoad={false}
        fields="name,email,picture"
        callback={onSuccess}
        icon="fa-facebook"
        textButton="Login"
        style={{ marginTop: '100px' }}
      />
    </div>
  )
}

export default Login