import './App.css'
import Header from './components/Header';
import Home from './components/Home'
import Navigator from './navigation/Navigator'

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Navigator />
    </div>
  );
}

export default App;
