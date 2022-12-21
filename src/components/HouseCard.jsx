import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import StarIcon from '@mui/icons-material/Star';

export default function HouseCard({ house }) {
    const { id, name } = house;
    const { price, location, rating } = house;
    const { images, startDate, endDate } = house;
    const { city, country } = location;
    const { first, second, third } = images;
    const { fourth, fifth, sixth } = images;

    return (
        <div key={id}>
            <Card sx={{ maxWidth: 345 }} variant="outlined" className="card">
                <CardMedia
                    component="img"
                    height="300"
                    image={first}
                    alt={name}
                />

                <CardContent>
                    <Typography variant="h3" color="text.secondary">
                        {name}
                    </Typography>
                    <Typography
                        variant="h5"
                        color="text.secondary"
                        className="card__details"
                    >
                        {city}, {country}
                    </Typography>

                    <Typography
                        variant="h5"
                        color="text.secondary"
                        className="card__details"
                    >
                        {startDate} - {endDate}
                    </Typography>

                    <Typography
                        variant="h4"
                        color="text.secondary"
                        className="card__details"
                    >
                        {price}$ night
                    </Typography>
                    <Typography
                        variant="h5"
                        color="text.secondary"
                        className="card__details__rating"
                    >
                        {rating} <StarIcon />
                    </Typography>
                </CardContent>
                <CardActions disableSpacing className="card__actions">
                    <IconButton aria-label="add to favorites">
                        <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="share">
                        <ShareIcon />
                    </IconButton>
                </CardActions>
            </Card>
        </div>
    );
}
