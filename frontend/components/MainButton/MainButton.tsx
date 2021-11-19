import ButtonProps from './props';
import mainBtnStyle from '../../styles/MainButton.module.css';

const MainButton = ({ children }: ButtonProps) => {
   return (
      <div className={mainBtnStyle.buttoncontainer}>
         <button type='submit' className={mainBtnStyle.button}>
            {children}
         </button>
      </div>
   );
};

export default MainButton;
