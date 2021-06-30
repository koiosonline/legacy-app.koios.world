import Button from "../components/Button";

export const Error404 = () => {
    return (
        <div className={'container errorContainer'}>
            <img src={'/images/404.svg'} alt={'404'} className={'errorContainer__img'}/>
            <h1 className={'errorContainer__title'}>Oops, you are lost in space</h1>
            <Button title={'Go to worlds'} link={'/worlds'}/>
        </div>
    )
}