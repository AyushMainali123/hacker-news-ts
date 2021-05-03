import colors from 'src/styles/colors';
import styled from 'styled-components'


const _Button = styled.button`
    font-weight: 700;
    background: ${colors.primary};
    outline: none;
    border: none;
    border-radius: 12px;
    font-size: 16px;
`;

interface ButtonProps {
    children: React.ReactNode,
    className?: string
}

const Button = ({children, className}: ButtonProps,) => {
    return (
        <_Button className = {className}>
            {children}
        </_Button>
    )
}

export default Button
