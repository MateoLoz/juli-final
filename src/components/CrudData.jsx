import React, { useEffect, useState } from "react";
import CrudAdd from "./CrudAdd";

import { NavLink } from "react-router-dom";



const CrudData = ({createData,updateData,setDataToEdit,dataToEdit,modal,setmodal}) =>{





  const handleerrormodal = () =>{
    setmodal(true);
  }








    
   









    return<>
    <div className="mr-10">
      <NavLink to="/create" className="btn-add" onClick={handleerrormodal}>Crear</NavLink>
    
       <CrudAdd  modal={modal} setmodal={setmodal}    createData={createData} updateData={updateData} setDataToEdit={setDataToEdit} dataToEdit={dataToEdit}/>   
    </div>
   

    </>
}

export default CrudData;