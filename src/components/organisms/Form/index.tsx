import { Grid } from '@mui/material';
import React from 'react';

import { Avatar, Box } from '@/src/components/atoms';

import { Check } from '../../molecules';

import {
  AvatarBoxStyle,
  AvatarInsideBoxStyle,
  AvatarStyle,
  StyledBadge,
  sxGridStyle,
} from './index.style';

const CustomForm = () => {
  const [activeAvatarIndex, setActiveAvatarIndex] = React.useState(0);

  const AvatarImages = [
    {
      src: '/1221.png',
      alt: 'リンゴ',
    },
    {
      src: '/2412.png',
      alt: 'バナナ',
    },
    {
      src: '/2415.png',
      alt: 'ブルーベリー',
    },
  ];

  const handleAvatarClick = (index: number) => {
    setActiveAvatarIndex(index);
  };

  return (
    <Box sx={AvatarInsideBoxStyle}>
      <Box sx={AvatarBoxStyle}>
        <Avatar
          src={AvatarImages[activeAvatarIndex].src}
          onClick={() => {}}
          sx={AvatarStyle}
          alt="selected-avatar"
        />
      </Box>
      <Grid
        container
        sx={sxGridStyle}
      >
        {AvatarImages.map((AvatarImage, index) => (
          <Grid
            item
            key={`avatar-${AvatarImage.src}`}
          >
            {index === activeAvatarIndex ? (
              <StyledBadge badgeContent={<Check onClick={() => {}} />}>
                <Avatar
                  src={AvatarImage.src}
                  onClick={() => handleAvatarClick(index)}
                  sx={AvatarStyle}
                  alt={AvatarImage.alt}
                />
              </StyledBadge>
            ) : (
              <Avatar
                src={AvatarImage.src}
                onClick={() => handleAvatarClick(index)}
                sx={AvatarStyle}
                alt={AvatarImage.alt}
              />
            )}
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CustomForm;
