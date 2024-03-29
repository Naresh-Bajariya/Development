import React, { Component } from 'react';





//import React, { useState } from 'react';
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBBtn,
    MDBDropdown,
    MDBDropdownToggle,
    MDBDropdownMenu,
    MDBDropdownItem,
    MDBCollapse,
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

//  export default function App() {
//      const [showBasic, setShowBasic] = useState(false);


//  } 


class Header extends React.Component {
    render() {
        return (
            <MDBNavbar expand='lg' light bgColor='light'>
                <MDBContainer fluid>
                    {/* <MDBNavbarBrand href='#'>Brand</MDBNavbarBrand> */}
                    <Link to="/" className='navbar-brand'>Brand</Link>

                    <MDBNavbarToggler
                        aria-controls='navbarSupportedContent'
                        aria-expanded='false'
                        aria-label='Toggle navigation'
                    //onClick={() => setShowBasic(!showBasic)}
                    >
                        {/* <MDBIcon icon='bars' fas /> */}
                    </MDBNavbarToggler>

                    <MDBCollapse navbar >
                        <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
                            {/* <MDBNavbarItem>
                                <MDBNavbarLink active aria-current='page' href='#'>
                                    Home
                                </MDBNavbarLink>
                            </MDBNavbarItem> */}

                            <Link to="/" className='nav-link'>Home</Link>
                            <MDBNavbarItem>
                                <MDBNavbarLink href='#'>Link</MDBNavbarLink>
                            </MDBNavbarItem>

                            <MDBNavbarItem>
                                <MDBDropdown>
                                    <MDBDropdownToggle tag='a' className='nav-link'>
                                        Dropdown
                                    </MDBDropdownToggle>
                                    <MDBDropdownMenu>
                                        <MDBDropdownItem link>Action</MDBDropdownItem>
                                        <MDBDropdownItem link>Another action</MDBDropdownItem>
                                        <MDBDropdownItem link>Something else here</MDBDropdownItem>
                                    </MDBDropdownMenu>
                                </MDBDropdown>
                            </MDBNavbarItem>

                            {/* <MDBNavbarItem>
                                <MDBNavbarLink disabled href='#' tabIndex={-1} aria-disabled='true'>
                                    Disabled
                                </MDBNavbarLink>
                            </MDBNavbarItem> */}

                            {/* ---------------- refresh thase so ancore tag ni jagyaye link no usekrvo ----------- */}

                            {/* <MDBNavbarLink disabled href='Example' tabIndex={-1} aria-disabled='true'>
                                Example
                            </MDBNavbarLink> */}
                            <MDBNavbarItem>
                                <Link to="example" className='nav-link'>Example</Link>
                            </MDBNavbarItem>
                            <MDBNavbarItem>
                                <Link className='nav-link' to="about">About us</Link>
                            </MDBNavbarItem>
                            <MDBNavbarItem>
                                <Link className='nav-link' to="contact">Contact us</Link>
                            </MDBNavbarItem>

                        </MDBNavbarNav>

                        <form className='d-flex input-group w-auto'>
                            <input type='search' className='form-control' placeholder='Type query' aria-label='Search' />
                            <MDBBtn color='primary'>Search</MDBBtn>
                        </form>
                    </MDBCollapse>
                </MDBContainer>
            </MDBNavbar>
        );
    }
}

export default Header;