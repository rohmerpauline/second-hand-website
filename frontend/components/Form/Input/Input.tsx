import formStyle from '../../../styles/Form.module.css';
import Label from '../Label/Label';
import TextError from '../TextError/TextError';
import InputProps from './props';

import { Field, ErrorMessage, useField } from 'formik';

const Input = (props: InputProps) => {
   const { label, name, placeholder, errorMessage, ...rest } = props;

   const [field, meta] = useField(name);

   return (
      <div className={formStyle.inputcontainer}>
         {label && <Label htmlFor={name}>{label}</Label>}
         <Field
            className={meta.error && meta.touched ? formStyle.inputError : formStyle.input}
            id={name}
            name={name}
            placeholder={placeholder}
            {...rest}
         />
         <ErrorMessage name={name} component={TextError} />
         <TextError>{errorMessage}</TextError>
      </div>
   );
};

export default Input;
