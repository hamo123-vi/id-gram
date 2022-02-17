import { Border } from './components/Home/Border';
import { Navigation } from './components/Navigation/Navigation'
import { Home } from './components/Home/Home';
import './style/App.css';
import { Explore } from './components/Explore screen/Explore';
import { UserProfile } from './components/Profiles/UserProfile';

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
          <UserProfile />
        </div>
    </div>
  )
}
