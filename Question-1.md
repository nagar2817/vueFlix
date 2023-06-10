### Features:
- State management with Vuex to manage the state of the Movie web application in a predictable and scalable way.
- Code optimization by using loops and directives like `v-once` and `v-bind` to prevent unnecessary re-renders.

### Components:
1.Home Component:
    - It will display the *Movie-List* , *Filtering by Genre and Year* ,*Search Functionality* , *Code Optimization* , *Navigation and Interactions*.
   - *Code Optimization* 
        - To optimize the rendering performance, the Home component leverages Vue's directives and techniques.
        - The `v-once` directive is used for static content that doesn't change, preventing unnecessary re-rendering of those elements.
        - The `v-bind` directive is used to bind dynamic data, such as movie titles and poster images, ensuring efficient rendering and updates.

   - *Navigation and Interactions*
        - Each movie card in the list provides interactive elements for user interactions.
        - Users can click on a movie card to view detailed information about the movie in the Movie component.
        - The Movie component receives the selected movie's data as a prop and displays it to the user.
        - Users can navigate back to the Home component from the Movie component using a "Go Back" button or a similar navigation mechanism.
        - Additionally, the Home component may include other interactive elements, such as buttons for adding movies to favorites or performing other actions.

2. Fav Component:
   - Displays a list of favorite movies for a user.
   - Allows removing movies from the favorites list.
   - Provides navigation to go back to the Home component.

3. Movie Component:
   - Displays detailed information about a selected movie.
   - Shows the movie title, genres, release year, and poster image.
   - Provides navigation to go back to the Home component.

### Component Reusability:
- The Home component, Fav component, and Movie component are designed to be reusable.
- They can be used in different parts of the application to display movies, favorites, and movie details.
- This promotes code modularity and reusability, allowing the components to be easily integrated into other pages or sections of the application.

### Responsive Design:
- The UI is designed to be responsive, adapting to different screen sizes and devices.
- Bootstrap-Vue and CSS are utilized to create a visually appealing and responsive user interface.
- The application layout and components will adjust dynamically based on the screen size, providing a consistent user experience across devices.
