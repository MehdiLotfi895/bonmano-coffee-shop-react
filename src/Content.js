import "./Content.css"
function Content({content,date,img,dark}){
    return(
        <div id="content" style={(dark)?{backgroundColor:"#3e4046",color:"white"}:{backgroundColor:'white',color:"black"}}>
            <img id="y17"src={img} style={{width:"90%",marginTop:"10px",borderRadius:"10px"}}/>
            <div style={{width:"90%",display:"flex",justifyContent:"space-between",marginTop:"15px"}}>
                <div id="y19"style={{width:"60%",fontSize:"14px"}}>{content}</div>
                <div style={{fontSize:"14px",color:" #0f766e"}}>
                <div style={{fontWeight:"bold"}}>{date[0]}</div> 
                <div>{date[1]}</div>
                <div>{date[2]}</div>
                </div>
            </div>
        </div>
    )
}

export default Content