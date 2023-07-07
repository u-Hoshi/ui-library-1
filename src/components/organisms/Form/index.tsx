import { Grid } from '@mui/material';
import React from 'react';

import { Avatar, Box } from '@/src/components/atoms';

import { Check } from '../../molecules';

import {
  AvatarBoxStyle,
  AvatarStyle,
  AvaterInsideBoxStyle,
  StyledBadge,
  sxGridStyle,
} from './index.style';

const CustomForm = () => {
  const [activeAvatarIndex, setActiveAvatarIndex] = React.useState(0);

  const AvatarImageStyles = ['/1221.png', '/2412.png', '/2415.png'];

  const handleAvatarClick = (index: number) => {
    setActiveAvatarIndex(index);
  };

  return (
    <Box sx={AvaterInsideBoxStyle}>
      <Box sx={AvatarBoxStyle}>
        <Avatar
          src={AvatarImageStyles[activeAvatarIndex]}
          onClick={() => {}}
          sx={AvatarStyle}
        />
      </Box>
      <Grid
        container
        sx={sxGridStyle}
      >
        {AvatarImageStyles.map((src, index) => (
          <Grid
            item
            key={`avatar-${src}`}
          >
            {index === activeAvatarIndex ? (
              <StyledBadge badgeContent={<Check onClick={() => {}} />}>
                <Avatar
                  src={src}
                  onClick={() => handleAvatarClick(index)}
                  sx={AvatarStyle}
                />
              </StyledBadge>
            ) : (
              <Avatar
                src={src}
                onClick={() => handleAvatarClick(index)}
                sx={AvatarStyle}
              />
            )}
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CustomForm;
