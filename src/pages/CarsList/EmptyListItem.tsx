import React from 'react';
import Box from '@material-ui/core/Box';
import { colors } from 'styles/variables';

const EmptyListItem = () => {
  return (
    <Box display='flex' border={`1px solid ${colors.secondary}`} padding='12px' height='90px' marginTop='12px' width='100%'>
      <Box component='div' bgcolor={colors.secondary} marginRight='12px' height='100%' width='85px' />
      <Box component='div' marginLeft='12px' height='100%' display='flex' alignItems='flex-start' flexDirection='column' justifyContent='space-between'>
        <Box component='div' height='18px' width='180px' bgcolor={colors.secondary} />
        <Box component='div' height='14px' width='180px' bgcolor={colors.secondary} />
        <Box component='div' height='14px' width='60px' bgcolor={colors.secondary} />
      </Box>
    </Box>
  );
};

export default EmptyListItem;
