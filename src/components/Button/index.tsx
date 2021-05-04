import colors from 'src/styles/colors';
import styled from 'styled-components'


const StyledButton = styled.button<{variant: "pill" | "standard" | "default"}>`
    font-weight: 700;
    background: ${colors.primary};
    outline: none;
    border: none;
    border-radius: 12px;
    font-size: 16px;
    cursor: pointer;
    ${
    props => {
        switch (props.variant) {
            case "pill":
                return `padding: 4px 12px`;
            case "standard":
                return `padding: 13px 100px`;
            default:
                return `padding: 0px`;
            }
        }
    }

`;

interface ButtonProps {
    children: React.ReactNode,
    className?: string,
    onClick?: () => void;
    variant?: "pill" | "standard" | "default"
}

const Button = ({children, className, onClick, variant="standard"}: ButtonProps) => {
    return (
        <StyledButton className = {className} onClick = {onClick} variant={variant}>
            {children}
        </StyledButton>
    )
}

export default Button
