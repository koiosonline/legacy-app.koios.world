import { Icon } from './Util/Icon';

type CardProps = {
  image: string;
  title: string;
  description: string;
  linkUrl: string;
  linkTitle: string;
  duration: string;
  external?: boolean;
}

const CourseCard = (props: CardProps) => {
  const duration = Math.floor(parseInt(props.duration) / 60);

  return (
    <a href={props.linkUrl} className={'course-card'}>
      <img
        src={props.image}
        alt={'artwork'}
        className={'course-card__img'}
      />
      <div className={'course-card__heading'}>
        <h2 className={'course-card__title'}>{props.title}</h2>

        <ul className={'meta-data'}>
          <li className='meta-data__label meta-data__label--duration'><Icon type="time" />{duration} min</li>
          
          {props.external && 
            <li className='meta-data__label'>External course</li>
          }
        </ul>
      </div>
      <p className={'course-card__description'}>{props.description}</p>
    </a>
  );
};

export default CourseCard;
