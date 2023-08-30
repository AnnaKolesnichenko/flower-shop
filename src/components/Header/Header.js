import FilterVintageIcon from '@mui/icons-material/FilterVintage';
import { Box, Link, Typography } from '@mui/material';

const Header = () => {

    const textStyle = {
        textDecoration: 'none', 
        fontSize: '20px', 
        color: 'white'
    }
    return (
        <Box sx={{position: 'relative', paddingLeft: "64px", paddingRight: "64px", paddingTop: '24px', display: 'flex', flexDirection: 'row',  alignItems: 'center', justifyContent: 'space-between'}}>
            <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                <FilterVintageIcon sx={{width: '24px', height: "24px", color: 'white'}}></FilterVintageIcon>
                <Typography variant='h3' color='#F5EBEB' fontSize={16}>FLOWERSHOP</Typography>
            </Box>
            <Box sx={{display: 'flex', flexDirection: 'row', gap: 2, position: 'absolute', right: "64px"}}>
                <Link  href=""sx={textStyle}>Main</Link>
                <Link href="" sx={textStyle}>Catalogue</Link>
                <Link href="" sx={textStyle}>About Us</Link>
                <Link href="" sx={textStyle}>How To Order</Link>
                <Link href="" sx={textStyle}>Reviews</Link>
                <Link href="" sx={textStyle}>Contacts</Link>
            </Box>
        </Box>
    )
};

export default Header;