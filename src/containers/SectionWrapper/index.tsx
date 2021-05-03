import React from 'react'
import styled from "styled-components";

const _SectionWrapper = styled.div`
  padding: 16px 0px;
`;

interface SectionProps {
    children: React.ReactNode
}

const SectionWrapper = ({children}: SectionProps) => {
    return (
        <_SectionWrapper>
            {children}
        </_SectionWrapper>
    )
}

export default SectionWrapper
