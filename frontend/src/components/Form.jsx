import React, { useState } from 'react';
import '../CSS/Form.css'

const Movies = () => {
  const [poster, setPoster] = useState('');
  const [movieName, setMovieName] = useState('');
  const [platformName, setPlatformName] = useState('');
  const [trailerUrl, setTrailerUrl] = useState('');
  const [duration, setDuration] = useState('');
  const [releaseDate, setReleaseDate] = useState('');
  const [description, setDescription] = useState('');
  const [genres, setGenres] = useState(['UI Design', 'Brands', 'Web Design']);
  const [actors, setActors] = useState([]);
  const [director, setDirector] = useState('');

  const addActor = () => {
    setActors([...actors, '']);
  };

  const handleActorChange = (index, value) => {
    const updatedActors = actors.slice();
    updatedActors[index] = value;
    setActors(updatedActors);
  };

  return (
    <div className="movies-container">
      <div className="sidebar">
        <div className="logo">PlayBox</div>
        <ul className="menu">
          <li>Dashboard</li>
          <li className="active">Movies</li>
          <li>Web Series</li>
        </ul>
        <div className="footer">Netflix</div>
      </div>

      <div className="content">
        <h2>Movies</h2>
        <div className="movie-poster">
          <img src={'data:image/jpeg;base64,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'} alt="Movie Poster" />
          <button onClick={() => setPoster('new_image_path')}>Change the poster</button>
        </div>

        <div className="movie-info">
          <input
            type="text"
            placeholder="Write your movie name"
            value={movieName}
            onChange={(e) => setMovieName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Write your platform name"
            value={platformName}
            onChange={(e) => setPlatformName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Trailer URL"
            value={trailerUrl}
            onChange={(e) => setTrailerUrl(e.target.value)}
          />
        </div>

        <div className="personal-info">
          <h3>Personal Information</h3>
          <input
            type="text"
            placeholder="ex. 2h 56m"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
          />
          <input
            type="date"
            value={releaseDate}
            onChange={(e) => setReleaseDate(e.target.value)}
          />
          <textarea
            placeholder="Tell me about yourself"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <div className="genres">
            {genres.map((genre, index) => (
              <span key={index} className="genre">
                {genre} <button onClick={() => setGenres(genres.filter((g, i) => i !== index))}>x</button>
              </span>
            ))}
          </div>

          <div className="actors">
            {actors.map((actor, index) => (
              <input
                key={index}
                type="text"
                placeholder="Actor name"
                value={actor}
                onChange={(e) => handleActorChange(index, e.target.value)}
              />
            ))}
            <button onClick={addActor}>+ Add Actor</button>
          </div>

          <input
            type="text"
            placeholder="Director"
            value={director}
            onChange={(e) => setDirector(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default Movies;
