export default interface InputProps {
    id?: number,
    label?: string,
    name: string,
    placeholder?: string,
    typeInput: string,
    handleChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
}