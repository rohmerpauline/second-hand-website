import * as Yup from "yup";

const requiredMessage = 'Ce champ est requis.'
const inputLengthMessage = 'Ce champ doit contenir au moins 2 charactères.'

const RegisterSchema = Yup.object().shape({
   lastname: Yup.string().required(requiredMessage).min(2, inputLengthMessage),
   firstname: Yup.string().required(requiredMessage).min(2, inputLengthMessage),
   email: Yup.string().email('Ce champ doit être un email valide.').required(requiredMessage),
   password: Yup.string().matches(/(?=.*[0-9]+)(?=.*[!@#$%^&*]+)[a-zA-Z-0-9-!@#$%^&*]{8,}/, 'Le mot de passe doit contenir 8 charactères (lettres, chiffres et un charactère spécial).').required(requiredMessage),
   passwordConfirmation: Yup.string().oneOf([Yup.ref('password'), null], 'Les mots de passe ne correspondent pas.').required(requiredMessage)
})

export default RegisterSchema;