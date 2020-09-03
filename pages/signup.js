import Layout from '../components/Layout';
import SignupComponent from '../components/auth/SignupComponent';
import Link from 'next/link';
import Head from 'next/head';


const Signup = () => {

    return (
        <React.Fragment>
            {<Head>
                <title>SEOBLOG | Signup</title>
            </Head>}
            <Layout>
                <h2 className='text-center pt-4 pb-4'>Signup</h2>
                <div className='row'>
                    <div className='col-md-6 offset-md-3'>
                        <SignupComponent />
                    </div>
                </div>
            </Layout>
        </React.Fragment>
    );
};


export default Signup;