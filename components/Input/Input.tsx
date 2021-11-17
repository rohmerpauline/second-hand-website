/* import { ReactElement } from 'react'; */
import formStyle from '../../styles/Form.module.css';
import Label from '../Label/Label';
import InputProps from './props';

const Input = (props: InputProps) => {
   const { placeholder, type, name, onChange, label } = props;

   let input = (
      <input
         className={formStyle.input}
         placeholder={placeholder}
         type={type}
         id={name}
         name={name}
         onChange={onChange}
      />
   );

   if (type === 'textarea') {
      input = (
         <textarea
            className={formStyle.textarea}
            name={name}
            id={name}
            rows={7}
            placeholder={placeholder}
            onChange={onChange}
         ></textarea>
      );
   }

   return (
      <div className={type === 'checkbox' ? formStyle.checkboxcontainer : formStyle.inputcontainer}>
         {label && type !== 'checkbox' && <Label element={name}>{label}</Label>}
         {input}
         {label && type === 'checkbox' && <Label element={name}>{label}</Label>}
      </div>
   );
};

export default Input;
