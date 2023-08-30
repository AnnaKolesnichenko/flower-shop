import {Button, Typography} from '@mui/material';

const CatalogButton = ({onSubmit}) => {
    return (
        <Button variant='text' justifyContent="left" onClick={onSubmit}><Typography color='white' fontSize={12} marginTop={1}>Submit</Typography></Button>
    )
};

export default CatalogButton;