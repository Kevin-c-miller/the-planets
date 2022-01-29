import { useState } from 'react';
import InputFields from '../../components/InputFields/InputFields';
import api from '../../services/apiConfig/userEntry.js';
import { useNavigate } from 'react-router-dom';

const default_input = {
  name: '',
  type: '',
  fact: '',
  image: '',
  userEntryName: '',
};

export default function AddNewEntry() {
  const [input, setInput] = useState(default_input);

  const navigate = useNavigate();

  //for input values on form
  const handleTextInput = (e) => {
    const { id, value } = e.target;
    console.log(id, value);
    setInput((prevInput) => ({
      ...prevInput,
      [id]: value,
    }));
  };

  //for submit function on form
  const handleSubmit = async (e) => {
    e.preventDefault();
    const fields = input;
    await api.post('', { fields });
    setInput(default_input);
    navigate('/user-entries');
  };

  return (
    <div className="AddNew">
      <h2>Add an entry!</h2>
      <InputFields
        input={input}
        handleTextInput={handleTextInput}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}
