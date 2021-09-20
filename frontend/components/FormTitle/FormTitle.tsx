
import formStyle from '../../styles/Form.module.css'

interface FormTitleProps {
    formTitle: {
        title: string,
        subtitle?: string,
    }
}

const FormTitle = ({ formTitle }: FormTitleProps) => {
    return (
        <div>
            <h1 className={formStyle.title}>{formTitle.title}</h1>
            <p className={formStyle.subtitle}>{formTitle.subtitle}</p>
        </div>
    )
}

export default FormTitle
