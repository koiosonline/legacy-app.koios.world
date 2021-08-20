import earnData from "../assets/data/earn.json";

const VacancyDetail = ({ match }) => {
  const currentVacancy = earnData.assignments.find(x => x.assignmentUrl === match.url);
  console.log(currentVacancy);
  return (
    <>
      <div className={'earn-header'} style={{backgroundImage: `linear-gradient(to right, rgba(255, 11, 172, 0.5), rgba(47, 18, 220, 0.5)), url(${currentVacancy.imageUrl})`}}>
        <div className={'earn-header__text-holder'}>
          <h1 className={'earn-header__text-holder__title'}>Vacancy details</h1>
        </div>
      </div>

      <div className={'vacancyDetail'}>
        <div className={'content'}>
          <h2 className={'content__title'}>Vacancy: {currentVacancy.title}</h2>
          <p className={'content__descriptionTitle'}>Description:</p>
          <p className={'content__description'}>{currentVacancy.description}</p>
          <p className={'content__skillsetTitle'}>Required Skillset:</p>
          <p className={'content__skillset'}>{currentVacancy.skillSet}</p>
          <p className={'content__typeTitle'}>{currentVacancy.typeTitle}</p>
          <ul className={'content__typeList'}>
            {currentVacancy.type.map((types) => {
              return (
                <li>{types.typeItem}</li>
              )
            })}
          </ul>
        </div>
      </div>
    </>
  )
}

export default VacancyDetail
