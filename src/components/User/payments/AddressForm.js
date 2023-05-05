import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Review from './Review';
import { useDispatch } from 'react-redux';
import { setDeliveryDetail } from '../../../redux-config/DeliveryDetailSlice';


export default function AddressForm() {
  const navigate=useNavigate()
  const location=useLocation()
  const dispatch=useDispatch()
  console.log(location.state)
  const[name,setName]=useState()
  const [deliveryaddress,setdeliveryAddress]=useState()
  const[contactPerson,setContactPerson]=useState()
  const [contactNumber,setContactNumber]=useState()
  
  const sendDeliveryDetail=()=>{
    const data={name,deliveryaddress,contactPerson,contactNumber}
    dispatch(setDeliveryDetail(data))
  }
 


  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      <FormControlLabel onSubmit={()=>sendDeliveryDetail()}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="Name"
            fullWidth
            autoComplete="given-name"
            variant="standard"
            onChange={(e)=>setName(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address1"
            name="address1"
            label="Delivery Address"
            fullWidth
            autoComplete="shipping address-line1"
            variant="standard"
            onChange={(e)=>setdeliveryAddress(e.target.value)}
          />
        </Grid>
         <Grid item xs={12} sm={6}>
          <TextField
            id="contactPerson"
            name="contactPerson"
            label="Contact Person Name"
            fullWidth
            variant="standard"
            onChange={(e)=>setContactPerson(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="conatactNumber"
            name="conatactNumber"
            label="Conatact Number"
            fullWidth
            autoComplete="shipping address-level2"
            variant="standard"
            onChange={(e)=>setContactNumber(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="Use this address for payment details"
          />
        </Grid>
      </Grid>
      </FormControlLabel>
    </React.Fragment>
  );
}