import { useState } from 'react';

export const ModalDiscordName = () => {
  const [inputValue, setInputValue] = useState<any>("");
  const [message, setMessageValue] = useState<boolean>(false);

  const onChangeHandler = event => {
    setInputValue(event.target.value);
  };

  const onButtonClickHandler = () => {
    localStorage.setItem("discordUsername", inputValue);
    setMessageValue(true);
  };

  return (
    <div className="modal-discord-name">
      <h1 className="modal-discord-name__title">Enter your Discord name:</h1>
      <p className="modal-discord-name__description">Make sure to include your unique identifier like: Name#1234</p>
      <input
        type="text"
        className="modal-discord-name__input"
        onChange={onChangeHandler}
        value={inputValue}
      />
      <button onClick={onButtonClickHandler} className="btn btn-gradient btn--fs-16">
        Submit name
      </button>
      {message && <p className="modal-discord-name__message">Your name has been submitted, please refresh the page</p>}
    </div >
  );
};