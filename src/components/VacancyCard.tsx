import {Link} from "react-router-dom";

const VacancyCard = (props) => {
  return (
    <Link to={props.link} className={'vacancyCard'}>
      <div className={'vacancyCard__banner'} style={{backgroundImage: `linear-gradient(to right, rgba(255, 11, 172, 0.5), rgba(47, 18, 220, 0.5)), url(${props.imageUrl})`}}/>
      <div className={'content-holder'}>
        <h2 className={'content-holder__title'}>{props.title}</h2>
        <h3 className={'content-holder__subtitle'}>{props.subTitle}</h3>
        <p className={'content-holder__description'}>{props.description}</p>
      </div>
    </Link>
  )
}

export default VacancyCard
