import {Box, FormControl, InputLabel, Select, MenuItem, Typography} from '@mui/material';
import { useState } from 'react';
import CatalogButton from 'components/CatalogButton/CatalogButton';

const inputLabelStyle = {color: 'white', fontSize: 18};
const flowers = ['Rose', 'Eustoma', 'Chrysanthemum', 'Lily', 'Tulip', 'Hydrangea', 'Alstromeria'];
const occasion = ['Birthday', 'Wedding', 'Love', 'Condolences'];
const flowerStyle = ['Casual', 'Framed', 'Boxed', 'Basketed', 'Cascade'];


const DeliveryOptions = () => {
    const [price, setPrice] = useState('');

    const handlePriceChange = (e) => {
        setPrice(e.target.value);
        console.log(price)
    }

    const handleSubmit = () => {
        console.log(price)
    }
    return (
        <Box sx={{borderRadius: "15px"}}>
            <Box >
                <Typography variant='h3' fontSize={34} fontWeight={600} color='white' textAlign='center' paddingTop={1} paddingBottom={2}>Flower Delivery in Kyiv</Typography>
            </Box>
            <Box sx={{borderRadius: '15px', backgroundColor: '#B96A7F', display: 'flex', justifyContent: 'space-between'}}>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 120, backgroundColor: 'inherit', marginTop: 0 }}>
                <InputLabel id="demo-simple-select-standard-label" sx={inputLabelStyle}>Price</InputLabel>
                <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={price}
                onChange={handlePriceChange}
                label="Price"
                >
                    <MenuItem value={"< 200"}> {"< 200 UAH"}</MenuItem>
                    <MenuItem value={"200 - 500"}>{"200 - 500 UAH"}</MenuItem>
                    <MenuItem value={"> 500"}>{"> 500 UAH"}</MenuItem>
                </Select>
                <CatalogButton onSubmit={handleSubmit}/>                             
            </FormControl>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 120, backgroundColor: 'inherit', marginTop: 0 }}>
                <InputLabel id="demo-simple-select-standard-label" sx={inputLabelStyle}>Flowers</InputLabel>
                <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={price}
                onChange={handlePriceChange}
                label="Flowers"
                >
                    {flowers.map(flower => (<MenuItem sx={{textTransform:'capitalize'}} value={flower}>{flower}</MenuItem>))}                
                </Select>
                <CatalogButton onSubmit={handleSubmit}/>
            </FormControl>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 120, backgroundColor: 'inherit', marginTop: 0 }}>
                <InputLabel id="demo-simple-select-standard-label" sx={inputLabelStyle}>To Whom</InputLabel>
                <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={price}
                onChange={handlePriceChange}
                label="Whom"
                >
                    <MenuItem value='MainHero'>Man</MenuItem>
                    <MenuItem value='Woman'>Woman</MenuItem>
                </Select>
                <CatalogButton onSubmit={handleSubmit}/>
            </FormControl>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 120, backgroundColor: 'inherit', marginTop: 0 }}>
                <InputLabel id="demo-simple-select-standard-label" sx={inputLabelStyle}>Occasion</InputLabel>
                <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={price}
                onChange={handlePriceChange}
                label="Occasion"
                >
                    {occasion.map(occasion => (<MenuItem  value={occasion}>{occasion}</MenuItem>))} 
                </Select>
                <CatalogButton onSubmit={handleSubmit}/>
            </FormControl>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 120, backgroundColor: 'inherit' , marginTop: 0}}>
                <InputLabel id="demo-simple-select-standard-label" sx={inputLabelStyle}>Style</InputLabel>
                <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={price}
                onChange={handlePriceChange}
                label="flowerStyle"
                >
                    {flowerStyle.map(style => (<MenuItem value={style}>{style}</MenuItem>))} 
                </Select>
                <CatalogButton onSubmit={handleSubmit}/>
            </FormControl>
            </Box>
        </Box>
    )
}

export default DeliveryOptions;