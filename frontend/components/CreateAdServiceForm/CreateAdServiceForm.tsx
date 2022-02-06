import FormikControl from '../Form/FormikControl/FormikControl';
import MainButton from '../MainButton/MainButton';

import { Formik, Form } from 'formik';

import { SERVICE_SUBBUTTONS } from '../../constants';

import AdServiceSchema from '../../Validators/AdServiceSchema';

const radioOptionsService = [
   { key: SERVICE_SUBBUTTONS[0], value: '2' },
   { key: SERVICE_SUBBUTTONS[1], value: '3' },
];

const CreateAdServiceForm = (props) => {
   const { onSubmit, subButtonSelected, setSubButtonSelected } = props;

   const initialValues = {
      title: '',
      description: '',
      location: '',
      type_ad: '2',
   };

   return (
      <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={AdServiceSchema}>
         <Form>
            <FormikControl
               control='radio'
               name='type_ad'
               options={radioOptionsService}
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
            <MainButton>Je créér une annonce</MainButton>
         </Form>
      </Formik>
   );
};

export default CreateAdServiceForm;
