import React from 'react';

import { RangeOfTemp, SunWindWarper } from './style';

interface I_SunAndWindCardProps {
  image?: string;
  title?: string;
  value?: any;
}

const SunAndWindCard: React.FC<I_SunAndWindCardProps> = React.memo((props) => {
  const { image, title, value } = props;
  return (
    <>
      <SunWindWarper>
        <div>
          <img src={image} alt="leaf" />
        </div>
        <div>{title}</div>
        <RangeOfTemp>{`${value}`}</RangeOfTemp>
      </SunWindWarper>
    </>
  );
});

export default SunAndWindCard;
