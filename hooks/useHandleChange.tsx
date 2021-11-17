interface handleChangeProps {
   e: React.ChangeEvent<HTMLInputElement> /* | React.ChangeEvent<HTMLTextAreaElement> */;
   setState: ({}) => void;
}

const useHandleChange = ({ e, setState }: handleChangeProps): void => {
   const target = e.target;
   const name = e.target.name;
   const value = target.type === 'checkbox' ? target.checked : target.value;
   setState((prevState: {}) => ({
      ...prevState,
      [name]: value,
   }));
};

export default useHandleChange;
