import "./skill.css"
function Skill ({logo,title,note,color,bgcolor}){
      return (
          <div className="container" style={{backgroundColor:bgcolor}}>
              <div className="right-part" style={{color:color}}>
                  <img  className="img-logo" src={logo} alt="icons" />
                  <p className="title" style={{color:color}}>{title}</p>
               </div>
               <div className="noteof100">
                    <p className="note"> {note} </p>
                    <p >/100</p>
               </div>
             
         </div>
      )
  }
  export default Skill