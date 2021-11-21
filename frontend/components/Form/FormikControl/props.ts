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
      value:string,
      key: string
   }[];
   onClick?: () => string;
  subButton?: string;
}