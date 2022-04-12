import GoogleLogin from 'react-google-login'
import FacebookLogin from 'react-facebook-login';
import GitHubLogin  from 'react-github-login';

const googleClientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;
const facebookAppId = process.env.REACT_APP_FACEBOOK_APP_ID;
const githubClientId = process.env.REACT_APP_GITHUB_CLIENT_ID;

function Login() {
  const onSuccess = (res) => {
    console.log('[Login Success] currentUser: ', res.profileObj);
  }

  const onFailure = (res) => {
    console.log('[Login Failed] res: ', res);
  }
  
  const responseFacebook = (res) => {
    console.log('[Login Success] currentUser: ', res);
  }

  return (
    <div className='login-items'>
      <GoogleLogin
        clientId={googleClientId}
        buttonText=""
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        render={renderProps => (
          <span>
            <button className='buttonGoogle' onClick={renderProps.onClick} />
          </span>
        )}
        isSignedIn={true}
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

export default Login