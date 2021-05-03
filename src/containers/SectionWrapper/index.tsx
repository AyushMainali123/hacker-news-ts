import React from 'react'
import styled from "styled-components";

const _SectionWrapper = styled.div`
  padding: 16px 0px;
`;

interface SectionProps {
    children: React.ReactNode,
    className?: string;
}

const SectionWrapper = ({children, className}: SectionProps) => {
    return (
        <_SectionWrapper className = {className}>
            {children}
        </_SectionWrapper>
    )
}

export default SectionWrapper
