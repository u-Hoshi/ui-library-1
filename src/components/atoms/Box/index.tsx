import { Box, BoxProps } from '@mui/material';
import React from 'react';

interface Props extends BoxProps {
  children: React.ReactNode;
}

const CustomBox = (props: Props) => <Box sx={props.sx}>{props.children}</Box>;

export default CustomBox;
