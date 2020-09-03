import Layout from '../../components/Layout';
import Private from '../../components/auth/Private';
import Link from 'next/link';
import Head from 'next/head';

const UserIndex = () => {

    return (
        <React.Fragment>
            {<Head>
                <title>
                    SEOBLOG | Your Dashboard
                </title>
            </Head>}
            <Layout>
                <Private>
                    <div className='container-fluid'>
                        <div className='row'>
                            <div className="col-md-12 pt-5 pb-5 pl-5 text-center">
                                <h2>User Dashboard</h2>
                            </div>
                            <div className='col-md-12 pl-4 text-center'>
                                <ul className="list-group">

                                    <li className="list-group-item mb-2">
                                        <a href='/user/crud/blog'>Create Blog</a>
                                    </li>

                                    <li className="list-group-item mb-2">
                                        <Link href='/user/crud/blogs'>
                                            <a>Update/Delete Blogs</a>
                                        </Link>
                                    </li>

                                    <li className="list-group-item mb-2">
                                        <a href='/user/update'>Update Profile</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </Private>
            </Layout>
        </React.Fragment>
    );
};


export default UserIndex;