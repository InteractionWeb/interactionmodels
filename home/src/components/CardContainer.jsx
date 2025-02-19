import React from 'react';
import styled from 'styled-components';
import Card from './Card';

const CardContainer = () => {
  return (
    <StyledContainer>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  padding: 40px;
  max-width: 1600px;
  margin: 0 auto;
`;

export default CardContainer;
