import { SxProps, Theme } from '@mui/material';
import Badge, { BadgeProps } from '@mui/material/Badge';
import { styled } from '@mui/material/styles';

export const EditProfileBoxStyle = {
  width: 864,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '40px 100px',
  backgroundColor: '#FFFFFF',
  borderRadius: '5px',
  boxShadow: '0px 0px 10px 0px rgba(191, 191, 191, 0.25)',
};

export const AvatarInsideBoxStyle = {
  width: 536,
  height: 240,
};

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
};

export const StyledBadge = styled(Badge)<BadgeProps>`
  & .MuiBadge-badge {
    right: 15px;
    top: 15px;
  }
`;

export const sxTypographyBold: SxProps<Theme> = {
  fontWeight: 'bold',
  color: 'common.black',
  variant: 'body1',
  align: 'inherit',
};

export const sxIdTypography: SxProps<Theme> = {
  color: 'warning.main',
  variant: 'body1',
  align: 'inherit',
};

export const FormOutsideBoxStyle = {
  width: 664,
  paddingTop: '32px',
};

export const FormPartsBoxStyle = {
  width: 664,
  paddingBottom: '16px',
};

export const UserIdTypographyBoxStyle = {
  width: 664,
  height: 42,
  display: 'flex',
  alignItems: 'center',
  ml: 2,
  marginTop: '6px',
};

export const TextareaStyle = {
  width: '664px',
  marginTop: '6px',
  backgroundColor: 'info.main',
  borderRadius: '5px',
  '& .MuiOutlinedInput-notchedOutline': {
    border: 'none',
  },
  '& .MuiInputBase-input': {
    '&::placeholder': {
      color: 'warning.main',
    },
  },
};

export const ButtonBoxStyle = {
  display: 'flex',
  justifyContent: 'flex-end',
  marginTop: '32px',
  gap: '40px',
};
