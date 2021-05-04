import colors from 'src/styles/colors'
import styled from 'styled-components'

const NavWrapper = styled.nav`
    background: ${colors.white};
    min-height: 50px;
    display: grid;
    place-items: center;
`


const Navbar = () => {
    const logoSrc = `${process.env.PUBLIC_URL}/assets/images/logo.png`;
    return (
      <NavWrapper>
        <img src={logoSrc} alt="Header Logo" />
      </NavWrapper>
    );
}

export default Navbar
