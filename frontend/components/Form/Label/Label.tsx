import { ReactElement } from 'react';
import formStyle from '../../../styles/Form.module.css';
import LabelProps from './props';

const Label = ({ children, htmlFor }: LabelProps) => {
   return (
      <label htmlFor={htmlFor} className={formStyle.label}>
         {children}
      </label>
   );
};

export default Label;
