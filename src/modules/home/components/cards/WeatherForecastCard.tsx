import React from 'react';
import { customRound } from '../../../../shared/helpers/utils';
import { day1, day2, day3, day4, sun } from '../../../../shared/icons';
import { FlexRow } from '../../../../style/styled';

import { DayTemp, RangeOfTemp, WeatherForecastWarper } from './style';

interface I_WeatherForecast {
  data: {} | undefined | any;
}

const Images: string[] = [day1, day2, day3, day1, day2, day2, day3];
const Days: string[] = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];

export const WeatherForecastCard: React.FC<I_WeatherForecast> = React.memo(
  (props) => {
    const { data } = props;

    const currentDayInWeak: number = new Date().getDay();
    const currentWeakDayToLast: string[] = Days.slice(
      currentDayInWeak,
      Days.length
    ).concat(Days.slice(0, currentDayInWeak));

    return (
      <WeatherForecastWarper>
        <FlexRow gap="30px">
          {data?.list.splice(0, 7).map((items: any, index: number) => {
            return (
              <>
                <DayTemp>
                  <div>{currentWeakDayToLast[index]}</div>
                  <div>
                    <img src={Images[index]} alt="monday" />
                  </div>
                  <div>
                    <RangeOfTemp>
                      {`${customRound(items.main.temp_max)}`}
                      <sup>°</sup>
                      <span>{`${customRound(items.main.temp_min)}`}</span>
                      <sup>°</sup>
                    </RangeOfTemp>
                  </div>
                </DayTemp>
              </>
            );
          })}
        </FlexRow>
      </WeatherForecastWarper>
    );
  }
);
