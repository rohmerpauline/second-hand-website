import { useState } from 'react';

import Label from '../Label/Label';
import TextError from '../TextError/TextError';

import { ErrorMessage } from 'formik';

import formStyle from '../../../styles/Form.module.css';
import { MdAddAPhoto } from 'react-icons/md';
import { RiCloseCircleFill } from 'react-icons/Ri';

import InputFileProps from './props';

const InputFile = (props: InputFileProps) => {
   const { name, onChange } = props;

   const [previewFile, setPreviewFile] = useState(null);

   const clearInputFile = (name: string): void => {
      setPreviewFile(null);
      onChange(name, '');
   };

   return (
      <div className={formStyle.inputcontainer}>
         <div className={formStyle.uploadIconContainer}>
            <Label htmlFor={name}>
               {!previewFile && <MdAddAPhoto size={30} className={formStyle.uploadIcon} />}
               {previewFile && (
                  <>
                     <img src={previewFile} className={formStyle.previewUpload} />
                  </>
               )}
            </Label>
            {previewFile && (
               <div className={formStyle.deleteUpload}>
                  <RiCloseCircleFill size={20} onClick={() => clearInputFile(name)} />
               </div>
            )}
         </div>
         <input
            className={formStyle.image}
            type='file'
            name={name}
            id={name}
            accept='image/png, image/jpeg, image/jpg'
            onChange={(event) => {
               onChange(name, event.currentTarget.files[0]);
               setPreviewFile(URL.createObjectURL(event.target.files[0]));
            }}
            hidden
         />
         <ErrorMessage name={name} component={TextError} />
      </div>
   );
};

export default InputFile;
