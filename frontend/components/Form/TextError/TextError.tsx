import formStyle from '../../../styles/Form.module.css';
import TextErrorProps from './props';

const TextError = ({ children }) => {
   return <div className={formStyle.error}>{children}</div>;
};

export default TextError;
