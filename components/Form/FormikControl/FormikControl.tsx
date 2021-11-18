import Input from '../Input/Input';
import TextArea from '../TextArea/TextArea';
import SelectInput from '../SelectInput/SelectInput';
import RadioButton from '../RadioButton/RadioButton';
import FormikControlProps from './props';

const FormikControl = (props: FormikControlProps) => {
   const { control, ...rest } = props;

   switch (control) {
      case 'input':
         return <Input {...rest} />;
         break;
      case 'textarea':
         return <TextArea {...rest} />;
         break;
      case 'select':
         return <SelectInput {...rest} />;
         break;
      case 'radio':
         return <RadioButton {...rest} />;
         break;
      case 'checkbox':
         break;
      case 'date':
         break;
      default:
         return null;
   }

   return <div></div>;
};

export default FormikControl;
