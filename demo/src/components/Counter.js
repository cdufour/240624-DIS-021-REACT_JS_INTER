export function Counter(props) {
    let count = 0;

    return (
        <div>
            <button onClick={ () => { 
                count++;
                console.log('count =>', count);
            } }>Increment</button>
            <span>{count}</span>
        </div>
    )
}