import './App.scss';
import Nav from './layout/nav/Nav';
import RouteController from './routes/RouteController';

function App() {
  return (
    <div className="App">
      <Nav/>
      <RouteController/>
    </div>
  );
}

export default App;
