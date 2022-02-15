import { Border } from './components/Home/Border';
import { Navigation } from './components/Navigation/Navigation'
import { Home } from './components/Home/Home';
import './style/App.css';

export const App = () => {
  return (
    <div className='body'>
      <Navigation />
      <Border />
        <div className='content'>
          <Home />
        </div>
    </div>
  )
}
