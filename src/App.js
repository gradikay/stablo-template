import { createContext, useEffect, useState } from 'react';
import './App.css';
import RoutePages from './RoutePages';
import Footer from './containers/Footer';
import { DataContext } from './libs/contextLib';


function App() {

    const dummyData = {
        posts: [
          {
            section: ["none", "none", "none"],
            author: "Gradi",
            title: "none",
            date: "06/13/2024",
            pic: "me.jpg",
            image: "building.jpg"
          }
        ]
      };

    const [data, setData] = useState(dummyData);

    useEffect(() => {
        const fetchData = async () =>{
            try{
                const response = await fetch('/data/data.json');
                if(!response.ok){
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setData(data);

            } catch(error) {
                console.error('Error fetching data:', error);
            }
        }
        fetchData();
    }, []);

    //const title = data && data.posts[0].title;
    //const author = data && data.data[0].author;
    //console.log("this is post title: " + title)

    return (
        <DataContext.Provider value={data}>
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-lg-9 col-md-11 mt-4 mx-auto">
                    <RoutePages/>
                    <Footer/>
                    </div>
                </div>
            </div>
        </DataContext.Provider>
    );
}

export default App;
