import * as Yup from "yup";

const requiredMessage = 'Ce champ est requis.'
const inputLengthMessage = 'Ce champ doit contenir au moins 2 charactères.'

const LoginSchema = Yup.object().shape({
   email: Yup.string().email('Ce champ doit être un email valide.').required(requiredMessage),
   password: Yup.string().required(requiredMessage),
})

export default LoginSchema;