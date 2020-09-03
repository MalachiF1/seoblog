import Layout from '../../../components/Layout';
import Admin from '../../../components/auth/Admin';
import Category from '../../../components/crud/Category';
import Tag from '../../../components/crud/Tag';
import Link from 'next/link';
import Head from 'next/head';

const CategoryTag = () => {

    return (
        <React.Fragment>
            {<Head>
                <title>Manage Categories and Tags</title>
            </Head>}
            <Layout>
                <Admin>
                    <div className='container-fluid'>
                    <div className='row'>
                        <div className="col-md-12 pt-5 pb-5 pl-5">
                            <h2>Manage Categories and Tags</h2>
                        </div>
                        <div className='col-md-6 pl-5'>
                            <Category />
                        </div>
                        <div className='col-md-6 pl-5'>
                            <Tag />
                        </div>
                    </div>
                </div>
                </Admin>
            </Layout>
        </React.Fragment>
    );
};


export default CategoryTag;