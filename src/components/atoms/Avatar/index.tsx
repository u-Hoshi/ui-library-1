import { Avatar, AvatarProps } from '@mui/material';
import React from 'react';

interface Props extends AvatarProps {
  onClick: React.MouseEventHandler<HTMLDivElement>;
}

const CustomAvatar = (props: Props) => (
  <Avatar
    onClick={props.onClick}
    sx={props.sx}
    src={props.src}
    alt={props.src}
  />
);
export default CustomAvatar;
