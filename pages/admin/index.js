import Layout from '../../components/Layout';
import Admin from '../../components/auth/Admin';
import Link from 'next/link';
import Head from 'next/head';
import { isAuth } from '../../actions/auth';

const AdminIndex = () => {

    return (
        <React.Fragment>
            {<Head>
                <title>
                    SEOBLOG | Your Dashboard
                </title>
            </Head>}
            <Layout>
                <Admin>
                    <div className='container-fluid'>
                        <div className='row'>
                            <div className="col-md-12 pt-5 pb-5 pl-5 text-center">
                                <h2>Admin Dashboard</h2>
                            </div>
                            <div className='col-md-12 pl-4 text-center'>
                                <ul className="list-group">
                                    <li className="list-group-item mb-2">
                                        <Link href='/admin/crud/category-tag'>
                                            <a>Create Category</a>
                                        </Link>
                                    </li>

                                    <li className="list-group-item mb-2">
                                        <Link href='/admin/crud/category-tag'>
                                            <a>Create Tag</a>
                                        </Link>
                                    </li>

                                    <li className="list-group-item mb-2">
                                        <a href='/admin/crud/blog'>Create Blog</a>
                                    </li>

                                    <li className="list-group-item mb-2">
                                        <Link href='/admin/crud/blogs'>
                                            <a>Update/Delete Blogs</a>
                                        </Link>
                                    </li>

                                    <li className="list-group-item mb-2">
                                        <Link href='/user/update'>
                                            <a>Update Profile</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </Admin>
            </Layout>
        </React.Fragment>
    );
};


export default AdminIndex;