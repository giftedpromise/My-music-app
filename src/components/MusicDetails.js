import React from "react";

const MusicDetails = ({ track }) => {
  if (!track) return <div>Select a track to see details</div>;

  return (
    <div className="music-details">
      <img
        src={
          track.albumOfTrack.coverArt?.sources[0]?.url ||
          "https://via.placeholder.com/400"
        }
        alt={track.name}
        className="music-cover-large"
      />
      <div className="music-info">
        <h2>{track.name}</h2>
        <p>
          <strong>Artist:</strong>{" "}
          {track.artists.items.map((artist) => artist.name).join(", ")}
        </p>
        <p>
          <strong>Genres:</strong> {track.genres?.join(", ") || "N/A"}
        </p>
        <p>
          <strong>Release Date:</strong>{" "}
          {track.albumOfTrack.releaseDate || "N/A"}
        </p>
      </div>
    </div>
  );
};

export default MusicDetails;
