import {Box, Typography} from '@mui/material';
import DeliveryOptions from 'components/DeliveryOptions/DeliveryOptions';
import Peony from '../../images/peon2.jpeg';


const Catalog = () => {
    return (
        <Box sx={{ maxWidth: '1440px',position: "relative", marginLeft: '64px', marginRight: '64px', marginTop: "64px"}}>
            <Box sx={{marginLeft: '-64px', marginBottom: 15, width: '490px', textAlign: 'right'}}>
                <Typography variant='h3' color='#a93b59' fontStyle='italic' fontSize={48} fontFamily='Montserrat' borderBottom='2px solid #a93b59'>Catalog</Typography>
            </Box>
            <Box component="div" sx={{position: 'absolute',    
                right: 50,
                top: 100,
                width: "100vw",
                height: "850px",
                backgroundImage: `url(${Peony})`,                
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat', 
                zIndex: -1,
                transform: 'scaleY(-1)',
                opacity: 0.6,
                filter: 'blur(1px)'
            }}>
            </Box>
            <Box sx={{display: 'flex', flexDirection: 'column',alignContent: 'center', justifyContent: 'center', marginTop: 8, marginX: 'auto', width: '90%', background: '#B96A7F80', opacity: .7, borderRadius: "5px", zIndex: -1}}>
                <DeliveryOptions />
            </Box>
            
        </Box>
    )
};

export default Catalog;
