import ButtonProps from './props';
import buttonStyle from '../../styles/Button.module.css';

const Button = ({ buttonText }: ButtonProps) => {
    return (
        <div className={buttonStyle.buttoncontainer}>
            <button className={buttonStyle.button}>{buttonText}</button>
        </div>
    );
};

export default Button;
