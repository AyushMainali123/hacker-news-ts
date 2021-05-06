import colors from 'src/styles/colors';
import styled from 'styled-components'

const returnButtonBackgroundColor = (selected:  boolean) => {
    if (selected) {
        return colors.primary
    }
    return colors.grey;
}

const StyledButton = styled.button<{variant: "pill" | "standard" | "default", selected: true | false}>`
    font-weight: 700;
    background: ${props => returnButtonBackgroundColor(props.selected)};
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
    onClick?: (event?: React.MouseEvent<HTMLButtonElement>, ...rest: any[]) => void;
    variant?: "pill" | "standard" | "default",
    selected?: true | false,
    rest?: any[]
}

const Button = ({children, className, onClick, variant="standard", selected=true, ...rest}: ButtonProps) => {
    return (
        <StyledButton className = {className} onClick = {onClick} variant={variant} selected={selected} {...rest}>
            {children}
        </StyledButton>
    )
}

export default Button
