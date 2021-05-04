import styled from 'styled-components'


interface WrapperProps {
    children: React.ReactNode,
    className?: string;
}

const Wrapper = styled.div`
  max-width: 360px;
  margin: auto;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.2);
`;

const PageWrapper = ({children, className}: WrapperProps) => {
    return (
        <Wrapper className = {`wrapper ${className}`}>
            {children}
        </Wrapper>
    )
}

export default PageWrapper
