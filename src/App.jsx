import './App.scss';
import Footer from './layout/footer/Footer';
import Nav from './layout/nav/Nav';
import RouteController from './routes/RouteController';

function App() {
  return (
    <div className="App">
      <Nav />
      <RouteController />
      <Footer />
    </div>
  );
}

export default App;
