import React from "react";
import { useState,useEffect } from "react";
import { HelperHttp } from "../helpers/HelperHttp";
import CrudTable from "./CrudTable";
import CrudAdd from "./CrudAdd";
import axios from "axios";

const CrudApp = () =>{

    const [db,setDb] = useState([]);
    const [dataToEdit, setDataToEdit] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [filter,setfilter] = useState(false);
    const [serch,setserch] = useState(false);
    const [keyserch,setkeyserch] =useState('');

    const [urlfilter,seturlfilter] = useState();
    const [urlserch,seturlserch] = useState('https://juli-db.vercel.app/serch');
    let api = HelperHttp();
    let url = "https://juli-db.vercel.app/"; 
    let urlb = "https://julieta-api.vercel.app/Users";
    
   
    const handlefiltercontrol = (param) =>{
      setfilter(param);
    }
    const handleserchcontrol = (param) =>{
        setserch(param)
    }

    const handleurl = (type,value) =>{
    seturlfilter(`${url}?${type}=${value}`);
    }



    useEffect(()=>{
        if(!filter && !serch){
     setLoading(true);
     axios.get(url).then(res =>{
       
        if(!res.err){
            setDb(res.data);
            setError(null);
        }
        else{
            setDb([]);
            setError(err);
            console.log(err);
        }
     })
        }
    },[filter,serch])

    

    async function serchdata(param){
        console.log(param);
         await axios.get(urlserch).then(res =>{
            alert('buscando..');
          if(res.ok){
            
            let newData = db.map((el)=> el.id === data.id ? data : el)
            setDb(newData)
            window.location.reload(true);
          }
         }).catch((err)=>{
            console.log(err);
         })
         
     }









    const createData = () => {
    //    delete data.id;
     axios.get(url)
     .then((res)=> {
        if(res.ok){
            setDb([...db,res.data]);
            setError(false);
            alert("usuario agregado correctamente!");
        }})
     .catch((err)=> console.log(err));
    
  
        // let options = {body:data, headers:{"content-type":"application/json"}}
        // api.post(url, options).then((res)=>{
        //   if(!res.err){
        //       setDb([...db, res])
        //   }else{
        //       setError(res);
        //   }
        // })
        
      }
      const updateData = (data) => {
 
        let endpoint = `${url}/${data.id}`;
        console.log(endpoint);
        let options = {body:data, headers:{"content-type":"application/json"}}
        api.put(endpoint, options).then((res)=>{
          console.log(res);
          if(!res.err){
              let newData = db.map((el)=> el.id === data.id ? data : el)
              setDb(newData)
          }else{
              setError(res);
          }
        })
      }

      const deleteData = (id) => {
          let isDelete = window.confirm(`Estas seguro de eliminar '${id}'?`)

            if(isDelete){
               let peticion = axios.delete(url,{ data: { id: id }})
                console.log(peticion)
                 .then((res)=>{
                     if(res.ok){
                          console.log(res.status);
                          let newData = db.filter(el => el.id !== id)  
                          setDb(newData)
                         window.location.reload(true);
                     }
                 }).catch((err)=>{
                     console.log(err);
                     alert("algo salio mal..");
                 })
            }



        //   if(isDelete){      
        //     let endpoint = `${url}/${id}`;
        //     let options = {headers:{"content-type":"application/json"}}
        //     api.del(endpoint, options).then((res)=>{
        //         if(!res.err){
        //             let newData = db.filter(el => el.id !== id)  
        //             setDb(newData)
        //         }else{
        //             setError(res);
        //         }
        //     })  
        //   }
        }





    return<>
    {db && <CrudTable setDb={setDb}  handleurl={handleurl} serchdata={serchdata} handleserchcontrol={handleserchcontrol} handlefiltercontrol={handlefiltercontrol} data={db} createData={createData} updateData={updateData} deleteData={deleteData} setDataToEdit={setDataToEdit} dataToEdit={dataToEdit}/>}
    </>
}

export default CrudApp;
