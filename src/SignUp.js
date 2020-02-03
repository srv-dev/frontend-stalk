import React, {useState, useReducer} from 'react';
import {useHistory} from 'react-router-dom';
import axios from 'axios';

function SignUp( props ){
  const [user, setUser] = useReducer(
    (state, newState) => ({...state, ...newState}),
    {
      name: '',
      username: '',
      location: '',
      email: '',
      password: '',
      password_confirmation: ''
    }
  );
  const history = useHistory();
  const [errors, setErrors] = useState('');


  const handleChange = (event) => {
    const name = event.target.name;
    const newValue = event.target.value;

    setUser({[name]: newValue});

  }




  const handleSubmit = (event) => {
    event.preventDefault()
    // console.log(user);

    axios.post('http://localhost:3000/users', {
      user,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then( res => {
      // console.log(res);
      if (res.data.jwt) {

        localStorage.setItem('token', res.data.jwt);
        localStorage.setItem('userId', res.data.user.id);
        axios.defaults.headers.common['Authorization'] = `Bearer ${res.data.jwt}`;
        props.loginComplete( true );

        history.push('/profile')


      } else {

        setErrors(res.data.failure)

      }
    })
    .catch( err => {
      console.warn(err);
    })



  };

  return(
    <div className="signupForm">
      <h2>Sign up</h2>
      {
        (errors) && <p>{errors}</p>
      }
      <form onSubmit={handleSubmit}>
        <div className="field">
          <label>Name:</label>
          <br/>
          <input value={user.name} onChange={handleChange} type="text" name="name"/>
        </div>
        <br/>

        <div className="field">
          <label>Username:</label>
          <br/>
          <input value={user.username} onChange={handleChange} type="text" name="username"/>
        </div>
        <br/>

        <div className="field">
          <label>Location:</label>
          <br/>
          <input value={user.location} onChange={handleChange} type="text" name="location"/>
        </div>
        <br/>

        <div className="field">
          <label>Email:</label>
          <br/>
          <input value={user.email} onChange={handleChange} type="text" name="email"/>
        </div>
        <br/>

        <div className="field">
          <label>Password:</label>
          <br/>
          <input value={user.password} onChange={handleChange} type="password" name="password"/>
        </div>
        <br/>

        <div className="field">
          <label>Password:</label>
          <br/>
          <input value={user.password_confirmation} onChange={handleChange} type="password" name="password_confirmation" placeholder="password confirmation"/>
        </div>
        <br/>

        <button type="submit">Submit</button>
      </form>

    </div>
  )
}
export default SignUp