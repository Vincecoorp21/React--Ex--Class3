import { useState } from 'react';
//import { useNavigate } from 'react-router';
import { useNavigate } from 'react-router-dom';
import './UserForm.css';

const UserForm = () => {
  const [data, setData] = useState({
    username: '',
    email: '',
  });

  const [btnDisabled, setBtnDisabled] = useState(true);

  const [message, setMessage] = useState('');

  let navigate = useNavigate();

  const initialState = {
    username: '',
    email: '',
  };

  const clearState = () => {
    setData({ ...initialState });
  };

  const handleInputChange = event => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });

    if (data.username.length < 3) {
      setMessage('Name must be at least 3 characters');
      setBtnDisabled(true);
    } else {
      setMessage(null);
      setBtnDisabled(false);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log('se lanza el formulario', data);
    clearState();
    setMessage('formulario enviado con éxito');

    setTimeout(() => {
      navigate('/');
    }, 3000);
  };

  return (
    <div className='container'>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='name'
          value={data.username}
          onChange={handleInputChange}
          name='username'
        />
        <input
          type='email'
          placeholder='email'
          value={data.email}
          onChange={handleInputChange}
          name='email'
        />

        <button type='submit' disabled={btnDisabled}>
          Enviar
        </button>
        {message}
      </form>
    </div>
  );
};

export default UserForm;
