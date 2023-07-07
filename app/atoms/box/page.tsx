'use client';

import { useTheme } from '@mui/system';

import { Box } from '@/src/components/atoms';

export default function Home() {
  const theme = useTheme();
  return (
    // eslint-disable-next-line
    <Box sx={{ backgroundColor: theme.palette.primary.main }}>
      {/* ↑一時的に無効 */}
      <p>hoge</p>
    </Box>
  );
}
