export default interface RadioButtonProps {
  label: string;
  name: string;
  options: {
     value: string;
     key: string;
  };
  onClick: () => string;
  subButton: string;
}