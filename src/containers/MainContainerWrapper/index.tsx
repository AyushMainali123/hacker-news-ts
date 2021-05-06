import colors from 'src/styles/colors';
import styled from 'styled-components'

interface IProps {
    children: React.ReactNode,
    className?: string
}


const Wrapper = styled.div`
  background: ${colors.white};
  padding-left: 15px;
  padding-right: 15px;
  box-shadow: inset 0px 3px 8px rgba(0, 0, 0, 0.08);
  height: calc(100vh - 150px);
  overflow-y: auto;
  overflow-x: hidden;
  word-wrap: break-word;
`;

const MainContentWrapper = ({children, className}: IProps) => {
    return (
        <Wrapper className = {className}>
            {children}
        </Wrapper>
    )
}

export default MainContentWrapper
