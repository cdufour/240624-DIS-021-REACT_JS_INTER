export default function StockLevel({stock}) {

    let color, height;

    let stockStyle = {
        display: "inline",
        padding: 10,
        backgroundColor: "#f7f7f7"
    };

    if (stock <= 10) {
        color = 'red';
        height = 10;
    } else if (stock > 10 && stock <= 50) {
        color = 'orange';
        height = 20;
    } else {
        color = 'green';
        height = 30;
    }

    return (
        <div style={stockStyle}>
            <svg width="10" height={height}>
                <rect width="10" height={height} fill={color} />
            </svg>
            <span style={{ marginLeft: 10 }}>
                Stock: <span style={{ color }}>{stock}</span>
            </span>
        </div>
    )

}