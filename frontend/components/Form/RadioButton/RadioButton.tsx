import Label from '../Label/Label';
import TextError from '../TextError/TextError';
import { Field, ErrorMessage } from 'formik';
import formStyle from '../../../styles/Form.module.css';
import RadioButtonProps from './props';

const RadioButton = (props: RadioButtonProps) => {
   const { label, name, options, onClick, subButton, ...rest } = props;

   return (
      <div className={formStyle.inputcontainer}>
         {label && <Label htmlFor={name}>{label}</Label>}
         <Field name={name} {...rest}>
            {({ field }) => {
               return options.map((option) => {
                  return (
                     <div
                        key={option.key}
                        className={formStyle.radioContainer}
                        onClick={onClick ? () => onClick(option.key) : null}
                     >
                        <label
                           htmlFor={option.key}
                           className={
                              option.value === field.value || subButton === option.key
                                 ? formStyle.labelChecked
                                 : formStyle.radioLabel
                           }
                        >
                           <input
                              type='radio'
                              id={option.key}
                              {...field}
                              value={option.value}
                              checked={field.value === option.value}
                              className={formStyle.radioInput}
                           />
                           {option.key}
                        </label>
                     </div>
                  );
               });
            }}
         </Field>
         <ErrorMessage name={name} component={TextError} />
      </div>
   );
};

export default RadioButton;
