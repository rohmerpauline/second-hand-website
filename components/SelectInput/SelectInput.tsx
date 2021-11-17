import formStyle from '../../styles/Form.module.css';
/* import InputProps from './props'; */
import Label from '../Label/Label';
import Select from 'react-select';

const SelectInput = (props /* : InputProps */) => {
   const { name, onChange, label, options } = props;

   const customStyles = {
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
   };

   return (
      <div key={name} className={formStyle.inputcontainer}>
         <Label element={name}>{label}</Label>
         <Select
            isSearchable={true}
            defaultValue={options[0]}
            options={options}
            styles={customStyles}
            name={name}
            onChange={onChange}
         ></Select>
      </div>
   );
};

export default SelectInput;
