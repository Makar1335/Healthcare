import Block1 from './blocks/block_1/block1';
import Aside from './components/aside/aside';
import Login from './blocks/login/login';
import './App.scss'


function App() {
  return (
    <div className="App">
      <Aside/>
      <Block1/>
    </div>
  );
}

export default App;
