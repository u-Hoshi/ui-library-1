import { Typography, TypographyProps } from '@mui/material';

interface Props extends TypographyProps {
  text: string;
}

const CustomTypography = (props: Props) => (
  <Typography
    color={props.color}
    align={props.align}
    variant={props.variant}
    sx={props.sx}
    fontSize={props.fontSize}
  >
    {props.text}
  </Typography>
);

export default CustomTypography;
