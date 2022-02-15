import worldsData from '../assets/data/courseinfo.json';
import CourseCard from '../components/CourseCard';
import store from 'store';
import { Link } from 'react-router-dom';

export const Worlds = () => {
  const data = worldsData;
  const allowed = ['blockchain', 'tdfa01', 'datascience01', 'programmingdapps01', 'introduction'];
  const continueLearning = store.get('lastWatched');

  const filtered = Object.keys(data)
    .filter((key) => allowed.includes(key))
    .reduce((obj, key) => {
      obj[key] = data[key];
      return obj;
    }, {});

  return (
    <div className="container worlds">
      <h1 className='worlds__title'>Select a world</h1>
      <p className={'worlds__subtitle'}>
        Discover new worlds and expand your knowledge about different topics or continue where you left off
      </p>
      {continueLearning && (
        <Link
          to={'/worlds/' + continueLearning.world + '/' + continueLearning.level + continueLearning.video}
          className="btn btn-primary btn--fs-16"
        >
          <p>Continue Learning</p>
        </Link>
      )}
      <div className="card-container">
        {Object.keys(filtered).map((data, i) => (
          <CourseCard
            key={i}
            image={worldsData[data].image}
            title={worldsData[data].course}
            description={worldsData[data].description}
            linkTitle="Enter world"
            linkUrl={worldsData[data].link}
            duration={worldsData[data].duration}
            external={worldsData[data].external}
          />
        ))}
      </div>
    </div>
  );
};
