import { Stack, Typography } from '@mui/material'
import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
const Header = () => {
  return (
    <Stack px={5} alignItems={'center'} bgcolor='gray' py={5} direction={'row'} justifyContent={'space-between'}>
        <Typography color='#fff' variant='h2' fontSize={20}>Simple gallery App</Typography>
        <MenuIcon sx={{color:'white',fontSize:'40px'}}/>
    </Stack>
  )
}

export default Header