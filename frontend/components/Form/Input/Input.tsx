import formStyle from '../../../styles/Form.module.css';
import Label from '../Label/Label';
import TextError from '../TextError/TextError';
import InputProps from './props';

import { Field, ErrorMessage } from 'formik';

const Input = (props: InputProps) => {
   const { label, name, placeholder, ...rest } = props;

   return (
      <div className={formStyle.inputcontainer}>
         {label && <Label htmlFor={name}>{label}</Label>}
         <Field className={formStyle.input} id={name} name={name} placeholder={placeholder} {...rest} />
         <ErrorMessage name={name} component={TextError} />
      </div>
   );
};

export default Input;
