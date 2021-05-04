import React from 'react'
import styled from "styled-components";

const StyledSectionWrapper = styled.div`
  padding: 16px 0px;
`;

interface SectionProps {
    children: React.ReactNode,
    className?: string;
}

const SectionWrapper = ({children, className}: SectionProps) => {
    return (
      <StyledSectionWrapper className={className}>
        {children}
      </StyledSectionWrapper>
    );
}

export default SectionWrapper
