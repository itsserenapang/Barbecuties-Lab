import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incrementByAmount } from './counterSlice';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const IncrementByAmount = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const [incrementNumber, setIncrementNumber] = React.useState(0);

  const handleChange = (event) => {
    setIncrementNumber(Number(event.target.value));
  };

  const handleIncrementByAmount = () => {
    dispatch(incrementByAmount(incrementNumber));
  };

  return (
    <div>
      <div>
      <span> {count} </span>
        <TextField
          label="Increment"
          type="number"
          InputProps={{ inputProps: { min: 0 } }}
          value={incrementNumber}
          onChange={handleChange}
        />
        <Button variant="contained" onClick={handleIncrementByAmount}>
          Increment by Amount
        </Button>
      </div>
    </div>
  );
}

export default IncrementByAmount;