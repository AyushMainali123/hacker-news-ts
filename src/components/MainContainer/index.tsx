import colors from 'src/styles/colors'
import styled from 'styled-components'
import SectionWrapper from '../../containers/SectionWrapper/index'
import Button from '../Button'

const _MainContainerWrapper = styled.div`
    background: ${colors.grey};
    padding-left: 15px;
    padding-right: 15px;
`

const _LoadMoreButton = styled(Button)`
    display: block;
    width: 100%;
    padding-top: 13px;
    padding-bottom: 13px;
    cursor: pointer;
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
                <_LoadMoreButton>
                    Load More
                </_LoadMoreButton>
            </SectionWrapper>
        </_MainContainerWrapper>
    )
}

export default MainContainer
