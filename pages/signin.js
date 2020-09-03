import Layout from '../components/Layout';
import { withRouter } from 'next/router';
import SigninComponent from '../components/auth/SigninComponent';
import Head from 'next/head';

const Signin = ({ router }) => {
    const showRedirectMessage = () => {
        if(router.query.message) {
            return <div className='alert alert-danger'>{router.query.message}</div>;
        } else {
            return;
        }
    };

    return (
        <React.Fragment>
            {<Head>
                <title>SEOBLOG | Signin</title>
            </Head>}
            <Layout>
                <h2 className='text-center pt-4 pb-4'>Signin</h2>

                <div className='row'>
                    <div className='col-md-6 offset-md-3'>
                        {showRedirectMessage()}
                    </div>
                </div>
                
                <div className='row'>
                    <div className='col-md-6 offset-md-3'>
                        <SigninComponent />
                    </div>
                </div>
            </Layout>
        </React.Fragment>
    );
};


export default withRouter(Signin);