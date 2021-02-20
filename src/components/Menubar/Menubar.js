import React, { useState } from 'react'
import styled from 'styled-components'

const Menubar = () => {
    const [open, setOpen] = useState(false)
    const toggleOpen = () => setOpen(!open)
    const MenuBar = styled.div`
        position: absolute;
        top: 5%;
        left: 2rem;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        width: 2rem;
        height: 2rem;
        background: transparent;
        border: none;
        cursor: pointer;
        padding: 0;
        z-index: 10;
        &:focus {
            outline: none;
          }
    `
    const Line = styled.div`
        width: 2rem;
        height: 0.25rem;
        background: ${open ? '#0D0C1D' : '#EFFFFA'};
        border-radius: 10px;
        transition: all 3s;
        position: relative;
        transform-origin: 1px;
    `
    const Bar1 = styled(Line)`
        transform: ${open ? 'rotate(45deg)' : 'rotate(0)'}
    `
    const Bar2 = styled(Line)`
        opacity: ${open ? '0' : '1'}
    `
    const Bar3 = styled(Line)`
        transform: ${open ? 'rotate(-45deg)' : 'rotate(0)'}
    `

    return (
        <div>
            this is a Menubar
            <MenuBar onClick={toggleOpen}>
                <Bar1 />
                <Bar2 />
                <Bar3 />
            </MenuBar>
        </div>
    )
}

export default Menubar