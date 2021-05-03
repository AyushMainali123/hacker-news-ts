import React from 'react'
import colors from 'src/styles/colors'
import styled from 'styled-components'

const _NavWrapper = styled.nav`
    background: ${colors.white};
    min-height: 50px;
    display: grid;
    place-items: center;
`


const Navbar = () => {
    const logoSrc = `${process.env.PUBLIC_URL}/assets/images/logo.png`;
    return (
        <_NavWrapper>
            <img src={ logoSrc }/>
        </_NavWrapper>
    )
}

export default Navbar
