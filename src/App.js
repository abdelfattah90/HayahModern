import Home from './Home'
import LivingRoom from './pages/LivingRoom'
import Mirrors from './pages/Mirrors'
import Woodwork from './pages/Woodwork'
import Flower from './pages/Flower'
import Antiques from './pages/Antiques'
import Hours from './pages/Hours'
import Curtains from './pages/Curtains'
import Frames from './pages/Frames'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/living-room" component={LivingRoom} />
          <Route path="/mirrors" component={Mirrors} />
          <Route path="/woodwork" component={Woodwork} />
          <Route path="/flower" component={Flower} />
          <Route path="/antiques" component={Antiques} />
          <Route path="/hours" component={Hours} />
          <Route path="/curtains" component={Curtains} />
          <Route path="/frames" component={Frames} />
          <Route path="*" component={Home} />
        </Switch>
      </Router>
    </>
  )
}

export default App
