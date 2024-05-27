import { Box, Breadcrumbs, IconButton, Stack } from '@mui/material'
import React from 'react'
import { secondryColor } from '../../../../../config'
import { MDBCard, MDBCardBody, MDBCol, MDBRow } from 'mdb-react-ui-kit'
import AutoComplete2 from '../../../../../components/AutoComplete/AutoComplete2'
import AccountInput from '../../../../../components/Inputs/AccountInput'

export default function UnitDetails() {
  return (
    
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: "20px",
        padding: 2,
        
      }}
    >
      
      <MDBCardBody>
                <MDBRow>
                <MDBCol lg="3" md="4" sm="6" xs="12">
                    <AccountInput label="Name" />
                  </MDBCol>
                  <MDBCol lg="3" md="4" sm="6" xs="12">
                    <AccountInput label="Code" />
                  </MDBCol>
                  <MDBCol lg="3" md="4" sm="6" xs="12">
                    <AccountInput label="No of decimals" />
                  </MDBCol>
                  <MDBCol lg="3" md="4" sm="6" xs="12">
                  <AutoComplete2 autoLabel="Rounding Type" />
                  </MDBCol>
                  <MDBCol lg="3" md="4" sm="6" xs="12">
                  <AutoComplete2 autoLabel="Unit type" />
                  </MDBCol>
                  <MDBCol lg="3" md="4" sm="6" xs="12">
                    <AccountInput label="Group" />
                  </MDBCol>
                 
                </MDBRow>
              
              </MDBCardBody>
              
    </Box>
    
    

  )
}
