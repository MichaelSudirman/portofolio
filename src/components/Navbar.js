import React from 'react'
import styled from 'styled-components'

import { Navbar as RBNav } from 'react-bootstrap'

import logoIcon from '../assets/icon.png'

const Container = styled.div`
position: fixed;
z-index: 10;
width: 100%;
top: 0;
left: 0;
height: 70px;
background-color: #1F2833;
`
const styledNav = styled(RBNav)`
`
const NavLink = styled.div`
font-size:22px;
padding: 10px; 
cursor: pointer;
`
const Navbar = () => {
    return (
        <Container >
            <RBNav>
                <RBNav.Brand href="#">
                    <img width={48} height={48} src={logoIcon} alt="Logo" />
                </RBNav.Brand>

                <RBNav.Collapse className="justify-content-end ">
                    <NavLink className='theme-light'>
                        Resume
                    </NavLink>
                    <NavLink className='theme-light'>
                        Blog
                    </NavLink>
                </RBNav.Collapse>
            </RBNav>
        </Container>
    )
}

export default Navbar