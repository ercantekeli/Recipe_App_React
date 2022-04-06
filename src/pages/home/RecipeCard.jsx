import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
const RecipeCard = ({recipe}) => {
  console.log(recipe)
        return (
        <div>
            <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="/static/images/cards/contemplative-reptile.jpg"
                alt="green iguana2"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  <p>{recipe.recipe.label}</p>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over 6,000
                  species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                View More
              </Button>
            </CardActions>
          </Card>
                {/* {recipe[0].recipe.label}
                <p>{recipe[0].recipe.calories}</p> */}
            </div>
        )
}
export default RecipeCard