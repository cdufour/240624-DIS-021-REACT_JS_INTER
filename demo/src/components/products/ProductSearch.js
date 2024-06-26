export default function ProductSearch(props) {

    const onKeyUp = (event) => {
        //console.log(event.target.value);
        props.onSearch(event.target.value);
    }

    return (
        <div>
            <input type="text" onKeyUp={ (event) => onKeyUp(event) } />
        </div>
    )

}