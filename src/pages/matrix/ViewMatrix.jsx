import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addMat, viewMat,mulMat,subMat } from "../../redux/Slice/MatSlice";
import TableComp from "../../components/table";
import { Box, Stack, Button } from "@mui/material";

const ViewMatrix = () => {
  let [state, setState] = useState({});
  let dispatch = useDispatch();
  let [result, setResult] = useState([]);
  useEffect(() => {
    dispatch(viewMat())
      .then((res) => {
        console.log("res", res);
        setState(res.payload.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [dispatch]);

  const clickHandler= (data)=>{

    if(data=='add'){
     dispatch(addMat())
     .then(res=> setResult(res?.payload.data))
     .catch(err=>console.log(err))
    }
    else if(data=='mul'){
       dispatch(mulMat())
       .then(res=> setResult(res?.payload.data))
       .catch(err=>console.log(err))
    }
    else{
     dispatch(subMat())
     .then(res=> setResult(res?.payload.data))
     .catch(err=>console.log(err))
    }
   
    
  }
  return (
    <div>
      <h3>Matrix A</h3>
      <TableComp>{state?.matrix1}</TableComp>
      <hr />
      <h3>Matrix B</h3>
      <TableComp>{state?.matrix2}</TableComp>
      <Box>
        <Stack direction="row" spacing={2}>
          <Button variant="outlined" color="error" onClick={()=>clickHandler("add")}>
            Add
          </Button>
          <Button variant="outlined" color="error"  onClick={()=>clickHandler("mul")}>
            Multiply
          </Button>
          <Button variant="outlined" color="error"  onClick={()=>clickHandler("sub")}>
            Subtract
          </Button>
        </Stack>
      </Box>
      {result && result.length > 0 ? <TableComp>{result}</TableComp> : ""}
    </div>
  );
};

export default ViewMatrix;
