import FormTitleProps from './props';
import formStyle from '../../styles/Form.module.css';

const FormTitle = ({ formTitle }: FormTitleProps) => {
   return (
      <div>
         <h1 className={formStyle.title}>{formTitle.title}</h1>
         <p className={formStyle.subtitle}>{formTitle.subtitle}</p>
      </div>
   );
};

export default FormTitle;
