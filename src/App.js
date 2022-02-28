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
import { MyProfile } from './components/Profiles/MyProfile';
import { AddPostModal } from './components/Home/Add post modal/AddPostModal';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { enterMe } from './rootSlice';

export const App = () => {

  const me = useSelector(state => state.me)
  const dispatch = useDispatch();

  useEffect(() => {
    if(localStorage.getItem('token'))
    axios.get("http://localhost:5000/api/v1/auth/me", { headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
      }}).then((res) => {
          const me = res.data.data;
          dispatch(enterMe(me))
      });
  }, [])

  return (
    <Router>
      <body>
        <Navigation />
        <Border />
        <AddPostModal />
        <div className='content'>
          <Routes>
            <Route exact path="/home" element={<Home />} />
            <Route exact path="/explore" element={<Explore />} />
            <Route exact path="/user" element={<UserProfile path='/user' icon={more}  buttonClass='follow-button' buttonValue='Follow'/>} />
            <Route exact path="/me" element={<MyProfile path='/edit-info' src={me.image} icon={options} fullname={me.fullname} username={me.username}  buttonClass='follow-button grey' buttonValue='Edit profile'/>} />
            <Route exact path="/register" element={<RegisterPage />} />
            <Route exact path="/" element={<LoginPage />} />
            <Route exact path="/edit-info" element={<EditProfileInfo username={me.username} image={me.image} fullname={me.fullname} email={me.email}/>} />
          </Routes>
        </div>
      </body>
    </Router>
    )
}
