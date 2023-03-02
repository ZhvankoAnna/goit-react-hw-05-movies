import { useState } from 'react';

const useForm = (initialState, onSubmit) => {
  const [state, setState] = useState({ ...initialState });

  const handleInput = ({ target }) => {
    const { id, type, checked, value } = target;
    setState(prevState => ({
      ...prevState,
      [id]: type === 'chekbox' ? checked : value,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ ...state });
    setState({ ...initialState });
  };

  return { state, handleInput, handleSubmit };
};

export default useForm;
