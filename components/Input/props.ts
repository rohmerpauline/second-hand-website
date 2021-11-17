export default interface InputProps {
    name: string,
    placeholder?: string,
    type?: string,
    label?: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
}