const Partners = (props) => {
    const data = props.data;
    return (
        <div className={'partnersContainer'}>
            <h2 className={'partnersContainer__title'}>Partners</h2>
            <div className={'partnersContainer__partner'}>
            {data?.map((imgData, i) => (
                <a href={imgData.url} key={i} className={'partnersContainer__partner__link'}>
                    <img src={imgData.img} alt={imgData.name} className={'partnersContainer__partner__link__img'}/>
                </a>
            ))}
            </div>
        </div>
    )
}

export default Partners;