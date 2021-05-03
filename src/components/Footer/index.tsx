import React from 'react'
import colors from 'src/styles/colors'
import styled from 'styled-components'

const _FooterWrapper = styled.footer`
    min-height: 100px;
    display: grid;
    place-items: center;
    background-color: ${colors.primary};
`

const Footer = () => {
    const logoSrc = `${process.env.PUBLIC_URL}/assets/images/logo-footer.png`
    return (
        <_FooterWrapper>
            <img src={ logoSrc }/>
        </_FooterWrapper>
    )
}

export default Footer
