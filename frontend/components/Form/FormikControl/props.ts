export default interface FormikControlProps {
   control: string;
   type?: string,
   placeholder?: string,
   name: string,
   errorMessage?: string,
   label?: string,
   eye?: boolean,
   visibilityField?: boolean,
   setVisibilityField?: ({}) =>void;
   rows?: number,
   options?: {
      value: number | string,
      key: string
   }[];
   onClick?: ({}) =>void;
  subButton?: string;
  onChange?: any;
}