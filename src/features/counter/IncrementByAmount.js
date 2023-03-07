import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {decrement, increment, incrementByAmount} from './counterSlice';
import TextField from '@mui/material/TextField';

export default function Counter() {
  const count = useSelector(state => state.counter.value);
  const dispatch = useDispatch();

  const [increment, setIncrement] = React.useState('');

  const handleIncrement = event => {
    setIncrement(event.target.value);
  };

  return (
    <div>
      <div>
        <Textfield value={increment} onChange={handleIncrement} />
        <button>
          onClick={() => dispatch(incrementByAmount(parseInt(increment)))}
        </button>
        <span> {count} </span>
      </div>
    </div>
  );
}
