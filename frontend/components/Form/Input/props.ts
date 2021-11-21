export default interface InputProps {
    name: string,
    placeholder?: string,
    label?: string,
    errorMessage?: string,
    eye?: boolean,
    visibilityField?: boolean,
    setVisibilityField?: ({}) => void,
}