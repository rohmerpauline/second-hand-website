import formStyle from '../../styles/Form.module.css';
import FormProps from './props';
import Select from 'react-select';
import Input from '../Input/Input';
import Button from '../Button/Button';

import { Field, Form, Formik } from 'formik';

const Form = ({ formContent, handleChange, handleSubmit, handleSelect }: FormProps) => {
   const formInput = formContent.formInput;

   /* const customStyles = {
      option: (provided) => ({
         ...provided,
         margin: '0.5em',
      }),
      control: (provided) => ({
         // none of react-select's styles are passed to <Control />
         ...provided,
         marginTop: '0.4em',
         marginBottom: '1.4em',
      }),
      singleValue: (base) => ({ ...base }),
   }; */

   return (
      <Formik>
         <Form></Form>
      </Formik>
      /* <form onSubmit={handleSubmit}>
         {formInput.map((element) => {
            if (element.type === 'select') {
               return (
                  <div key={element.name} className={formStyle.inputcontainer}>
                     <label htmlFor={element.name} className={formStyle.label}>
                        {element.label}
                     </label>
                     <Select
                        isSearchable={true}
                        defaultValue={element.defaultValue}
                        options={element.options}
                        styles={customStyles}
                        name={element.name}
                        onChange={handleSelect}
                     ></Select>
                  </div>
               );
            } else {
               return (
                  <Input
                     id={element.name}
                     key={element.name}
                     label={element.label}
                     name={element.name}
                     placeholder={element.placeholder}
                     typeInput={element.type}
                     handleChange={handleChange}
                  />
               );
            }
         })}
         <Button buttonText={formContent.buttonText} />
      </form> */
   );
};

export default Form;