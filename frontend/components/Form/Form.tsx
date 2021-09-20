import formStyle from '../../styles/Form.module.css'
import FormProps from './props'
import Select from 'react-select'

const Form = ({formContent, handleChange, handleSubmit, handleSelect}: FormProps) => {

    const formInput = formContent.formInput

    const customStyles = {
        option: (provided) => ({
            ...provided,
            margin : '0.5em'
        }),
        control: (provided) => ({
            // none of react-select's styles are passed to <Control />
            ...provided,
            marginTop : '0.4em'
        }),
        singleValue: base => ({ ...base}),
    }

    return (
        <form onSubmit={handleSubmit}>
            {formInput.map((element) => {
                if (element.type === 'textarea') {
                    return (
                        <div key={element.id} className={formStyle.inputcontainer}>
                            {element.label && 
                            <label className={formStyle.label}>{element.label}</label>
                            }
                            <textarea className={formStyle.textarea} name={element.name} rows={7} placeholder={element.placeholder} onChange={handleChange}></textarea>
                        </div>
                    )
                } else if(element.type === 'checkbox') {
                    return (
                        <div key={element.id} className={formStyle.checkboxcontainer}>
                            <input type={element.type} name={element.name} onChange={handleChange}></input>
                            <label htmlFor={element.name}>{element.label}</label>
                        </div>
                    )
                } else if (element.type === 'select') {
                    return (
                    <div key={element.id} className={formStyle.inputcontainer}>
                    <label htmlFor={element.name} className={formStyle.label}>{element.label}</label>
                    <Select 
                        isSearchable={true}
                        defaultValue={element.defaultValue} 
                        options={element.options} 
                        styles={customStyles}
                        name={element.name}
                        onChange={handleSelect}
                    >
                    </Select>
                    </div>
                    )
                } else {
                    return (
                        <div key={element.id} className={formStyle.inputcontainer}>
                            {element.label && 
                            <label className={formStyle.label}>{element.label}</label>
                            }
                            <input className={formStyle.input} type={element.type} name={element.name} placeholder={element.placeholder} onChange={handleChange}></input>
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
