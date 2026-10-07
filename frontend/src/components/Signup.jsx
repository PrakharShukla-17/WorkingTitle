import React ,{useState} from 'react';
import api from '../api.js';
import { Container, Box, Typography, TextField, Button } from '@mui/material';

export default function Signup({onAuthSuccess : any}) {
  const [formData,setFormData]= useState({
    name  : '',
    email : '',
    password : '',
  });

  
  const handleChange = (e)=>
  {
    setFormData({
      ...formData,    //This is the "spread operator." It means copy everything already in the form.
      [e.target.name]:e.target.value,
    });
  };
  const handleSubmit = async(e) => {
    e.preventDefault();   // stop default search

    console.log("Button clicked! Form data ready to send:", formData);
  
  const response = await api.post('/auth/signup',formData);
  onAuthSuccess(response.data.user);
  };

  return (
    <Container maxWidth="xs">
      <form onSubmit={handleSubmit}>
      <Box sx={{ marginTop: 8, display: 'flex', flexDirection: 'column', gap: 2 }}>
        <Typography variant="h5" align="center">Sign Up</Typography>
        <TextField 
        label="Full Name" 
        name = "name"
        value = {formData.name}
        onChange= {handleChange}
        />
        <TextField label="Email Address" 
        name="email"
        value={formData.email}
        onChange={handleChange}
        />
        <TextField label="Password"
        name="password"
        type="password"
        value={formData.password}
        onChange={handleChange}
        />
        <Button type="submit" variant="contained">Sign Up</Button>
      </Box>
      </form>
    </Container>
  );
}