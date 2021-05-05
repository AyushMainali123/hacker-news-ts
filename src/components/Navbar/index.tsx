import colors from 'src/styles/colors'
import styled from 'styled-components'

const NavWrapper = styled.nav`
    background: ${colors.white};
    min-height: 50px;
    display: grid;
    place-items: center;
    box-shadow: 0px 3px 28px rgba(0, 0, 0, 0.08);
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
