import "./Things.css"
function Things({img,name,dark}){
    const x=(dark)?{color:"white"}:{color:"black"}
    return(
        <div id="thing">
           <img src={img} style={{width:"100%"}}/>
           <div id="y6"style={{marginTop:"5px",fontSize:"13px",...x}}>{name}</div>
        </div>
    )
}

export default Things