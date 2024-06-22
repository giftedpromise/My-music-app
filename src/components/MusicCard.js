import React, { useState } from "react";

const MusicCard = ({ track, onSelect }) => {
  const [showDetails, setShowDetails] = useState(false);

  // Extracting albumOfTrack coverArt sources from the track object
  const imageUrl =
    track.albumOfTrack.coverArt?.sources[0]?.url ||
    "https://via.placeholder.com/400";

  return (
    <div
      className="music-card"
      onClick={onSelect}
      onMouseEnter={() => setShowDetails(true)}
      onMouseLeave={() => setShowDetails(false)}
      style={{ cursor: "pointer" }}
    >
      <div>
        <p>{track.name}</p>
      </div>
      <div>
        <img
          src={imageUrl}
          alt={track.name}
          onError={(e) => {
            e.target.src = "https://via.placeholder.com/400"; // Fallback image on error
          }}
        />
      </div>
      {showDetails && (
        <div className="music-details-overlay">
          <div>
            <p>
              <strong>Artist:</strong>{" "}
              {track.artists.items.map((artist) => artist.name).join(", ")}
            </p>
            <p>
              <strong>Genres:</strong>{" "}
              {track.genres?.join(", ") || "Unknown Genre"}
            </p>
            <p>
              <strong>Release Date:</strong>{" "}
              {track.albumOfTrack.releaseDate || "Unknown Date"}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default MusicCard;
