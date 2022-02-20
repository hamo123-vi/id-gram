import { Border } from './components/Home/Border';
import { Navigation } from './components/Navigation/Navigation'
import { Home } from './components/Home/Home';
import './style/App.css';
import { Explore } from './components/Explore screen/Explore';
import { UserProfile } from './components/Profiles/UserProfile';
import { EditProfileInfo } from './components/Profiles/EditProfileInfo';
import more from './assets/More.png';
import options from './assets/Options.png';
import { RegisterPage } from './components/Auth/RegisterPage';
import { LoginPage } from './components/Auth/LoginPage';

export const App = () => {
  return (
    <div className='body'>
      <Navigation />
      <Border />
        <div className='content'>
          <Home />
          <Explore />
          <br />
          <br />
          <UserProfile icon={more}  buttonClass='follow-button' buttonValue='Follow' fullname='Amil Valjevac'/>
          <br />
          <UserProfile icon={options}  buttonClass='follow-button grey' buttonValue='Edit profile' fullname='Amil Valjevac'/>
          <br />
          <RegisterPage />
          <br />
          <LoginPage />
          <br />
          <EditProfileInfo />
        </div>
    </div>
  )
}
