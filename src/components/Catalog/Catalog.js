import {Box, Typography} from '@mui/material';
import DeliveryOptions from 'components/DeliveryOptions/DeliveryOptions';
import Peony from '../../images/peony.jpeg';


const Catalog = () => {
    return (
        <Box sx={{ marginLeft: '64px', marginRight: '64px', marginTop: "64px"}}>
            <Box sx={{marginLeft: '-64px', marginBottom: 15, width: '490px', textAlign: 'right'}}>
                <Typography variant='h3' color='#a93b59' fontStyle='italic' fontSize={48} fontFamily='Montserrat' borderBottom='2px solid #a93b59'>Catalog</Typography>
            </Box>
            <Box sx={{position: 'absolute',    
                right: 0,
                width: "100%",
                height: "900px",
                backgroundImage: `url(${Peony})`,                
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat', 
                zIndex: -1,
                filter: 'blur(2px)'}}>
            </Box>
            <Box sx={{display: 'flex', flexDirection: 'column',alignContent: 'center', justifyContent: 'center', marginTop: 8, marginX: 'auto', width: '80%', background: '#B96A7F80', opacity: .7, borderRadius: "5px", zIndex: -1}}>
                <DeliveryOptions />
            </Box>
            
        </Box>
    )
};

export default Catalog;
