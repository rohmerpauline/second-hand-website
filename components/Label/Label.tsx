import { ReactElement } from 'react';
import formStyle from '../../styles/Form.module.css';
import LabelProps from './props';

const Label = ({ children, element }) => {
   return (
      <label htmlFor={element} className={formStyle.label}>
         {children}
      </label>
   );
};

export default Label;
