import earnData from "../assets/data/earn.json";
import defaultInfo from "../assets/data/earnDefaultInfo.json";

const VacancyDetail = ({ match }) => {
  const currentVacancy = earnData.assignments.find(x => x.assignmentUrl === match.url);
  return (
    <>
      <div className={'earn-header'} style={{backgroundImage: `linear-gradient(to right, rgba(255, 11, 172, 0.5), rgba(47, 18, 220, 0.5)), url(${currentVacancy.imageUrl})`}}>
        <div className={'earn-header__text-holder'}>
          <h1 className={'earn-header__text-holder__title'}>Vacancy details</h1>
        </div>
      </div>

      <div className={'vacancyDetail'}>
        <div className={'content'}>
          <div className={'content__header'}>
            <h2 className={'content__title'}>{currentVacancy.title}</h2>
            <div className={'content__image-container'}>
              <img className={'content__image'} src={currentVacancy.reimbursement} alt={'money icon'}/>
              <img className={'content__image'} src={currentVacancy.providerLogo} alt={'provider icon'}/>
            </div>
          </div>
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
          <div className={'content__buttonContainer'}>
            <a className={'content__button'} href={defaultInfo.form_link}>I'm interested!</a>
          </div>
        </div>
      </div>

      <div className={'defaultInfo'}>

        <div className={'block'}>
          <h2 className={'block__title'}>Payment</h2>
          <p className={'block__description'}>{defaultInfo.payment}</p>
        </div>

        <div className={'block'}>
          <h2 className={'block__title'}>Working hours</h2>
          <p className={'block__description'}>{defaultInfo.working_hours}</p>
        </div>

        <div className={'block'}>
          <h2 className={'block__title'}>Period</h2>
          <p className={'block__description'}>{defaultInfo.period}</p>
        </div>

        <div className={'block'}>
          <h2 className={'block__title'}>Name organization</h2>
          <p className={'block__description'}>{defaultInfo.name_organization}</p>
        </div>

        <div className={'block'}>
          <h2 className={'block__title'}>Description organization</h2>
          <p className={'block__description'}>{defaultInfo.description_organization}</p>
        </div>

        <div className={'block'}>
          <h2 className={'block__title'}>Website</h2>
          <a className={'block__url'} href={defaultInfo.website}>Koios world</a>
        </div>

        <div className={'block'}>
          <h2 className={'block__title'}>Is the organization prepared to sign a contract with you, if required or preferred by you?</h2>
          <p className={'block__description'}>{defaultInfo.contract}</p>
        </div>

        <div className={'block'}>
          <h2 className={'block__title'}>Contact info</h2>
          <div className={'block__discord'}>
            <a className={'block__link'} href={defaultInfo.contact_info}><span>Find us in the Discord:</span> <img src={'./images/Discord-Logo-Black.svg'} alt={'discord'}/></a>
            <p className={'block__description--discord'}><span>And contact user:</span> Jordi Jansen #3497</p>
          </div>
        </div>

        <div className={'block'}>
          <h2 className={'block__title'}>Final remarks from assignment provider</h2>
          <p className={'block__description'}>{defaultInfo.final_remarks}</p>
        </div>

      </div>
    </>
  )
}

export default VacancyDetail
