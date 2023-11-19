import React from "react";


function Home(){
    return(
        <>
         
        <center>
        <section className="description">
          <h1> Model 3</h1>
          <br/>
         <p> Order Online for
          <span className="span"> Touchless Delivery</span> </p>
          </section>
       </center>

     <center> 
      <div className="buttons"> 
           <button className="custom"> CUSTOM ORDER </button>
           <button className="existing"> EXISTING INVENTORY </button>
        </div> 
        </center>

       <center> <div className="chevron">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" className="svg" height="32"
            viewBox="0 0 32 32"><path fill="currentColor"
             d="M16 22L6 12l1.4-1.4l8.6 8.6l8.6-8.6L26 12z"/></svg>
        </div>
        </center>
        </>
    )
}

export default Home;
