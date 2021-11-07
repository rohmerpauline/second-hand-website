/* import { ReactElement } from 'react'; */
import formStyle from '../../styles/Form.module.css';
/* import InputProps from './props'; */

const Input = (props) => {
   const { placeholder, type, name } = props;

   return (
      <div className={type === 'checkbox' ? formStyle.checkboxcontainer : formStyle.inputcontainer}>
         <input className={formStyle.input} placeholder={placeholder} type={type} id={name} />
         <div></div>
      </div>
   );
};

export default Input;
/* const Input = ({ id, label, name, placeholder, typeInput, handleChange }: InputProps) => {
   let inputElement: ReactElement<HTMLElement>;

   if (typeInput === 'textarea') {
      inputElement = (
         <textarea
            className={formStyle.textarea}
            name={name}
            rows={7}
            placeholder={placeholder}
            onChange={handleChange}
         ></textarea>
      );
   } else if (typeInput === 'checkbox') {
      inputElement = <input type={typeInput} name={name} onChange={handleChange}></input>;
   } else {
      inputElement = (
         <input
            className={formStyle.input}
            type={typeInput}
            name={name}
            placeholder={placeholder}
            onChange={handleChange}
         ></input>
      );
   }

   return (
      <div key={id} className={typeInput === 'checkbox' ? formStyle.checkboxcontainer : formStyle.inputcontainer}>
         {label && typeInput !== 'checkbox' && <label className={formStyle.label}>{label}</label>}
         {inputElement}
         {label && typeInput === 'checkbox' && <label className={formStyle.label}>{label}</label>}
      </div>
   );
};

export default Input; */
