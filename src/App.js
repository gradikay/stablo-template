import { useEffect, useState } from 'react';
import { AppContext } from './libs/contextLib';
import Footer from './containers/Footer';
import RoutePages from './RoutePages';
import './App.css';

function App() {

  const [appTheme, setAppTheme] = useState({backgroundColor: "white", textColor: "black"});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(
      {
          posts: [
            {
              section: ["none", "none", "none"],
              author: "Gradi",
              title: "none",
              date: "06/13/2024",
              profilePicture: "me.jpg",
              image: "building.jpg"
            }
          ]
        }
  );

  useEffect(() => {
      const fetchData = async () =>{
          try{
              const response = await fetch(process.env.PUBLIC_URL + '/data/data.json');
              if(!response.ok){
                  throw new Error('Network response was not ok');
              }
              const data = await response.json();
              setData(data);

          } catch(error) {
              console.error('Error fetching data:', error);
              setError(error.message);
          } finally {
              setLoading(false);
          }
      }
      fetchData();
  }, []);

  if (loading) {
    return <div>Loading my app...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
      <AppContext.Provider value={{data, appTheme, setAppTheme}}>
          <div className="" style={{backgroundColor: appTheme.backgroundColor}}>
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-11 col-xl-9 mt-4 mx-auto">
                    <RoutePages/>
                    <Footer/>
                    </div>
                </div>
              </div>
          </div>
      </AppContext.Provider>
  );
}

export default App;
