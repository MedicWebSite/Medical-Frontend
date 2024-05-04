import './App.scss';
import AnonouncementBar from './components/announcement-bar/AnonouncementBar';
import Footer from './layout/footer/Footer';
import Nav from './layout/nav/Nav';
import RouteController from './routes/RouteController';

function App() {
  return (
    <div className="App">
      <AnonouncementBar/>
      <Nav />
      <RouteController />
      <Footer />
    </div>
  );
}

export default App;
