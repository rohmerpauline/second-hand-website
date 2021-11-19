import FormTitleProps from './props';
import formStyle from '../../../styles/Form.module.css';

const FormTitle = ({ title, subtitle }: FormTitleProps) => {
   return (
      <div>
         <h1 className={formStyle.title}>{title}</h1>
         <p className={formStyle.subtitle}>{subtitle}</p>
      </div>
   );
};

export default FormTitle;
