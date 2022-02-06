import Label from '../Label/Label';
import TextError from '../TextError/TextError';
import { Field, ErrorMessage, useField } from 'formik';
import formStyle from '../../../styles/Form.module.css';
import TextAreaProps from './props';

const TextArea = (props: TextAreaProps) => {
   const { label, name, placeholder, rows, ...rest } = props;

   const [field, meta] = useField(name);

   return (
      <div className={formStyle.inputcontainer}>
         {label && <Label htmlFor={name}>{label}</Label>}
         <Field
            as='textarea'
            className={meta.error && meta.touched ? formStyle.textareaError : formStyle.textarea}
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
