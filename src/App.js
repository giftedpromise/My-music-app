import React, { useEffect, useState } from "react";
import "./App.css";
import SearchIcon from "./search.svg";
import MusicCard from "./components/MusicCard";
import MusicDetails from "./components/MusicDetails";
import { fetchData } from "./utils/fetchData"; // Assuming this function fetches track data

const App = () => {
  const [tracks, setTracks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTrack, setSelectedTrack] = useState(null); // State to hold selected track

  const searchMusic = async (query) => {
    try {
      const data = await fetchData(query); // Fetch track data
      console.log("API Response:", data);

      if (data && data.tracks && data.tracks.items) {
        const trackItems = data.tracks.items.map((item) => item.data); // Extract data from items
        setTracks(trackItems); // Set the extracted data to state
      } else {
        setTracks([]); // Handle empty results
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      setTracks([]); // Handle error
    }
  };

  useEffect(() => {
    searchMusic("Don meon"); // Initial search query
  }, []);

  return (
    <div className="app">
      <h1>MusicHub</h1>
      <div className="search">
        <input
          placeholder="Search for music"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMusic(searchTerm)}
        />
      </div>

      {tracks?.length > 0 ? (
        <div className="container">
          {tracks.map((track, index) => (
            <MusicCard
              key={index}
              track={track}
              onSelect={() => setSelectedTrack(track)} // Set selected track on click
            />
          ))}
        </div>
      ) : (
        <div className="empty">No Music Found</div>
      )}

      <MusicDetails track={selectedTrack} />
    </div>
  );
};

export default App;
