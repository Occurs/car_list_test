import React from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { colors } from 'styles/variables';

const Header = () => {
  return (
		<Box component='footer' height='80px' borderTop={`2px solid ${colors.secondary}`}>
			<Container maxWidth='md'>
				<Grid
					container
					direction='row'
					justify='center'
					alignItems='center'
				>
					<Grid item>
            <Typography>
              <Box component='span' height='80px' display='flex' alignItems='center' justifyContent='center' fontSize='12px'>
                © AUTO1 Group 2018
              </Box>
            </Typography>
					</Grid>
				</Grid>
			</Container>
		</Box>
  );
};

export default Header;
