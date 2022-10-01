import { Box, Button, Card, CardContent, CardMedia, Grid, Paper, Typography } from "@mui/material";
import React, { useState } from "react";
import "./App.css";
import { experimentalStyled as styled } from '@mui/material/styles';



function FoodTile({f}){
    
    //const [details, setDetails] = useState("")

    function printit(e){
        //console.log(e.target.value.recipe.url);
        window.open(f.recipe.url)
        
    }
    return (
        
        <div className="aligned" >
           <Box sx={{
          height: 300,
          width: 300,
          
          maxWidth: { xs: 300, md: 270 },
          mb: { xs: 10, md:10},
          
        }} >
            
                <Card onClick={printit}>
                <CardMedia 
                 component="img"
                 height="250"
                 image= {f["recipe"]["image"]}/>
                 <CardContent>
                 <Typography variant="subtitle1" flex={1} component="div" >
                    {f["recipe"]["label"]}
                 </Typography>
                 <Typography variant="h6" component="div" >
                    
                 </Typography>
                 <Button onClick={printit} color="secondary" variant="outlined">check It Out</Button>
                 </CardContent>
                 
                </Card>
               
            </Box>
            
            <p></p>
           
        </div>
    )
}

export default FoodTile;