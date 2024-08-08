# Movie-Search-App

Hello everybody! 👋 </br>
✨ Welcome to the Movie Search App! This is a user-friendly web application that allows you to search for movies and view detailed information about them. Whether you're looking for the latest blockbuster or a classic film, this app makes it easy to find and explore movies of all genres.

## 👀 Overview

### 📷 Screenshot
![screencapture-127-0-0-1-3000-index-html-2024-07-23-10_56_15](https://github.com/user-attachments/assets/1c50ce4b-4a63-486d-9e99-7b4a60a47d46)

<img width="1460" alt="Ekran Resmi 2024-07-23 10 57 42" src="https://github.com/user-attachments/assets/cbe8bf57-b782-4015-9ad3-cd775f1bf8f0">


### 🍄 About the Project
The Movie Search App was created as a personal project to enhance my skills in frontend development, particularly in working with JS and consuming APIs. This app interacts with The Movie Database (TMDb) API to fetch and display movie data based on user search input. It is designed to be responsive, ensuring a seamless experience on both desktop and mobile devices. The project not only strengthened my understanding of JS but also taught me valuable lessons about asynchronous data fetching, state management, and responsive web design.

### 👩🏼‍💻 Features

- Movie Search: Easily search for movies by title and get instant results.
- Responsive Design: The app is fully responsive and optimized for various screen sizes, from mobile phones to large desktop monitors.
- User Feedback: The app provides immediate feedback if a search yields no results, ensuring users know when to refine their query.
- Loading Indicators: While data is being fetched from the API, a loading indicator keeps users informed about the progress.

### 🤔 How to Use

Using the Movie Search App is straightforward:

- Search for a Movie: Upon opening the app, you'll see a search bar at the top of the page. Type the name of the movie you're looking for and press Enter or click the search icon.
- View Search Results: The app will display a list of movies that match your search query. Each result includes the movie's title, poster, and release year.
- Responsive Experience: The app is designed to work well on both desktop and mobile devices. Try resizing your browser window or accessing the app from your smartphone to see the responsive design in action.
- No Results?: If your search doesn’t return any results, the app will notify you, suggesting that you might want to try a different query.

## My process

### 💡 Built with

This project was built using the following technologies and tools:

- CSS3: Used for styling the app and ensuring a responsive design that works across different devices.
- JavaScript (ES6+): The primary programming language used for logic, API interactions, and user interface behavior.
- The Movie Database (TMDb) API: Provides access to a vast database of movies, TV shows, and actors. This API is central to the app's functionality.
- Git & GitHub: Version control and hosting for the project, allowing me to track changes and collaborate with others.

### 🧠 What I learned

Throughout the development of this project, I gained valuable insights and skills:

- API Integration: I learned how to effectively fetch and manage data from external APIs, handling asynchronous requests and displaying data in the UI.
- Responsive Design: I applied responsive design principles to ensure the app looks great on any device, using media queries and flexible layout techniques.
- Error Handling: Implementing user feedback and error handling taught me the importance of considering edge cases and ensuring a smooth user experience.
- Version Control: Working with Git and GitHub, I improved my skills in version control, including branching, merging, and resolving conflicts.

```javascript
  searchButton.addEventListener("click", function () {
  const query = searchInput.value;
  searchMovies(query);
});
function searchMovies(query) {
  const apiKey = "befb4c19dd0617e7560221c0a7d21d93";
  const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}
  `;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      const movies = data.results;
      // console.log(movies);
      displayMovies(movies);
    })
    .catch((err) => console.log(err));
}
```

### 🤌🏻 Useful resources

- https://www.themoviedb.org/

### 🔗 Links

- https://tucecifci.github.io/Movie-Search-App/

## 🏳️‍🌈 Author

- Tuğçe Çifci - [@tucecifci](https://github.com/tucecifci)
- Frontend Mentor - [@tucecifci](https://www.frontendmentor.io/profile/tucecifci)
