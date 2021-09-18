import formStyle from '../../styles/Form.module.css'
import FormProps from './props'

const Form = ({formContent, handleChange, handleSubmit}: FormProps) => {

    const formInput = formContent.formInput

    return (
        <form onSubmit={handleSubmit}>
            <h1 className={formStyle.title}>{formContent.title}</h1>
            <p className={formStyle.subtitle}>{formContent.subtitle}</p>
            {formInput.map((element) => {
                if(element.type !== 'checkbox') {
                    return(
                        <div key={element.id} className={formStyle.inputcontainer}>
                            <input className={formStyle.input} type={element.type} name={element.name} placeholder={element.placeholder} onChange={handleChange}></input>
                        </div>
                    )
                }
                if(element.type === 'checkbox'){
                    return(
                        <div key={element.id} className={formStyle.checkboxcontainer}>
                            <input className={formStyle.checkbox} type={element.type} name={element.name} placeholder={element.placeholder} onChange={handleChange}></input>
                            <label>{element.label}</label>
                        </div>
                    )
                }
            })}
            <div className={formStyle.buttoncontainer}>
                <button className={formStyle.button}>{formContent.buttonText}</button>
            </div>
        </form>
    )
}

export default Form
