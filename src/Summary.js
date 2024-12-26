import React from "react";

// Average function to calculate the mean value
const average = (arr) => {
  if (arr.length === 0) return 0; // Prevent division by zero for empty arrays
  return arr.reduce((acc, cur) => acc + cur, 0) / arr.length;
};

function Summary({ watched }) {
  // Calculate average IMDb rating
  const avgImdbRating = average(
    watched
      .map((movie) => parseFloat(movie.imdbRating)) // Convert string to float
      .filter((rating) => !isNaN(rating))           // Filter out invalid values
  );

  // Calculate average user rating (imdbVotes)
  const avgUserRating = average(
    watched
      .map((movie) => parseInt(movie.imdbVotes.replace(/,/g, ""), 10)) // Remove commas and parse to int
      .filter((votes) => !isNaN(votes))                                // Ensure valid numbers
  );

  // Calculate average runtime
  const avgRuntime = average(
    watched
      .map((movie) => parseInt(movie.Runtime, 10)) // Convert runtime to integer
      .filter((runtime) => !isNaN(runtime))        // Ensure valid numbers
  );

  return (
    <div className="summary">
      <h2>Movies you watched</h2>
      <div>
        <p>
          <span>#️⃣</span>
          <span>{watched.length} movies</span>
        </p>
        <p>
          <span>⭐️</span>
          <span>{avgImdbRating.toFixed(1)}</span> {/* Format to 1 decimal place */}
        </p>
        <p>
          <span>🌟</span>
          {/* <span>{avgUserRating.toFixed(1)}</span> */}
          <span>{( avgUserRating/ 1000).toFixed(3)}</span>
        </p>
        <p>
          <span>⏳</span>
          <span>{avgRuntime.toFixed(1)} min</span>
        </p>
      </div>
    </div>
  );
}

export default Summary;
