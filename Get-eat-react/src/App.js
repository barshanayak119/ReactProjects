import styled from '@emotion/styled';
import { AppBar, Button, Container, CssBaseline, FormControl, FormHelperText, Grid, Input, InputLabel, Toolbar, Typography, Item, Stack, Box, Paper, ThemeProvider } from '@mui/material';
import { padding } from '@mui/system';
import Axios from 'axios';
import { useState } from 'react';
import './App.css';
import FoodTile from './foodTile';
import './index.css';


function App() {


  const [query, setQuery] = useState("");
  const [food, setFood] = useState([]);

  var url = `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=7b6502cc&app_key=2c9f3a0e201a140fc960084069ad1e4f&cuisineType=Indian`


  async function recipe() {
    const result = await Axios.get(url)
    if(!result.data.hits.length){
      console.log("null");
      <FoodTile f={result.data.hits.length}/>
    }
    else{
      setFood(result.data.hits);

    console.log(result.data.hits.url);
    }
    
  }
  const submit = (e) =>{
    e.preventDefault();
    recipe()
  }
  //console.log(query);


  return (
    <div className="App">
      <div className='fonts'>
      <CssBaseline />
        <AppBar color='secondary' position='relative' >
          <Toolbar >
            <Typography variant='h6' textAlign='center' flexGrow={1} >Get-Eat</Typography>
          </Toolbar>
        </AppBar>
      </div>
      <div className='app'>
        <form onSubmit={submit}>
          <Container maxWidth='lg' className='contain'>
            
            <Stack spacing={2} direction="row">
           
             
             <FormControl>

               <Input className='input' color='secondary' value={query} onChange={e => setQuery(e.target.value)} margin='normal' placeholder="Search here" />

             </FormControl>
             <Button disabled={!query} color='secondary' variant='contained' onClick={recipe} type='submit'>Search</Button>
           
        
            </Stack>
            
          </Container>
        </form>
      </div>
      <div className='app'>
      <Container maxWidth='lg' className='contain' >
      <Stack spacing={1}  direction="row" mt={10}>
      <Grid container rowSpacing={7} columns={{ xs: 1, sm: 2, md: 3, lg: 4 }}>
           {
           food.map((f) =>{
              return (<Grid xs={1}>
                     <FoodTile f={f}/>
                     </Grid>
                     )
            
           })
         }

          </Grid>
          </Stack>
          </Container>
       </div>
      {/* <div className='App'>
  <h1 onClick={recipe}>Get-Eat</h1>
  </div> */}
    </div>
  );
}

export default App;
