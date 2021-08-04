import worldsData from '../assets/data/courseinfo.json';
import Card from "../components/Card";
import {useLocation} from "react-router-dom";
import Button from "../components/Button";
import store from 'store';
import cardImageIntroduction from "../assets/images/worlds/world_introduction.svg"

export const Worlds = () => {
    const data = worldsData;
    const allowed = ['blockchain', 'tdfa01', 'datascience01', 'programmingdapps01'];
    const continueLearning = store.get('lastWatched');
    const location = useLocation();

    const filtered = Object.keys(data)
        .filter(key => allowed.includes(key))
        .reduce((obj, key) => {
            obj[key] = data[key];
            return obj;
        }, {});

  return (
    <div className="container worlds">
        <h1>Select a world</h1>
        <p className={'worlds__subtitle'}>Discover new worlds and expand your knowledge about different topics or continue  where you left off</p>
        {continueLearning &&
        <Button title={'Continue Learning'} link={'/worlds/' + continueLearning.world + '/' + continueLearning.level + continueLearning.video}/>
        }
        <div className="cardContainer">
          <Card 
          image={cardImageIntroduction}
          title='Introduction to Koios'
          description='A quick introduction about the Koios platform itself and how you can use it to learn, earn and/or connect with a community to take on open source projects.'
          linkTitle='Enter world'
          linkUrl='/coming-soon'
          duration='300'
          />
          {Object.keys(filtered).map((data, i) => (
              <Card
                  key={i}
                  image={worldsData[data].image}
                  title={worldsData[data].course}
                  description={worldsData[data].description}
                  linkTitle='Enter world'
                  linkUrl={worldsData[data].link}
                  duration={worldsData[data].duration}
              />
          ))}
      </div>
    </div>
  );
}
