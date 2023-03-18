import styled from 'styled-components';
import { backgroundImage } from '../../../shared/icons';
import { FlexCol } from '../../../style/styled';
import { colors, fontSizes, screenSizes } from '../../../style/theme';

export const BackgroundImageWarper = styled.div`
  width: 100%;
  height: 100vh;
  background: url(${backgroundImage}) no-repeat;
  background-size: cover;
  background-attachment: fixed;
`;

export const SearchInputContainer = styled(FlexCol)`
  width: 30%;
  margin: auto;
  padding: 20px 0 0 0;
  @media (max-width: ${screenSizes.L}px) {
    width: 60%;
  }
`;

export const TempGridContainer = styled.div`
  display: grid;
  max-width: 70%;
  margin: auto;
  grid-template-columns: 450px auto;
  gap: 40px;
  @media (max-width: ${screenSizes.XL}px) {
    grid-template-columns: auto;
  }
`;

export const LeftFlexContainer = styled(FlexCol)`
  gap: 20px;
`;

export const LeftGridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  gap: 40px;
  height: 200px;
`;

export const EmptyStateText = styled.h3`
  max-width: 100%;
  text-align: center;
  font-weight: 700;
  font-size: ${fontSizes.L};
  color: ${colors.white};
`;
