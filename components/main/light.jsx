export default function Light (props) {
    return (
        <div style={{
            display: "flex",
            flexDirection: 'column',
            height: '230px',
            // flexBasis: '60px',
            alignItems: 'center',
            justifyContent: 'space-between'
            // border: '2px red solid'
        }}>

            <button
                type="button"                
                className="btn btn-secondary glyphicon glyphicon-pencil"
                style={{
                    flexRow: 1,
                    flexBasis: '50px',
                    // height: "50px",
                    // flexBasis: "50px",
                }}></button>

            <div style={{
                background: '#333',
                borderRadius: '50%',
                width: '50px',
                flexBasis: '50px',
                flexGrow: 1
            }}></div>

            <button
                type="button"                
                className="btn btn-secondary glyphicon glyphicon-pencil"
                style={{
                    flexRow: 1,
                    flexBasis: '50px',
                    // height: "50px",
                    // flexBasis: "50px",
                }}></button>

        </div>
        
    )
}