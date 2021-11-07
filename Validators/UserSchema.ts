import * as Yup from "yup";

const UserSchema = Yup.object().shape({
   lastname: Yup.string().required('Last name is required').min(2, 'too short'),
   firstname: Yup.string().required('First name is required').min(2, 'too short'),
   email: Yup.string().email().required('Email is required'),
   password: Yup.string().matches(/(?=.*[0-9]+)(?=.*[!@#$%^&*]+)[a-zA-Z-0-9-!@#$%^&*]{8,}/, 'Password must contain letters, number and a special character').required('Password is required'),
   passwordConfirmation: Yup.string().oneOf([Yup.ref('password'), null], 'Password must match').required('Password confirmation is required')
})

export default UserSchema;