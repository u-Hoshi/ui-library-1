import { Grid, GridProps } from '@mui/material';
import React from 'react';

interface Props extends GridProps {
  children: React.ReactNode;
}

const CustomGrid = (props: Props) => <Grid {...props}>{props.children}</Grid>;

export default CustomGrid;
