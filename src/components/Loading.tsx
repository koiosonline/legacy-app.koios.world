const Loading = () => {
    return (
        <div className={'loadingContainer'}>
            <img src={'/images/koios-icon.svg'} alt={'loading'} className={'loadingContainer__img'}/>
            <h2>Loading...</h2>
        </div>
    )
}

export default Loading;