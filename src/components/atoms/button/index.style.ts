import { Theme } from '@mui/material/styles';
import { SxProps } from '@mui/system';

interface StyleProps {
  theme: Theme;
  color: 'warning' | 'primary' | 'secondary';
}

export const buttonStyle = ({ theme, color }: StyleProps): SxProps<Theme> => ({
  backgroundColor: theme.palette[color].main,
  padding: '16px 24px',
  borderRadius: 30,
  color: theme.palette.common.white,
  boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
  '&:hover': {
    backgroundColor: theme.palette[color].main,
  },
});
