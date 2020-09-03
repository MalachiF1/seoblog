import { useState } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import NProgress from 'nprogress';
import { APP_NAME } from '../config';
import { signout, isAuth } from '../actions/auth';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';
//import '.././node_modules/nprogress/nprogress.css';
//import '../public/static/css/styles.css'; //
import Search from './blog/Search';

Router.onRouteChangeStart = url => NProgress.start();
Router.onRouteChangeComplete = url => NProgress.done();
Router.onRouteChangeError = url => NProgress.done();

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
      <React.Fragment>
        <Navbar color="light" light expand="md" fixed='top'>
          <Link href='/'>
              <NavLink style={{ cursor: 'pointer' }} className='font-weight-bold'>{APP_NAME}</NavLink>
          </Link>
          <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
              <Nav className="ml-auto" navbar>

              
                <React.Fragment>
                  <NavItem>
                    <Link href='/blogs'>
                      <NavLink className='ml-1 mr-1' style={{ cursor: 'pointer' }}>Blogs</NavLink>
                    </Link> 
                  </NavItem>

                  <NavItem>
                    <Link href='/contact'>
                      <NavLink className='ml-1 mr-1' style={{ cursor: 'pointer' }}>Contact</NavLink>
                    </Link> 
                  </NavItem>
                </React.Fragment>
                

                {!isAuth() && (
                  <React.Fragment>
                    <NavItem>
                      <Link href='/signin'>
                        <NavLink className='ml-1 mr-1' style={{ cursor: 'pointer' }}>Signin</NavLink>
                      </Link> 
                    </NavItem>
                    <NavItem>
                      <Link href='/signup'>
                        <NavLink className='ml-1 mr-1' style={{ cursor: 'pointer' }}>Signup</NavLink>
                      </Link> 
                    </NavItem>
                  </React.Fragment>
                )}

                {isAuth() && (
                  <NavItem>
                    <Link href = {`/profile/${isAuth().username}`}>
                      <NavLink className='ml-1 mr-1' style={{ cursor: 'pointer' }}>
                        {`${isAuth().name}'s Profile`}
                      </NavLink>
                    </Link>
                  </NavItem>
                )}

                {isAuth() && isAuth().role === 0 && (
                  <NavItem>
                    <Link href = '/user'>
                      <NavLink className='ml-1 mr-1' style={{ cursor: 'pointer' }}>
                        {`${isAuth().name}'s Dashboard`}
                      </NavLink>
                    </Link>
                  </NavItem>
                )}

                {isAuth() && isAuth().role === 1 && (
                  <NavItem>
                    <Link href = '/admin'>
                      <NavLink className='ml-1 mr-1' style={{ cursor: 'pointer' }}>
                        {`${isAuth().name}'s Dashboard`}
                      </NavLink>
                    </Link>
                  </NavItem>
                )}

                {isAuth() && (
                  <NavItem>
                    <NavLink className='ml-1 mr-1' style={{ cursor: 'pointer' }} onClick={() => signout(() => Router.replace(`/signin`))}>
                      Signout
                    </NavLink>
                  </NavItem>
                )}

                {isAuth() && isAuth().role === 0 && (
                  <NavItem>
                    <a href='/user/crud/blog' className='btn btn-primary text-light ml-2 mr-2' style={{ cursor: 'pointer' }}>
                      Write a Blog
                    </a>
                  </NavItem>
                )}

                {isAuth() && isAuth().role === 1 && (
                  <NavItem>
                    <a href='/admin/crud/blog' className='btn btn-primary text-light ml-2 mr-2' style={{ cursor: 'pointer' }}>
                      Write a Blog
                    </a>
                  </NavItem>
                )}
                
              </Nav>
            </Collapse>
          </Navbar>
          <Search />
        </React.Fragment>
      );
};

export default Header;
