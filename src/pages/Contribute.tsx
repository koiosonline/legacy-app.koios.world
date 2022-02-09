import partnerData from '../assets/data/earnPartners.json';

const Contribute = () => {
  return (
    <>
      <div
        className={'earn-header'}
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(255, 11, 172, 0.5), rgba(47, 18, 220, 0.5)), url(https://images.unsplash.com/photo-1534996858221-380b92700493?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1931&q=80)',
        }}
      >
        <div className={'earn-header__text-holder'}>
          <h1 className={'earn-header__text-holder__title'}>Contribute to Koios</h1>
        </div>
      </div>

      <div className={'partner'}>
        <div className={'partner__header'}>
          <h1 className={'title'}>Welcome, dear visitor.</h1>
          <p className={'sub-title'}>
            Thank you for providing a proposal. Sharing is sacred :heart: and we highly appreciate your contribution!
            Don’t forget to drop your public key and reap the rewards 🚀
          </p>
          <p>Could be with the same proposal form on the earn page. </p>
        </div>
        <div>
          <div className={'steps-row'}>
            <h2 className={'steps-row__number'}>1.</h2>
            <div className={'steps-row__text-holder'}>
              <p>{partnerData.one}</p>
              <a href={partnerData.formUrl}>Take me to the form</a>
            </div>
          </div>

          <div className={'steps-row'}>
            <h2 className={'steps-row__number'}>2.</h2>
            <div className={'steps-row__text-holder'}>
              <p>{partnerData.two}</p>
            </div>
          </div>

          <div className={'steps-row'}>
            <h2 className={'steps-row__number'}>3.</h2>
            <div className={'steps-row__text-holder'}>
              <p>{partnerData.three}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contribute;
