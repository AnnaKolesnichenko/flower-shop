import {Box, Card, CardContent, CardMedia, Grid, Typography} from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import flowerItems from 'data/flowerItems';

const FlowerItemList = () => {
    return (
        <Box >
            <Grid container spacing={4} sx={{marginTop: '100px', alignItems: 'center', justifyContent: 'center', gap: 6}}>
                {flowerItems.map((item, i) => (
                    <Grid key={i}>
                        <Card sx={{position: 'relative', padding: '20px', borderRadius: '10px'}}>
                            <FavoriteBorderIcon sx={{width: '24px', height: '24px', fill: '#a93b59', position: 'absolute', top: 10, right: 10}}></FavoriteBorderIcon>
                            <CardMedia component='img' height='240' width='150' image={item.image} alt={item.title}/>
                            <CardContent sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                                <Typography variant='h5' component='div'>{item.title}</Typography>
                                <Typography variant='body2' color='text.secondary'>{item.price}</Typography>
                            </CardContent>
                        </Card>                        
                    </Grid>
                ))}
            </Grid>

        </Box>
    )
};

export default FlowerItemList;