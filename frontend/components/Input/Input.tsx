import { ReactElement } from 'react';
import formStyle from '../../styles/Form.module.css';
import InputProps from './props';

const Input = ({ id, label, name, placeholder, typeInput, handleChange }: InputProps) => {
   let inputElement: ReactElement<HTMLElement>;

   switch (typeInput as any) {
      case typeInput === 'textarea':
         inputElement = (
            <textarea
               className={formStyle.textarea}
               name={name}
               rows={7}
               placeholder={placeholder}
               onChange={handleChange}
            ></textarea>
         );
         break;
      case typeInput === 'checkbox':
         inputElement = <input type={typeInput} name={name} onChange={handleChange}></input>;
         break;
      default:
         inputElement = (
            <input
               className={formStyle.input}
               type={typeInput}
               name={name}
               placeholder={placeholder}
               onChange={handleChange}
            ></input>
         );
         break;
   }

   return (
      <div key={id} className={typeInput === 'checkbox' ? formStyle.checkboxcontainer : formStyle.inputcontainer}>
         {label && typeInput !== 'checkbox' && <label className={formStyle.label}>{label}</label>}
         {inputElement}
         {label && typeInput === 'checkbox' && <label className={formStyle.label}>{label}</label>}
      </div>
   );
};

export default Input;
