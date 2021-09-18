export default interface FormProps {
    formContent: {
        title: string,
        subtitle?: string,
        formInput: {
            id?: number,
            type: string,
            name: string,
            placeholder?: string,
            label?: string
        }[],
        buttonText: string,
    }
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void
}