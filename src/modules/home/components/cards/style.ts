import styled, { ThemeProps } from 'styled-components';
import { FlexCol, FlexRow } from '../../../../style/styled';
import { colors, fontSizes, screenSizes, Theme } from '../../../../style/theme';

export const CommonStyleCard = styled.div`
  max-width: 100%;
`;

export const PresentTempWrapper = styled(FlexCol)`
  background-color: ${(props: ThemeProps<Theme>) =>
    props.theme.cardBockGroundColor};
  backdrop-filter: blur(10px);
  border-radius: 10px;
`;

export const PlaceNameDiv = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  align-items: flex-end;
  padding: 20px 0 70px 0;
  margin-right: 30px;
  color: ${(props: ThemeProps<Theme>) => props.theme.cardText};
  font-weight: 700;
  font-size: ${fontSizes.S};
`;

export const CurrentTemp = styled.span`
  font-weight: 700;
  font-size: 88px;
  color: ${colors.white};
  sup {
    padding: 0 5px;
    font-size: ${fontSizes.M};
    color: ${(props: ThemeProps<Theme>) => props.theme.cardText} !important;
  }
`;

export const RangeOfTemp = styled.span`
  font-weight: 700;
  font-size: ${fontSizes.S};
  color: ${colors.white};
  span {
    color: ${(props: ThemeProps<Theme>) => props.theme.cardText} !important;
  }
  sup {
    font-size: ${fontSizes.XS};
    color: ${(props: ThemeProps<Theme>) => props.theme.cardText} !important;
  }
`;

export const BottomDiv = styled(FlexRow)`
  width: 100%;
  justify-content: space-around;
  padding: 115px 0 20px 0;
  @media (max-width: ${screenSizes.L}px) {
    padding: 80px 0 10px 0;
  }
`;

export const BottomCards = styled(FlexRow)`
  background: rgba(102, 96, 200, 0.6);
  border-radius: 6px;
  padding: 10px 15px;
  img {
    opacity: 0.6;
  }
`;

export const NameDiv = styled.div`
  width: 100%;
  justify-content: flex-start;
`;

export const ValueDiv = styled.div`
  width: 100%;
  justify-content: flex-start;
  span {
    font-size: ${fontSizes.S};
    color: ${colors.white};
  }
`;

export const SunWindWarper = styled(PresentTempWrapper)`
  background-color: rgb(109, 103, 208);
  padding: 10px 30px;
  gap: 10px;
`;

export const WeatherForecastWarper = styled(PresentTempWrapper)`
  background-color: rgb(109, 103, 208);
  padding:20px 10px;
`;

export const DayTemp = styled(FlexCol)``;
