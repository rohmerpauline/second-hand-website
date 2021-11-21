import Label from '../Label/Label';
import TextError from '../TextError/TextError';
import { Field, ErrorMessage } from 'formik';
import formStyle from '../../../styles/Form.module.css';
import SelectInputProps from './props';

const SelectInput = (props: SelectInputProps) => {
   const { label, name, options, ...rest } = props;

   return (
      <div className={formStyle.inputcontainer}>
         {label && <Label htmlFor={name}>{label}</Label>}
         <Field as='select' className={formStyle.input} id={name} name={name} {...rest}>
            {options.map((option) => {
               return (
                  <option key={option.value} value={option.value}>
                     {option.key}
                  </option>
               );
            })}
         </Field>
         <ErrorMessage name={name} component={TextError} />
      </div>
   );
};

export default SelectInput;
