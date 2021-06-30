import { Link } from 'react-router-dom';

const Button = (props: { title: string; link: string; }) => {

    return (
        <div className={'button-container'}>
            <Link to={props.link} className={'button b-koios'}><p>{props.title}</p></Link>
        </div>
    )
}

export default Button;