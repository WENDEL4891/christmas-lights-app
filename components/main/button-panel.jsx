export default function ButtonPanel (props) {
    return (
        <div style={{
            display: "flex",
            flexDirection: "column"
        }}>
            <h5>{props.title}</h5>
            <button>+</button>
            <button>-</button>
        </div>
    )
}