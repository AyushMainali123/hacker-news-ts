import colors from 'src/styles/colors'
import styled from 'styled-components'

const FooterWrapper = styled.footer`
    min-height: 100px;
    display: grid;
    place-items: center;
    background-color: ${colors.primary};
`

const Footer = () => {
    const logoSrc = `${process.env.PUBLIC_URL}/assets/images/logo-footer.png`
    return (
        <FooterWrapper>
            <img src={ logoSrc } alt="Footer Logo"/>
        </FooterWrapper>
    )
}

export default Footer
