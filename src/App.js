import logo from './logo.svg';
import './App.css';
import NavLink from './components/NavLink';
import NavBrand from './components/NavBrand';
import ImageCard from './components/ImageCard';


function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12 col-lg-9 col-md-11 mx-auto">
          <nav className="navbar navbar-expand-sm justify-content-center">
            <ul className="navbar-nav">
              <NavLink name="Home" link="#home" />
              <NavLink name="About" link="#about" />
              <NavLink name="Contact" link="#contact" />
              <NavBrand name="STABLO" link="#home" />
              <NavLink name="Archive" link="#achive" />
              <NavLink name="Pro Version" link="#proversion" />
              <NavLink name="Download" link="#download" />
            </ul>
          </nav>
          <header className='row pt-5'>
            <div className="col-sm-12 col-lg-6">
              <ImageCard 
              title="Architectural Engineering Wonders of the modern era for your Inspiration"
              author="Mario Sanchez"
              section="TECHNOLOGY"
              img="https://stablo-template.vercel.app/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F05951a0ec1a6ffc54f615ab160649e92fea982d0-800x764.png%3Frect%3D0%2C0%2C800%2C468%26w%3D800%26auto%3Dformat&w=640&q=75"
              />
            </div>
            <div className="col-sm-12 col-lg-6">
            <ImageCard 
              title="Architectural Engineering Wonders of the modern era for your Inspiration"
              author="Mario Sanchez"
              section="TECHNOLOGY"
              img="https://stablo-template.vercel.app/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F2fda477a7e32f813abb9a8ef425939e6a91c7973-987x1481.png%3Frect%3D0%2C279%2C987%2C607%26w%3D987%26auto%3Dformat&w=640&q=75"
              />
            </div>
          </header>
        </div>
      </div>
    </div>
  );
}

export default App;
