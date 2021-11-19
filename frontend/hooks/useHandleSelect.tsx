interface handleSelectProps {
   e: any;
   setState: ({}) => void;
}

const useHandleSelect = ({ e, setState }: handleSelectProps): void => {
   setState((prevState) => ({
      ...prevState,
      [e.name]: e.value,
   }));
};

export default useHandleSelect;
