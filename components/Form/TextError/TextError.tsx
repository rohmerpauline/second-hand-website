import formStyle from '../../../styles/Form.module.css';
import TextErrorProps from './props';

const TextError = ({ name }: TextErrorProps) => {
   return <div className={formStyle.error}>{name}</div>;
};

export default TextError;
