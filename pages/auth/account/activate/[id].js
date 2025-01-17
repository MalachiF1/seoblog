import { useState, useEffect } from 'react';
import jwt from 'jsonwebtoken';
import Layout from '../../../../components/Layout';
import { withRouter } from 'next/router';
import { signup } from '../../../../actions/auth';


const ActivateAccount = ({ router }) => {
    const [values, setValues] = useState({
        name: '',
        token: '',
        error: '',
        loading: false,
        success: false,
        showButton: true
    });

    const { name, token, error, loading, success, showButton } = values;

    useEffect(() => {
        let token = router.query.id;
        if(token) {
            const { name } = jwt.decode(token);
            setValues({ ...values, name, token })
        }
    }, [router]);

    const clickSubmit = e => {
        e.preventDefault();
        setValues({ ...values, loadin: true, error: false });
        signup({token}).then(data => {
            if(data.error) {
                setValues({ ...values, error: data.error, loading: false, showButton: false });
            } else {
                setValues({ ...values, loading: false, success: true, showButton: false });
            }
        });
    };

    const showLoading = () => (loading ? <div className='alert alert-info'>Loading...</div> : '');
    const showError = () => (error ? <div className='alert alert-danger'>{error}</div> : '');
    const showSuccess = () => (success ? <div className='alert alert-success'>You have successfuly activated your account. Please signin</div> : '');

    return (
        <Layout>
            <div className='container'>
                <h3 className='pb-4'>Hey {name}, Ready to activate your account?</h3>
                {showLoading()}
                {showError()}
                {showSuccess()}
                {showButton && <button className='btn btn-primary' onClick={clickSubmit}>Activate Account</button>}
            </div>
        </Layout>
    );
};

export default withRouter(ActivateAccount);
