import "./Section.css"
function Section({description1,description2,img}){
    return(
        <div id="section" style={{backgroundImage:`url(${img})`}}>
            <div style={{position:"relative",top:"65px",right:"10%",color:"white",fontSize:"30px"}}>{description1}</div>
            <div style={{position:"relative",top:"70px",right:"10%",color:"white",fontSize:"18px"}}>{description2}</div>
        </div>
    )
}

export default Section