import colors from 'src/styles/colors'
import styled from 'styled-components'
import SectionWrapper from '../../containers/SectionWrapper/index'
import Button from '../Button'
import { useState, useEffect } from 'react';


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

    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<null | string>(null);
    const [itemsArray, setItemsArray] = useState([]);

    return (
        <_MainContainerWrapper>

            {/* Top Section */}
            <SectionWrapper>
                This Is A Top Section
            </SectionWrapper>


            {/* Mid Section */}
            <SectionWrapper>
                This Is A Mid Section
            </SectionWrapper>

            {/* Bottom Section */}
            <SectionWrapper>
                <_LoadMoreButton>
                    Load More
                </_LoadMoreButton>
            </SectionWrapper>
        </_MainContainerWrapper>
    )
}

export default MainContainer
