import LoginGithub from "react-login-github";

export const GithubLogin = () => {
  const onSuccess = (response) => {
    console.log(response);
  };
  
  const onFailure = (response) => console.error(response);
  return (
    <>
      <LoginGithub clientId="b66eabae7230d5daa54e" onSuccess={onSuccess} onFailure={onFailure} />
    </>
  );
};
