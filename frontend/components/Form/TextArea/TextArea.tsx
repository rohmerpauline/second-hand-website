import Label from '../Label/Label';
import TextError from '../TextError/TextError';
import { Field, ErrorMessage } from 'formik';
import formStyle from '../../../styles/Form.module.css';
import TextAreaProps from './props';

const TextArea = (props: TextAreaProps) => {
   const { label, name, placeholder, rows, ...rest } = props;

   return (
      <div className={formStyle.inputcontainer}>
         {label && <Label htmlFor={name}>{label}</Label>}
         <Field
            as='textarea'
            className={formStyle.textarea}
            id={name}
            name={name}
            placeholder={placeholder}
            rows={rows}
            {...rest}
         />
         <ErrorMessage name={name} component={TextError} />
      </div>
   );
};

export default TextArea;
