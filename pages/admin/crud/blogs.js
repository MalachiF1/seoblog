import Layout from '../../../components/Layout';
import Admin from '../../../components/auth/Admin';
import BlogRead from '../../../components/crud/BlogRead';
import Link from 'next/link';
import Head from 'next/head';

const Blog = () => {

    return (
        <React.Fragment>
            {<Head>
                <title>
                    Manage Blogs
                </title>
            </Head>}
            <Layout>
                <Admin>
                    <div className='container'>
                        <div className='row'>
                            <div className="col-md-12 pt-5 pb-5 pl-5">
                                <h2>Manage Blogs</h2>
                            </div>
                            <div className='col-md-12 pl-5'>
                                <BlogRead />
                            </div>
                        </div>
                    </div>
                </Admin>
            </Layout>
        </React.Fragment>
    );
};


export default Blog;