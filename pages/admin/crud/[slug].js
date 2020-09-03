import Layout from '../../../components/Layout';
import Admin from '../../../components/auth/Admin';
import BlogUpdate from '../../../components/crud/BlogUpdate';
import Link from 'next/link';
import Head from 'next/head';

const Blog = () => {

    return (
        <React.Fragment>
            {<Head>
                <title>Update Your Blog</title>
            </Head>}
            <Layout>
                <Admin>
                    <div className='container-fluid'>
                        <div className='row'>
                            <div className="col-md-12 pt-5 pb-5 pl-5">
                                <h2>Update blog</h2>
                            </div>
                            <div className='col-md-12 pl-5'>
                                <BlogUpdate />
                            </div>
                        </div>
                    </div>
                </Admin>
            </Layout>
        </React.Fragment>
    );
};

export default Blog;