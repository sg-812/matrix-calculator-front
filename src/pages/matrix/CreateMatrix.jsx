import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { createMat } from "../../redux/Slice/MatSlice";
import { useNavigate } from "react-router-dom";
const CreateMatrix = () => {
    const form = useForm();
    const { register,  handleSubmit } = form;

    const dispatch=useDispatch()
    const navigate=useNavigate();
    const submitHandler = (data) => {
        console.log("Form submitted", data);
        dispatch(createMat(data))
        .then(res=>{
            console.log(res)
            if(res)
            {
                alert(res.payload.message)
                navigate('/view-matrix')
            }
        }
        )
        .catch(err=>console.log(err))
    
    }
  return (
    <Box style={{ padding: "40px 20px" }}>
      <form onSubmit={handleSubmit(submitHandler)}>
        <TextField
          id="row"
          label="Number of rows"
          variant="outlined"
          name="row"
          {...register('row')}
        />
        <TextField
          id="col"
          label="Number of Columns"
          variant="outlined"
          name="col"
          {...register('col')}
        />
        <br/><br/>
        <Button variant="outlined" color="primary" type="submit">
          Generate
        </Button>
      </form>
    </Box>
  );
};

export default CreateMatrix;
