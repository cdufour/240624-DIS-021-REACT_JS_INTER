import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, incrementBy, reset } from './counterSlice';

export default function Demo(props) {

    const count = useSelector(state => state.counter.value)
    const dispatcher = useDispatch()
    const STEP = 2

    return (
        <div>
            <h2>Demo</h2>
            <button onClick={ () => dispatcher(increment()) }>Increment</button>
            <button onClick={ () => dispatcher(incrementBy(STEP)) }>Increment by {STEP}</button>
            <button onClick={ () => dispatcher(decrement()) }>Decrement</button>
            <button onClick={ () => dispatcher(reset()) }>Reset</button>
            <p>Count: {count}</p>
        </div>
    )

}