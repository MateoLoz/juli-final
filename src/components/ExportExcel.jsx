import React, { useEffect, useState } from "react";

import axios from 'axios'
import {ExportToExcel} from './Export'

const ExportExcel = () =>{
   
    const [data,setdatos] = useState([]);
    const url = "https://julieta-api-git-main-mateolozs-projects.vercel.app/Users";
    const urlb = "http://localhost:8000/";
    const filename = "tabla de Usuarios"

    useEffect(()=>{


        const fetchdata = () =>{
            axios.get(urlb).then(r => setdatos(r.data));
        }
        fetchdata();
    },[])

   
    return<>
    <div className="btn-excel bg-green-500 text-white p-1 rounded-md flex items-center justify-center">
    <ExportToExcel   apiData={data} fileName={filename}  >Exportar a Excel</ExportToExcel>
    </div>
   
  
    


    </>
}

export default ExportExcel;
