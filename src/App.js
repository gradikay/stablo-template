import { useEffect, useState } from 'react';
import { AppContext } from './libs/contextLib';
import Footer from './containers/Footer';
import RoutePages from './RoutePages';
import './App.css';

function App() {
  // State variables for theme, loading state, error state, and data
  const [appTheme, setAppTheme] = useState({ backgroundColor: 'white', textColor: 'black' });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState({
    posts: [
      {
        section: ['none', 'none', 'none'],
        author: 'Gradi',
        title: 'none',
        date: '06/13/2024',
        profilePicture: 'me.jpg',
        image: 'building.jpg'
      }
    ]
  });

  // Fetch data from JSON file on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetching data from public/data/data.json
        const response = await fetch(process.env.PUBLIC_URL + '/data/data.json');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // Loading state while fetching data
  if (loading) {
    return <div>Loading my app...</div>;
  }

  // Error state if fetching data fails
  if (error) {
    return <div>Error: {error}</div>;
  }

  // Render the app with context provider
  return (
    <AppContext.Provider value={{ data, appTheme, setAppTheme }}>
      <div className="" style={{ backgroundColor: appTheme.backgroundColor }}>
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-11 col-xl-9 mt-4 mx-auto">
              {/* Routing and main content */}
              <RoutePages />
              {/* Footer component */}
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </AppContext.Provider>
  );
}

export default App;
