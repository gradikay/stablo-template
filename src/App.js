import './App.css';
import RoutePages from './RoutePages';
import Footer from './containers/Footer';

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12 col-lg-9 col-md-11 mt-4 mx-auto">
          <RoutePages/>
          <Footer/>
        </div>
      </div>
    </div>
  );
}

export default App;
