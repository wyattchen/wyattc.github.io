import Design from './components/Design'
import Animate from './components/Animate'
import Info from './components/Info'

const App = () => {
  // this should be run only once per application lifetime
  return (
        <div>
          <Animate/>
          <Info/>
        </div>
    );
}

export default App;

