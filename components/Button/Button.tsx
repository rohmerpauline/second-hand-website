import ButtonProps from './props';
import buttonStyle from '../../styles/Button.module.css';

const Button = ({ children }: ButtonProps) => {
   return (
      <div className={buttonStyle.buttoncontainer}>
         <button type='submit' className={buttonStyle.button}>
            {children}
         </button>
      </div>
   );
};

export default Button;
