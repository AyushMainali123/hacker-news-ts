import colors from 'src/styles/colors'
import styled from 'styled-components'
import SectionWrapper from '../../containers/SectionWrapper/index'

const _MainContainerWrapper = styled.div`
    background: ${colors.grey};
    padding-left: 15px;
    padding-right: 15px;
`

const MainContainer = () => {
    return (
        <_MainContainerWrapper>
            <SectionWrapper>
                This Is A Top Section
            </SectionWrapper>
            <SectionWrapper>
                This Is A Mid Section
            </SectionWrapper>
            <SectionWrapper>
                This Is A BOttom Section
            </SectionWrapper>
        </_MainContainerWrapper>
    )
}

export default MainContainer
