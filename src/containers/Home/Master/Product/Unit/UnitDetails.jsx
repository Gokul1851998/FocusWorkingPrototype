import { Box, Breadcrumbs, IconButton, Stack } from '@mui/material'
import React from 'react'
import { secondryColor } from '../../../../../config'
import { MDBCard } from 'mdb-react-ui-kit'
import AutoComplete2 from '../../../../../components/AutoComplete/AutoComplete2'
import AccountInput from '../../../../../components/Inputs/AccountInput'

export default function UnitDetails() {
  return (
    <MDBCard
    className="text-center"
    style={{
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
      zIndex: 1,
      margin: 10,
    }}
  >
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: "20px",
        padding: 2,
      }}
    >
      <AccountInput label="Name"  />
      <AccountInput label="Code"  />
      <AccountInput label="Number od Decimals"  />
      
    </Box>
    <Stack
        direction="row"
        spacing={1}
        padding={1}
        justifyContent="flex-end"
      >
      
      </Stack>
    
  </MDBCard>
  )
}
