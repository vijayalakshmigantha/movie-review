let reviewsContainer = document.getElementById("reviewsContainer");
let movieTitleEl = document.getElementById("titleInput");
let reviewEl = document.getElementById("reviewTextarea");

function addReview() {
    let movieTitle = movieTitleEl.value;
    let movieReview = reviewEl.value;
    if (movieTitle === "") {
        alert("Please enter movie title")
        return;
    }
    let movieHeading = document.createElement("h1");
    movieHeading.textContent = "Movie Title: " + movieTitle;
    movieHeading.classList.add("movie-heading");
    reviewsContainer.appendChild(movieHeading);
    let movieReviewEl = document.createElement("p");
    movieReviewEl.textContent = movieReview;
    reviewsContainer.appendChild(movieReviewEl);
    let horizontalLineEl = document.createElement("hr");
    reviewsContainer.appendChild(horizontalLineEl);
    movieTitleEl.value = "";
    reviewEl.value = "";
}