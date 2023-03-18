import React from 'react';
import { customRound } from '../../../../shared/helpers/utils';
import { clouds, rainDrops, wind } from '../../../../shared/icons';
import { FlexCol, FlexRow } from '../../../../style/styled';
import {
  BottomCards,
  BottomDiv,
  CurrentTemp,
  NameDiv,
  PlaceNameDiv,
  PresentTempWrapper,
  RangeOfTemp,
  ValueDiv,
} from './style';

interface I_PresentTempData {
  data: {} | undefined | any;
}

export const PresentTempCard: React.FC<I_PresentTempData> = React.memo(
  (props) => {
    const { data } = props;
    console.log(data);

    return (
      <>
        <PresentTempWrapper>
          <PlaceNameDiv>{`${data?.city}`}</PlaceNameDiv>
          <CurrentTemp>
            {`${customRound(data?.main?.temp)}`}
            <sup>°C</sup>
          </CurrentTemp>
          <RangeOfTemp>
            {`${customRound(data?.main?.temp_max)}`} <sup>°</sup>
            <span>{`${customRound(data?.main?.temp_min)}`}</span>
            <sup>°</sup>
          </RangeOfTemp>
          <BottomDiv>
            <BottomCards>
              <FlexRow gap="10px">
                <div>
                  <img src={wind} alt="wind" />
                </div>
                <div>
                  <FlexCol>
                    <NameDiv>Wind</NameDiv>
                    <ValueDiv>
                      <span>{`${customRound(data?.wind?.speed)}`}</span>km/h
                    </ValueDiv>
                  </FlexCol>
                </div>
              </FlexRow>
            </BottomCards>
            <BottomCards>
              <FlexRow gap="10px">
                <div>
                  <img src={rainDrops} alt="wind" />
                </div>
                <div>
                  <FlexCol>
                    <NameDiv>Rain</NameDiv>
                    <ValueDiv>
                      <span>{`${customRound(data?.clouds?.all)}`}</span> %
                    </ValueDiv>
                  </FlexCol>
                </div>
              </FlexRow>
            </BottomCards>
            <BottomCards>
              <FlexRow gap="10px">
                <div>
                  <img src={clouds} alt="wind" />
                </div>
                <div>
                  <FlexCol>
                    <NameDiv>Clouds</NameDiv>
                    <ValueDiv>
                      <span>{`${customRound(data?.clouds?.all)}`}</span> %
                    </ValueDiv>
                  </FlexCol>
                </div>
              </FlexRow>
            </BottomCards>
          </BottomDiv>
        </PresentTempWrapper>
      </>
    );
  }
);
