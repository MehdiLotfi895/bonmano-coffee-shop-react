function Servis ({img,description,dark}){
    const x=(dark)?{color:"white"}:{color:"black"}
    return(
        <div id="y26"style={{display:"flex",alignItems:"center",width:"24%",gap:"1%",...x}}>
             <div>
                <img src={img} style={{width:"90%"}}/>
             </div>
             <div id="y27"style={{display:"flex",flexDirection:"column",gap:"10px"}}>
                <div style={{fontWeight:"bold",fontSize:"13px"}}>{description[0]}</div>
                <div style={{fontSize:"11px"}}>{description[1]}</div>
             </div>
        </div>
    )
}

export default Servis