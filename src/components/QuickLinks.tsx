const QuickLinks = (props) => {
    const data = props.data;
    return (
        <div className={'quickLinkContainer'}>
            {data?.map((linkData, i) => (
                <a key={i} href={linkData.linkUrl} className={'quickLinkContainer__link'} target={'blank'}><p>{linkData.linkTitle}</p></a>
            ))}
        </div>
    )
}

export default QuickLinks;