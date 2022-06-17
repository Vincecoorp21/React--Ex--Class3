import { useState } from 'react';
//import { useNavigate } from 'react-router';
import { useNavigate } from 'react-router-dom';
import './NewsForm.scss';

const UserForm = () => {
  const [data, setData] = useState({
    username: '',
    email: '',
    location: '',
    textarea: '',
  });

  let usersInfo = JSON.parse(localStorage.getItem('USERS')) || [];

  const [btnDisabled, setBtnDisabled] = useState(true);

  const [message, setMessage] = useState('');

  let navigate = useNavigate();

  const initialState = {
    username: '',
    email: '',
    location: '',
    textarea: '',
  };

  const clearState = () => {
    setData({ ...initialState });
  };

  const handleInputChange = event => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });

    if (data.username.length < 5) {
      setMessage('News Title must be at least 5 characters');
      setBtnDisabled(true);
    } else {
      setMessage(null);
      setBtnDisabled(false);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log('se lanza el formulario', data);
    console.log(data.email);

    saveData();
    clearState();
    setMessage('formulario enviado con éxito');

    setTimeout(() => {
      navigate('/');
    }, 3000);
  };

  const saveData = () => {
    usersInfo.push(data);
    localStorage.setItem('USERS', JSON.stringify(usersInfo));
  };

  return (
    <div className='container'>
      <h1>Send News...</h1>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='News Title'
          value={data.username}
          onChange={handleInputChange}
          name='username'
        />
        <input
          type='email'
          placeholder='Email'
          value={data.email}
          onChange={handleInputChange}
          name='email'
        />
        <input
          type='text'
          placeholder='Location'
          value={data.location}
          onChange={handleInputChange}
          name='location'
        />
        <textarea
          name='textarea'
          rows='10'
          cols='50'
          value={data.comment}
          onChange={handleInputChange}
          placeholder='Description'
        ></textarea>

        <button type='submit' disabled={btnDisabled}>
          Submit
        </button>
        {message}
      </form>
    </div>
  );
};

export default UserForm;
