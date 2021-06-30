import {typeQuiz} from "../../types/Quiz/Quiz";
import {Icon} from "../Util/Icon";
import {SvgSprite} from "../Util/SvgSprite";
import {useState} from "react";

const QuizModal = (props) => {
    const [congrats, setCongrats] = useState<string>();
    const data: typeQuiz = props.quizData;

    const checkAnswer = (answer) => {
        if (data.answers[answer].correct) {
            const correctElement = document.getElementById(answer);
            correctElement.classList.toggle('correct');
            setCongrats('Congrats!');
        } else {
            const inCorrectElement = document.getElementById(answer);
            inCorrectElement.classList.toggle('incorrect');
            setTimeout(() => {inCorrectElement.classList.toggle('incorrect');}, 1000);
        }
    }

    return (
        <>
        <div className={'outer'} onClick={props.modalState}/>
            <div className={'quizContainer__content'}>
                <div className={'modalContainer__content__closeButton'} onClick={props.modalState}>
                    <Icon
                        className="ModalContainer__content__closeButton__close"
                        type={'close' as keyof typeof SvgSprite}
                    />
                </div>
                <h2 className={'quizContainer__content__title'}>{congrats ? congrats : 'Quiz question'}</h2>
                <h2 className={'quizContainer__content__question'}>{data.question}</h2>
                <h2 className={'quizContainer__content__subtitle'}>{data.multipleAnswers ? '*Multiple answers are possible' : ''}</h2>
                <div className={'quizContainer__content__answers'}>
                    <button onClick={() => checkAnswer(0)} className={'quizContainer__content__answers__button'} id={'0'}>
                        <h3 className={'quizContainer__content__answers__button__letter'}>A</h3>
                        <p className={'quizContainer__content__answers__button__answer'}>{data.answers[0].A}</p>
                    </button>
                    <button onClick={() => checkAnswer(1)} className={'quizContainer__content__answers__button'} id={'1'}>
                        <h3 className={'quizContainer__content__answers__button__letter'}>B</h3>
                        <p className={'quizContainer__content__answers__button__answer'}>{data.answers[1].B}</p>
                    </button>
                    <button onClick={() => checkAnswer(2)} className={'quizContainer__content__answers__button'} id={'2'}>
                        <h3 className={'quizContainer__content__answers__button__letter'}>C</h3>
                        <p className={'quizContainer__content__answers__button__answer'}>{data.answers[2].C}</p>
                    </button>
                    <button onClick={() => checkAnswer(3)} className={'quizContainer__content__answers__button'} id={'3'}>
                        <h3 className={'quizContainer__content__answers__button__letter'}>D</h3>
                        <p className={'quizContainer__content__answers__button__answer'}>{data.answers[3].D}</p>
                    </button>
                    {congrats &&
                    <div className={'quizContainer__content__congrats'}>
                        <button onClick={props.modalState} className={'quizContainer__content__congrats__button'}><p>Continue</p></button>
                    </div>
                    }
                </div>
            </div>
        </>
    )
}

export default QuizModal;