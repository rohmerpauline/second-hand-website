import formStyle from '../../../styles/Form.module.css';
import Label from '../Label/Label';
import TextError from '../TextError/TextError';
import InputProps from './props';

import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';

import { Field, ErrorMessage, useField } from 'formik';

const Input = (props: InputProps) => {
   const { label, name, placeholder, errorMessage, eye, visibilityField, setVisibilityField, ...rest } = props;

   const [field, meta] = useField(name);

   return (
      <div className={formStyle.inputcontainer}>
         {label && <Label htmlFor={name}>{label}</Label>}
         <div className={formStyle.passwordToggle}>
            <Field
               className={meta.error && meta.touched ? formStyle.inputError : formStyle.input}
               id={name}
               name={name}
               placeholder={placeholder}
               {...rest}
            />
            {eye && visibilityField === false && (
               <AiFillEye className={formStyle.eyeToggle} onClick={() => setVisibilityField(true)} />
            )}
            {eye && visibilityField === true && (
               <AiFillEyeInvisible className={formStyle.eyeToggle} onClick={() => setVisibilityField(false)} />
            )}
         </div>
         <ErrorMessage name={name} component={TextError} />
         <TextError>{errorMessage}</TextError>
      </div>
   );
};

export default Input;
