const QuickLinks = (props) => {
  const data = props.data;
  return (
    <div className={'quickLinkContainer'}>
      {data?.map((linkData, i) => (
        <a
          key={i}
          href={linkData.linkUrl}
          className={'btn btn-primary'}
          target="_blank"
          rel="noopener noreferrer"
        >
          <p>{linkData.linkTitle}</p>
        </a>
      ))}
    </div>
  );
};

export default QuickLinks;
