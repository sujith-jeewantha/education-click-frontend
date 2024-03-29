import React, { useState, useEffect } from 'react';
import { FiUser, FiLock } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../../../../config/redux/action';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { registerAPICall } from '../services/AuthService'

RegisterInputStudent

function RegisterInputStudent() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user, isError, isSuccess, isLoading, message } = useSelector((state) => state.auth);

  const handleLogin = async (e) => {
    e.preventDefault();
    dispatch(loginUser({ username, password }));
  }

  useEffect(() => {
    if (user || isSuccess) {
      navigate("/dashboard");
    }
  }, [user, isSuccess, dispatch, navigate]);

  useEffect(() => {
    if (isError) {
      Swal.fire({
        icon: 'error',
        title: 'Login Gagal',
        text: message,
      }).then(() => {
      });
    } else if (isSuccess && user) {
      Swal.fire({
        icon: 'success',
        title: 'Login Berhasil',
        text: message,
        timer: 1500,
      }).then(() => {
      });
    }
  }, [isError, isSuccess, user, message, dispatch]);

  const [name, setName] = useState('')
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

  function handleRegistrationForm(e){

    e.preventDefault();

    const register = {name, username, email, password}

    console.log(register);

    registerAPICall(register).then((response) => {
        console.log(response.data);
    }).catch(error => {
        console.error(error);
    })
}

  return (
    <div className='container'>
        <br /> <br />
        <div className='row'>
            <div className='col-md-6 offset-md-3'>
                <div className='card'>
                    <div className='card-header'>
                        <h2 className='text-center'> User Registration Form </h2>
                    </div>

                    <div className='card-body'>
                        <form>
                            <div className='row mb-3'>
                                <label className='col-md-3 control-label'> Name </label>
                                <div className='col-md-9'>
                                    <input
                                        type='text'
                                        name='name'
                                        className='form-control'
                                        placeholder='Enter name'
                                        value={name}
                                        onChange={ (e) => setName(e.target.value)}
                                    >
                                    </input>
                                </div>
                            </div>

                            <div className='row mb-3'>
                                <label className='col-md-3 control-label'> Username </label>
                                <div className='col-md-9'>
                                    <input
                                        type='text'
                                        name='username'
                                        className='form-control'
                                        placeholder='Enter username'
                                        value={username}
                                        onChange={ (e) => setUsername(e.target.value)}
                                    >
                                    </input>
                                </div>
                            </div>


                            <div className='row mb-3'>
                                <label className='col-md-3 control-label'> Email </label>
                                <div className='col-md-9'>
                                    <input
                                        type='text'
                                        name='email'
                                        className='form-control'
                                        placeholder='Enter email address'
                                        value={email}
                                        onChange={ (e) => setEmail(e.target.value)}
                                    >
                                    </input>
                                </div>
                            </div>

                            <div className='row mb-3'>
                                <label className='col-md-3 control-label'> Password </label>
                                <div className='col-md-9'>
                                    <input
                                        type='password'
                                        name='password'
                                        className='form-control'
                                        placeholder='Enter password'
                                        value={password}
                                        onChange={ (e) => setPassword(e.target.value)}
                                    >
                                    </input>
                                </div>
                            </div>

                            <div className='form-group mb-3'>
                                <button className='btn btn-primary' onClick={ (e) => handleRegistrationForm(e)}>Submit</button>

                            </div>
                        </form>

                    </div>

                </div>
            </div>
        </div>


    </div>
  );
}

export default RegisterInputStudent;
