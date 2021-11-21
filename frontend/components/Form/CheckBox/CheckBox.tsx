import Label from '../Label/Label';
import TextError from '../TextError/TextError';
import { Field, ErrorMessage } from 'formik';
import formStyle from '../../../styles/Form.module.css';

import CheckBoxProps from './props';

const CheckBox = (props: CheckBoxProps) => {
   const { label, name, options, ...rest } = props;

   return (
      <div className={formStyle.checkboxcontainer}>
         {label && <Label htmlFor={name}>{label}</Label>}
         <Field name={name} {...rest}>
            {({ field }) => {
               return options.map((option) => {
                  return (
                     <div key={option.key}>
                        <input
                           type='checkbox'
                           id={option.value}
                           {...field}
                           value={option.value}
                           checked={field.value.includes(option.value)}
                        />
                        <label htmlFor={option.value}>{option.key}</label>
                     </div>
                  );
               });
            }}
         </Field>
         <ErrorMessage name={name} component={TextError} />
      </div>
   );
};

export default CheckBox;
