import FormikControl from '../Form/FormikControl/FormikControl';
import Label from '../Form/Label/Label';
import MainButton from '../MainButton/MainButton';

import { CATEGORIES_ITEMS, OBJECT_CONDITION_ITEMS, OBJECT_SUBBUTTONS } from '../../constants';

import { Formik, Form } from 'formik';

import formStyle from '../../styles/Form.module.css';

const radioOptionsObject = [
   { key: OBJECT_SUBBUTTONS[0], value: '0' },
   { key: OBJECT_SUBBUTTONS[1], value: '1' },
];

const CreateAdObjectForm = (props) => {
   const { onSubmit, subButtonSelected, setSubButtonSelected } = props;

   const initialValues = {
      title: '',
      description: '',
      location: '',
      categories: '',
      object_condition: '',
      type_ad: '0',
      image1: '',
      image2: '',
      image3: '',
   };

   return (
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
         {({ setFieldValue, resetForm }) => (
            <Form>
               <FormikControl
                  control='radio'
                  name='type_ad'
                  options={radioOptionsObject}
                  onClick={setSubButtonSelected}
                  subButton={subButtonSelected}
               />
               <FormikControl
                  control='input'
                  type='text'
                  placeholder='plante, meuble-tv, lampe...'
                  name='title'
                  label='Titre de mon annonce :'
               />
               {subButtonSelected === OBJECT_SUBBUTTONS[0] && (
                  <>
                     <Label>Ajouter des photos :</Label>
                     <div className={formStyle.uploadContainer}>
                        <FormikControl control='upload' name='image1' onChange={setFieldValue} />
                        <FormikControl control='upload' name='image2' onChange={setFieldValue} />
                        <FormikControl control='upload' name='image3' onChange={setFieldValue} />
                     </div>
                  </>
               )}
               <FormikControl
                  control='textarea'
                  type='text'
                  placeholder='En super bon état. À venir chercher entre 10h et 12h.'
                  name='description'
                  label='Descriptif de mon annonce :'
                  rows={8}
               />
               <FormikControl
                  control='input'
                  type='text'
                  placeholder='Bruxelles, Namur, Liège...'
                  name='location'
                  label='Lieu de mon annonce :'
               />
               <FormikControl
                  control='select'
                  type='text'
                  options={CATEGORIES_ITEMS}
                  name='categories'
                  label='Catégories :'
               />
               {subButtonSelected === OBJECT_SUBBUTTONS[0] && (
                  <FormikControl
                     control='select'
                     type='text'
                     options={OBJECT_CONDITION_ITEMS}
                     name='object_condition'
                     label="État de l'objet :"
                  />
               )}
               <MainButton>Je créér une annonce</MainButton>
            </Form>
         )}
      </Formik>
   );
};

export default CreateAdObjectForm;
