import styled from 'styled-components'


interface WrapperProps {
    children: React.ReactNode
}

const _Wrapper = styled.div`
    max-width: 360px;
    margin: auto;
`

const PageWrapper = ({children}: WrapperProps) => {
    return (
        <_Wrapper className = "wrapper">
            {children}
        </_Wrapper>
    )
}

export default PageWrapper
