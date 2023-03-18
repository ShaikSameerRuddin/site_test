import { AxiosResponse } from 'axios';
import React from 'react';
import { ThemeProps, withTheme } from 'styled-components';
import { API_KEY, citiesApiUrl, options } from '../../../logic/congif';
import { services } from '../../../logic/services/services';
import { CustomLoader } from '../../../shared/components/customLoader/CustomLoader';
import { CustomSelect } from '../../../shared/components/select/CustomSelect';
import { customRound } from '../../../shared/helpers/utils';
import useDebounce from '../../../shared/hooks/useDebounce';
import { leaf, time } from '../../../shared/icons';
import { FlexCol } from '../../../style/styled';
import { PresentTempCard } from '../components/cards/PresentTempCard';
import SunAndWindCard from '../components/cards/SunAndWindCard';
import { WeatherForecastCard } from '../components/cards/WeatherForecastCard';

import {
  BackgroundImageWarper,
  EmptyStateText,
  LeftFlexContainer,
  LeftGridContainer,
  SearchInputContainer,
  TempGridContainer,
} from './style';

interface I_Options {
  method: string;
  url: string;
  headers: {
    'X-RapidAPI-Key': string;
    'X-RapidAPI-Host': string;
  };
}

export const Home: React.FC = withTheme((props: ThemeProps<any>) => {
  const [loading, setLoading] = React.useState<boolean>(false);
  const [search, setSearch] = React.useState<string>('');
  const [searchedCities, setSearchedCities] = React.useState<[]>([]);
  const [citiesOptions, setCitiesOptions] = React.useState<
    Array<{ value: string; label: string }>
  >([]);
  const [currentData, setCurrentData] = React.useState<{} | any>();
  const [forecastData, setForecastData] = React.useState<{}>();
  console.log(currentData, 'current', forecastData, 'forecast');

  const debounceValue = useDebounce<string>(search, 500);

  const onInputChange = (value: string): void => {
    setSearch(value);
  };

  const handleChange = async (value: { value: string; label: string }) => {
    setLoading(true);
    try {
      const { value: selectedValue, label: selectedLabel } = value;
      const [latitude, longitude] = selectedValue.split(' ');
      const [city, countryCode] = selectedLabel.split(',');

      const generateQuery = (type: string) =>
        `/${type}?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;
      const currentWeatherQuery = generateQuery('weather');
      const forecastWeatherQuery = generateQuery('forecast');

      const [currentWeatherResponse, forecastWeatherResponse] =
        await Promise.all([
          services.getWetherData(currentWeatherQuery),
          services.getForecastData(forecastWeatherQuery),
        ]);
      setCurrentData({
        city: city,
        ...currentWeatherResponse?.data,
      });
      setForecastData(forecastWeatherResponse?.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  //Define a function with name "getAllCities" which is asynchronous
  const getAllCities = async (
    url: string,
    options: I_Options,
    search: string
  ) => {
    //Try block to handle potential errors
    try {
      const response = await fetch(
        `${url}cities?minPopulation=1000000&namePrefix=${search}`,
        options
      );
      const data = await response.json();
      if (data) {
        const optionsArray = data.map((elm: any) => ({
          value: `${elm?.latitude} ${elm?.longitude}`,
          label: `${elm?.city}, ${elm?.countryCode}`,
        }));
        setSearchedCities(data);
        setCitiesOptions(optionsArray || []);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const currentHumidity = currentData ? currentData.main.humidity : 'N/A';
  const tempMaxTo = currentData ? currentData.main.temp_max : 'N/A';

  React.useEffect(() => {
    getAllCities(citiesApiUrl, options, debounceValue);
  }, [debounceValue]);

  return (
    <BackgroundImageWarper>
      <SearchInputContainer>
        <CustomSelect
          onInputChange={onInputChange}
          selectOptions={citiesOptions}
          isSearchable={true}
          onChange={handleChange}
          placeholder="Search The Cities"
          value={citiesOptions}
        />
      </SearchInputContainer>
      {loading ? (
        <FlexCol>
          <CustomLoader />
        </FlexCol>
      ) : (
        <>
          <TempGridContainer>
            {currentData && (
              <div>
                <PresentTempCard data={currentData} />
              </div>
            )}
            <LeftFlexContainer>
              {currentData && (
                <LeftGridContainer>
                  <SunAndWindCard
                    image={leaf}
                    title={`Current Humidity is`}
                    value={`${currentHumidity} %`}
                  />
                  <SunAndWindCard
                    image={time}
                    title={`Maximum Tempera..`}
                    value={`${customRound(tempMaxTo)} c`}
                  />
                </LeftGridContainer>
              )}
              {forecastData && <WeatherForecastCard data={forecastData} />}
            </LeftFlexContainer>
          </TempGridContainer>
        </>
      )}
      {currentData ? null : (
        <EmptyStateText>
          Search the cites to get the weather and there forecast
        </EmptyStateText>
      )}
    </BackgroundImageWarper>
  );
});
