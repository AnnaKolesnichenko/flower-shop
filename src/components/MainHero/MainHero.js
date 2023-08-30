import {Box, Button, SvgIcon, Typography} from '@mui/material';
import image from '../../images/peony2.jpeg';
import CustomIconGlobe from 'components/CustomIcon/CustomIconGlobe';
import CustomIconLocation from 'components/CustomIcon/CustomIconLocaiton';
import LocalFloristIcon from '@mui/icons-material/LocalFlorist';

const smallText = {color: '#F5EBEB', fontSize: 16, marginLeft: 4, marginBottom: 4, textAlign: 'center'};
const iconBox = {display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', width: '350px'};
const mainTitlePink = {fontStyle: 'italic', color: '#a93b59', fontSize: 48, fontFamily: 'Montserrat'};

const MainHero = () => {
    return (
        <Box sx={{marginTop: "109px", marginLeft: "64px", marginRight: "64px"}} >
            <Typography sx={mainTitlePink}>Amazing</Typography>
            <Box sx={{display: 'flex', alignItems: 'baseline', gap: 2, marginTop: '-15px', marginLeft: 8, marginBottom: -2}}>
                <Typography sx={{color: '#F5EBEB', fontSize: 86, fontFamily: 'Montserrat'}}>BOUQUETS</Typography>
                <Typography sx={mainTitlePink}>of fresh flowers</Typography>
            </Box>
            <Typography sx={{color: '#F5EBEB', fontSize: 22, marginLeft: 4, marginBottom: 4}}>With free delivery in Kyiv within 1 hour</Typography>
            <Button sx={{marginLeft: 4, width: "487px", backgroundColor: '#a93b59', color: 'white', fontSize: 24, borderRadius: 4}}>Order Flowers</Button>
            <Box component="div" sx={{
                position: 'absolute',
                top: 120,
                right: 0,
                width: "900px",
                height: "900px",
                backgroundImage: `url(${image})`,                
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat', 
                zIndex: -1,
                // filter: 'blur(1px)'
             }}>                
             </Box>
             <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: '', gap: 6, marginTop: '500px'}}>
                <Box sx={iconBox}>                    
                    <LocalFloristIcon sx={{width: "47px", height: "48px", color: 'white'}}></LocalFloristIcon>
                    <Typography sx={smallText}>Everyday update of fresh flowers</Typography>
                </Box>
                <Box sx={iconBox}>
                    <SvgIcon sx={{width: "47px", height: "48px"}}><CustomIconGlobe /></SvgIcon>
                    <Typography sx={smallText}>Free delivery to any spot of the city</Typography>
                </Box>
                <Box sx={iconBox}>
                    <SvgIcon sx={{width: "47px", height: "48px"}}><CustomIconLocation /></SvgIcon>
                    <Typography sx={smallText}>More than 1000 flower varieties from all over the world</Typography>
                </Box>
             </Box>
        </Box>
    )
};

export default MainHero;