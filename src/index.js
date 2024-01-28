import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// function Test() {
//   const [movieRating, setMovieRating] = useState(0);
//   return (
//     <div>
//       <StarRating color="blue" maxRating={10} onSetRating={setMovieRating} />
//       <p>This movie was rated {movieRating} star</p>
//     </div>
//   );
// }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating maxRating={5} defaultRating={3} />
    <StarRating
      maxRating={5}
      size={24}
      messages={['Terrible', 'Bad', 'Okay', 'good', 'amazing']}
    />
    <Test /> */}
  </React.StrictMode>
);
