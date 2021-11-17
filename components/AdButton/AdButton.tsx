import adButton from '../../styles/AdButton.module.css';
import ReactTooltip from 'react-tooltip';
//FIXME ADD props

const AdButton = ({ children, buttonSelected, onClickButton, buttonContent, tooltip } /* : AdButtonProps */) => {
   return (
      <>
         <button
            onClick={() => onClickButton(buttonContent)}
            className={buttonSelected === buttonContent ? adButton.btniconeselected : adButton.btnicone}
            data-tip
            data-for='object-tip'
            data-delay-show='500'
         >
            {children}
         </button>
         {tooltip && (
            <ReactTooltip id='object-tip' place='right' effect='float' arrowColor='black' delayShow={500}>
               {buttonContent}
            </ReactTooltip>
         )}
      </>
   );
};

export default AdButton;
