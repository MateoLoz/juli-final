import React from "react";
import { useState,useEffect } from "react";
import {saveelement} from './edit';
import { Link, NavLink } from "react-router-dom";

console.log(saveelement);

const form = {
  id: null,
    nombre: "",
    apellido: "",
    membresia: "",
    status: "",
    horas: "",
    vencimiento: ""
}


 const CrudRow = ({el,deleteData,setDataToEdit,sendji}) =>{

   let {id,nombre,apellido,membresia,stado,horas,vencimiento} = el;
  const [jiji,setjiji] = useState(true);


  


  
   const setji = ()=>{
 
    enviar();   
   }
   const enviar = () =>{
   
    sendji(jiji);
   }


    return<>
   

       <tr className='w-full flex flex-row gap-16 mapped-user' key={id}>
       
        <td className='w-7 text-center text-md '>{id}</td>
        <td className='w-24 text-center text-md'>{nombre}</td>
        <td className='w-24 text-center text-md'>{apellido}</td>
        <td className='w-28 text-center text-md'>{membresia}</td>
        <td className='w-24 text-center text-md'>{vencimiento}</td>
        <td className='w-16 text-center text-md'>{stado}</td>
       <td className='w-7 text-center text-md'>{horas}</td>
       <td className='flex mb-2 items-center justify-center'>
       <div className='ml-7 flex flex-row gap-3'>
       <NavLink to={"/update"} className='btn-accion-editar flex items-center justify-center'onClick={()=>{setDataToEdit(true); setji();saveelement(el)}}><img src="https://i.postimg.cc/1tnW3X0V/editar.png" alt="" width={'14px'} /></NavLink>
      <NavLink  className='btn-accion-eliminar flex items-center justify-center' onClick={()=>{deleteData(id)}}><img src="https://i.postimg.cc/P5DrYQtS/x.png" alt="" width={'14px'} /></NavLink>
        </div>
     </td>

  </tr>
    </>
}

export default CrudRow
