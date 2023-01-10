import Banner from "../components/banner";
import Navbar from "../components/navbar";
import "./homescreen.css";
import requests from "../functions/request";
import Slide from "../components/Slide";

export default function HomeScreen() {
  return (
    <div className="homeScreen">
      <Navbar />
      <Banner />
      <Slide
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLarge={true}
      />

<Slide
        title="TRENDING NOW"
        fetchUrl={requests.fetchTrending}
        
      />

<Slide
        title="TOP RATED"
        fetchUrl={requests.fetchTopRated}
        
      />
      <Slide
        title="ACTION MOVIES"
        fetchUrl={requests.fetchActionMovies}
        
      />

      <Slide
        title="COMEDY MOVIES"
        fetchUrl={requests.fetchComedyMovies}
        
      />
      <Slide
        title="HORROR MOVIES"
        fetchUrl={requests.fetchHorrorMovies}
        
      />
      <Slide
        title="ROMANCE MOVIES"
        fetchUrl={requests.fetchRomanceMovies}
        
      />
      <Slide
        title="DOCUMENTARIES"
        fetchUrl={requests.fetchDocumentaries}
       
      />
    </div>
  );
}
