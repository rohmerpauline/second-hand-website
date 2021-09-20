export default interface FormProps {
    formContent: {
        title?
        : string,
        subtitle?: string,
        formInput: {
            id?: number,
            type: string,
            name: string,
            placeholder?: string,
            label?: string,
            defaultValue?: {},
            options?: {}
        }[],
        buttonText: string,
        hiddenInputValue?: string,
    }
    handleChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
    handleSubmit?: (e: React.FormEvent<HTMLFormElement>) => void
    handleSelect?: (e: any) => void
}