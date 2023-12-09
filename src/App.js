import './App.css';
import Banner from './components/Banner';
import Nav from './components/Nav';
import Rows from './components/Rows';
import requests from './requests';

function App() {
  return (
    <div>
      <Nav/>
      <Banner fetchUrl={requests.fetchNetflixOriginals}/>
    <Rows isposter={true} title="NetflixOriginals" fetchUrl={requests.fetchNetflixOriginals}/>
    <Rows title="Trending" fetchUrl={requests.fetchTrending}/>
    <Rows title="TopRated" fetchUrl={requests.fetchTopRated}/>
    <Rows title="ActionMovies" fetchUrl={requests.fetchActionMovies}/>
    <Rows title="ComedyMovies" fetchUrl={requests.fetchComedyMovies}/>
    <Rows title="HorrorMovies" fetchUrl={requests.fetchHorrorMovies}/>
    <Rows title="RomanceMovies" fetchUrl={requests.fetchRomanceMovies}/>
    <Rows title="Documentaries" fetchUrl={requests.fetchDocumentaries}/>
    </div>
  );
}

export default App;
