export default interface RadioButtonProps {
  label?: string;
  name: string;
  options?: {
    value: string,
    key: string
  }[],
  onClick?: (key: string) => string;
  subButton?: string;
}