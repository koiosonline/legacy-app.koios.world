import { Link } from 'react-router-dom';

export const Home = () => {
  

  return (
    <div>
      <h2>Koios</h2>
      <Link to="/courses">Go to courses</Link>
      <p></p>
      <Link to="/leaderboard">Go to leaderboard</Link>
    </div>
  );
}
