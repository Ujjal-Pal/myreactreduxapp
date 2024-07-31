import { useSelector,useDispatch } from "react-redux"
import { increment,decrement, reset, incrementByAmount } from "./CounterSlice"
import { useState } from "react";


const Counter = () => {
    const count = useSelector((state : any) => state.counter.count);
    const dispatch = useDispatch();
    const [number, setnumber] = useState(0);
    const addvalue:any = Number(number) || 0;

    return (
        <section>
            <p>{count}</p>
            <div>
                <button onClick={() => dispatch(increment())}>+</button>
                <button onClick={() => dispatch(decrement())}>-</button>
                <button onClick={() => dispatch(reset())}>reset</button>
                <input type="number" value={number} onChange={(e:any) => setnumber(e.target.value)}/>
                <button onClick={() => dispatch(incrementByAmount(addvalue))}>Click to increment by amount</button>
            </div>
        </section>
    )
}

export default Counter