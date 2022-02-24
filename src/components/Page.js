import { Home } from '../components/Home/Home'
import '../style/App.css';
import { Explore } from '../components/Explore screen/Explore';
import { UserProfile } from '../components/Profiles/UserProfile';
import { EditProfileInfo } from '../components/Profiles/EditProfileInfo';
import more from '../assets/More.png';
import options from '../assets/Options.png';
import { Routes, Route } from 'react-router-dom';

export const Page = () => {
  return (
        <div className='content'>
          <Routes>
            <Route exact path="/home" element={<Home />} />
            <Route exact path="/explore" element={<Explore />} />
            <Route exact path="/user" element={<UserProfile icon={more}  buttonClass='follow-button' buttonValue='Follow' fullname='Amil Valjevac'/>} />
            <Route exact path="logged/me" element={<UserProfile icon={options}  buttonClass='follow-button grey' buttonValue='Edit profile' fullname='Amil Valjevac'/>} />
            <Route exact path="/edit-info" element={<EditProfileInfo />} />
          </Routes>
        </div>
    )
}
