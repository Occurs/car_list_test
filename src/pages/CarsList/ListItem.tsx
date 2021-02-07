import React from 'react';
import Link from '@material-ui/core/Link';
import { NavLink, generatePath } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { colors } from 'styles/variables';
import routes from 'router/routes';
import { ICar } from 'types/types';

type IListItemProps = {
  car: ICar,
}

const useStyles = makeStyles({
  image: {
    width: 'inherit',
    height: 'inherit',
  },
});

const ListItem = ({ car }: IListItemProps) => {
  const { stockNumber, pictureUrl, modelName, manufacturerName, fuelType, color, mileage } = car;
  const classes = useStyles();
  const colorCapitalized = color.charAt(0).toUpperCase() + color.slice(1);
  return (
    <Box display='flex' border={`2px solid ${colors.secondary}`} padding='12px' height='90px' marginTop='12px' width='100%'>
      <Box component='div' bgcolor={colors.secondary} marginRight='12px' height='100%' width='85px'>
        <img alt={`${stockNumber}`} src={pictureUrl} className={classes.image} />
      </Box>
      <Box component='div' marginLeft='12px' height='100%' display='flex' alignItems='flex-start' flexDirection='column' justifyContent='space-between'>
        <Typography>
          <Box component='span' fontSize='18px' fontWeight='bold'>
            {`${modelName} ${manufacturerName}`}
          </Box>
        </Typography>
        <Typography>
          <Box component='span' fontSize='12px'>
            {`Stock # ${stockNumber} - ${mileage.number} ${mileage.unit.toUpperCase()} - ${fuelType} - ${colorCapitalized}`}
          </Box>
        </Typography>
        <Link component={NavLink} to={generatePath(routes.carCard, { stockNumber: car.stockNumber })}>
          <Box fontSize='12px' color={colors.primary} component='span'>View details</Box>
        </Link>
      </Box>
    </Box>
  );
};

export default ListItem;
