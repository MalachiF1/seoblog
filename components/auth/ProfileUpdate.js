import Link from 'next/link';
import { useState, useEffect } from 'react';
import Router from 'next/router';
import { getCookie, isAuth, updateUser } from '../../actions/auth';
import { getProfile, update } from '../../actions/user';
import { API } from '../../config';

const ProfileUpdate = () => {
    const [values, setValues] = useState({
        username: '',
        username_for_photo: '',
        name: '',
        email: '',
        about: '',
        password: '',
        oldPassword: '',
        error: false,
        success: false,
        loading: false,
        photo: '',
        userData: process.browser && new FormData()
    });

    const token = getCookie('token');
    const { 
        username, 
        username_for_photo, 
        name, 
        email, 
        about, 
        password, 
        oldPassword,
        error, 
        success, 
        loading, 
        photo, 
        userData 
    } = values;

    const init = () => {
        getProfile(token).then(data => {
            if (data.error) {
                setValues({ ...values, error: data.error });
            } else {
                setValues({
                    ...values,
                    username: data.username,
                    username_for_photo: data.username,
                    name: data.name,
                    email: data.email,
                    about: data.about
                });
            }
        });
    };

    useEffect(() => {
        init();
        setValues({ ...values, userData: new FormData() });
    }, []);

    const handleChange = name => e => {
        // console.log(e.target.value);
        const value = name === 'photo' ? e.target.files[0] : e.target.value;
        //let userFormData = new FormData();
        userData.set(name, value);
        console.log(...userData);
        setValues({ ...values, [name]: value, userData, error: false, success: false });
    };

    const handleSubmit = e => {
        e.preventDefault();

        setValues({ ...values, loading: true });
        update(token, userData).then(data => {
            if (data.error) {
                console.log('data.error', data.error);
                setValues({ ...values, error: data.error, loading: false });
            } else {
                updateUser(data, () => {
                    setValues({
                        ...values,
                        username: data.username,
                        name: data.name,
                        email: data.email,
                        about: data.about,
                        password: '',
                        oldPassword: '',
                        success: true,
                        loading: false
                    });
                }); 
            }
        });
    };

    const profileUpdateForm = () => (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label className="btn btn-outline-info">
                    Profile photo
                    <input onChange={handleChange('photo')} type="file" accept="image/*" hidden />
                </label>
            </div>
            <div className="form-group">
                <label className="text-muted">Username</label>
                <input onChange={handleChange('username')} type="text" value={username} className="form-control" />
            </div>
            <div className="form-group">
                <label className="text-muted">Name</label>
                <input onChange={handleChange('name')} type="text" value={name} className="form-control" />
            </div>
            {/*<div className="form-group">
                <label className="text-muted">Email</label>
                <input onChange={handleChange('email')} type="text" value={email} className="form-control" />
            </div>*/}
            <div className="form-group pb-3">
                <label className="text-muted">About</label>
                <textarea onChange={handleChange('about')} type="text" value={about} className="form-control" />
            </div>
            <div className='card pl-2 pr-2 pb-2 pt-2'>
                {<div className="form-group">
                    <label className="text-muted">Old Password</label>
                    <input onChange={handleChange('oldPassword')} type="password" value={oldPassword} className="form-control" />
                </div>}
                <div className="form-group">
                    <label className="text-muted">New Password</label>
                    <input onChange={handleChange('password')} type="password" value={password} className="form-control" />
                </div>
            </div>
            <div>
                {showSuccess()}
                {showError()}
                {showLoading()}
            </div>
            <div>
                <button type="submit" className="btn btn-primary mt-3" disabled={!username || !name || !email}>
                    Update
                </button>
            </div>
        </form>
    );

    const showError = () => (
        <div className='alert alert-danger mt-2' style={{ display: error ? '' : 'none' }}>
            {error}
        </div>
    );

    const showSuccess = () => (
        <div className='alert alert-success mt-2' style={{ display: success ? '' : 'none' }}>
            Profile Updated
        </div>
    );

    const showLoading = () => (
        <div className='alert alert-info mt-2' style={{ display: loading ? '' : 'none' }}>
            Loading...
        </div>
    );


    return (
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <img
                            src={`${API}/user/photo/${username_for_photo}`}
                            className='img img-fluid img-thumbnail mb-3'
                            style={{ maxHeight: 'auto', maxWidth: '100%' }}
                            alt='user profile'
                        />
                    </div>
                    <div className="col-md-8 mb-5">
                        {profileUpdateForm()}
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default ProfileUpdate;