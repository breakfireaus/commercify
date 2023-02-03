import { Sidebar, Menu, MenuItem, useProSidebar } from 'react-pro-sidebar'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import { logout } from '../actions/userActions'
import { link } from 'react-router-dom'
import shoppingimage from '../images/shopping-cart.png'

function Layout() {
  const dispatch = useDispatch()
  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const logoutHandler = () => {
    dispatch(logout())
  }
  return (
    <div style={{ display: 'flex', height: '100%' }}>
      <Sidebar>
        <Menu>
          <LinkContainer to='/' className='m-1'>
            <Navbar.Brand className='text-black'>
              <h2>Commercify</h2>
            </Navbar.Brand>
          </LinkContainer>
          <Nav className='ms-auto'>
            <MenuItem className='text-black'>
              {' '}
              <LinkContainer to='/cart'>
                <Nav.Link>
                  <span className='fas fa-shopping-cart text-black text-black'>
                    Cart
                  </span>
                </Nav.Link>
              </LinkContainer>
            </MenuItem>
            <NavDropdown.Item className='text-black'>
              {userInfo ? (
                <NavDropdown title={userInfo.name} id='username'>
                  <LinkContainer to='/profile'>
                    <NavDropdown.Item className='text-black'>
                      profile
                    </NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Item
                    className='text-black'
                    onClick={logoutHandler}
                  >
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <LinkContainer to='/login'>
                  <Nav.Link className='text-black ml-1'>
                    <i className='fas fa-user text-black'></i>
                    Sign In
                  </Nav.Link>
                </LinkContainer>
              )}
            </NavDropdown.Item>
          </Nav>
        </Menu>
      </Sidebar>
    </div>
  )
}

export default Layout
