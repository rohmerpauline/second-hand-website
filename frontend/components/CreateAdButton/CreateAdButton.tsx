import adButton from '../../styles/CreateAdButton.module.css';
//FIXME ADD props

const CreateAdButton = ({ children, buttonSelected, onClickButton, buttonContent } /* : AdButtonProps */) => {
   return (
      <>
         <button
            onClick={() => onClickButton(buttonContent)}
            className={buttonSelected === buttonContent ? adButton.btniconeselected : adButton.btnicone}
         >
            {children}
         </button>
      </>
   );
};

export default CreateAdButton;
