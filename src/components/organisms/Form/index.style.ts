import { SxProps, Theme } from '@mui/material';
import Badge, { BadgeProps } from '@mui/material/Badge';
import { styled } from '@mui/material/styles';

export const AvatarBoxStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: '32px',
};

export const AvatarStyle = {
  width: 104,
  height: 104,
  cursor: 'pointer',
};

export const sxGridStyle: SxProps<Theme> = {
  gap: '40px',
  justifyContent: 'center',
};

export const StyledBadge = styled(Badge)<BadgeProps>`
  & .MuiBadge-badge {
    right: 15px;
    top: 15px;
  }
`;
