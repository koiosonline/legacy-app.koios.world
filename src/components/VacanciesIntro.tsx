const VacanciesIntro = (props) => {
  return (
    <div className={"text-holder"}>
      <h2 className={"text-holder__title"}>{props.title}</h2>
      <p className={"text-holder__description"}>{props.description}</p>
    </div>
  );
};

export default VacanciesIntro;
