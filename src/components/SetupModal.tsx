import {SvgSprite} from "./Util/SvgSprite";
import {Icon} from "./Util/Icon";

const SetupModal = (props) => {

    return (
        <>
        <div className={'outer'} onClick={props.modalState}/>
            <div className={'modalContainer'}>
            <div className={'modalContainer__content'}>
                <div className={'modalContainer__content__closeButton'} onClick={props.modalState}>
                    <Icon
                        className="ModalContainer__content__closeButton__close"
                        type={'close' as keyof typeof SvgSprite}
                    />
                </div>
                <h1 className={'modalContainer__content__title'}>How to setup a wallet</h1>
                <div className={'modalContainer__content__row'}>
                    <h2 className={'modalContainer__content__row__number'}>1</h2>
                    <div className={'modalContainer__content__row__column'}>
                        <p className={'modalContainer__content__row__column__videoTitle'}>Install MetaMask wallet</p>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/Wc-Hgn1QUjA"
                                title="YouTube video player" frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen/>
                    </div>
                </div>
                <div className={'modalContainer__content__row'}>
                    <h2 className={'modalContainer__content__row__number'}>2</h2>
                    <div className={'modalContainer__content__row__column'}>
                        <p className={'modalContainer__content__row__column__videoTitle'}>Create a 3Box profile</p>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/QIFDMaiOAIU"
                                title="YouTube video player" frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen/>
                    </div>
                </div>
            </div>
            </div>
        {/*</div>*/}
        </>
    )
}

export default SetupModal;