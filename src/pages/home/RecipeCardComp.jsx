import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
const RecipeCard = ({recipe}) => {
  console.log(recipe)
        return (
        <div sx={{display:"flex", flexDirection:"row"}}>
    
            <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  <h6>{recipe.recipe.label}</h6>
                </Typography>
                
              </CardContent>

              <CardMedia
                borderRadius="500px"
                component="img"
                height="150"
                width="100"
                image={recipe.recipe.image}
                alt="green iguana2"
              />
            </CardActionArea>
            <CardActions style={{display:"flex", justifyContent:"center"}}>
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