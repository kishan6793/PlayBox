import React, { useState } from "react";

function MovieForm() {
  const [formData, setFormData] = useState({
    movieName: "",
    platformName: "",
    trailerUrl: "",
    duration: "",
    releaseDate: "",
    description: "",
    genres: ["UI Design", "Backend", "Web Design"],
    actors: [""],
    director: "",
  });
  const [poster, setPoster] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleGenreRemove = (index) => {
    const newGenres = formData.genres.filter((_, i) => i !== index);
    setFormData({ ...formData, genres: newGenres });
  };

  const handleActorChange = (index, value) => {
    const newActors = [...formData.actors];
    newActors[index] = value;
    setFormData({ ...formData, actors: newActors });
  };

  const handleAddActor = () => {
    setFormData({ ...formData, actors: [...formData.actors, ""] });
  };

  const handlePosterChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPoster(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div style={styles.container}>
      <div style={styles.sidebar}>
        <div style={styles.logo}>PlayBox</div>
        <nav style={styles.nav}>
          <div>Dashboard</div>
          <div>Movies</div>
          <div>Web Series</div>
        </nav>
      </div>

      <div style={styles.main}>
        <h1>Movies</h1>
        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.posterContainer}>
            <img
              src={poster || "https://via.placeholder.com/150"}
              alt="Movie Poster"
              style={styles.poster}
            />
            <input type="file" accept="image/*" onChange={handlePosterChange} />
          </div>

          <div style={styles.fieldGroup}>
            <label>Movie Name</label>
            <input
              type="text"
              name="movieName"
              value={formData.movieName}
              onChange={handleInputChange}
              placeholder="Write your movie name"
              style={styles.input}
            />
            <label>Platform Name</label>
            <input
              type="text"
              name="platformName"
              value={formData.platformName}
              onChange={handleInputChange}
              placeholder="Write your platform name"
              style={styles.input}
            />
            <label>Trailer URL</label>
            <input
              type="url"
              name="trailerUrl"
              value={formData.trailerUrl}
              onChange={handleInputChange}
              placeholder="https://"
              style={styles.input}
            />
          </div>

          <h2>Personal Information</h2>
          <div style={styles.fieldGroup}>
            <label>Duration</label>
            <input
              type="text"
              name="duration"
              value={formData.duration}
              onChange={handleInputChange}
              placeholder="e.g., 2h 15min"
              style={styles.input}
            />
            <label>Release Date</label>
            <input
              type="date"
              name="releaseDate"
              value={formData.releaseDate}
              onChange={handleInputChange}
              style={styles.input}
            />
            <label>Movie Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              placeholder="Tell me about yourself"
              style={styles.textarea}
            />
          </div>

          <h2>Genres</h2>
          <div style={styles.genresContainer}>
            {formData.genres.map((genre, index) => (
              <span key={index} style={styles.genreTag}>
                {genre}{" "}
                <button onClick={() => handleGenreRemove(index)} style={styles.removeGenreButton}>
                  ×
                </button>
              </span>
            ))}
          </div>

          <h2>Actors</h2>
          {formData.actors.map((actor, index) => (
            <input
              key={index}
              type="text"
              value={actor}
              onChange={(e) => handleActorChange(index, e.target.value)}
              placeholder="Add Actor"
              style={styles.input}
            />
          ))}
          <button type="button" onClick={handleAddActor} style={styles.addButton}>
            + Add Actor
          </button>

          <h2>Director</h2>
          <input
            type="text"
            name="director"
            value={formData.director}
            onChange={handleInputChange}
            placeholder="Director's Name"
            style={styles.input}
          />

          <button type="submit" style={styles.saveButton}>
            Save
          </button>
        </form>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "row",
    minHeight: "100vh",
    fontFamily: "Arial, sans-serif",
  },
  sidebar: {
    width: "250px",
    backgroundColor: "#1e1e2f",
    color: "#fff",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
  },
  logo: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "20px",
  },
  nav: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  main: {
    flex: 1,
    padding: "20px",
    backgroundColor: "#f9f9f9",
  },
  form: {
    maxWidth: "600px",
    margin: "auto",
  },
  posterContainer: {
    textAlign: "center",
    marginBottom: "20px",
  },
  poster: {
    width: "150px",
    borderRadius: "5px",
  },
  fieldGroup: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    marginBottom: "20px",
  },
  input: {
    padding: "8px",
    borderRadius: "4px",
    border: "1px solid #ddd",
  },
  textarea: {
    padding: "8px",
    borderRadius: "4px",
    border: "1px solid #ddd",
    resize: "vertical",
  },
  genresContainer: {
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
    marginBottom: "20px",
  },
  genreTag: {
    padding: "5px 10px",
    backgroundColor: "#ddd",
    borderRadius: "5px",
    fontSize: "14px",
    display: "inline-flex",
    alignItems: "center",
  },
  removeGenreButton: {
    background: "none",
    border: "none",
    cursor: "pointer",
    fontWeight: "bold",
    marginLeft: "5px",
  },
  addButton: {
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    padding: "8px 12px",
    borderRadius: "4px",
    cursor: "pointer",
    marginBottom: "20px",
  },
  saveButton: {
    backgroundColor: "#28a745",
    color: "#fff",
    border: "none",
    padding: "10px 20px",
    borderRadius: "5px",
    cursor: "pointer",
    fontWeight: "bold",
    marginTop: "20px",
  },
};

export default MovieForm;
