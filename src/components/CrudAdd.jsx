import React from "react";
import { useState,useEffect } from "react";
import Select from 'react-select';
import {obj} from './edit';
import axios  from "axios";
import { Navigate, NavLink, useNavigate } from "react-router-dom";

const initialForm = {
    id: null,
    nombre: "",
    apellido: "",
    membresia: "",
    status: "",
    horas: "",
    vencimiento: ""
}

const membership = [
       
    {label: 'Mensual basico', value: 'bono mensual basico'},
    {label: 'Mensual Medium', value: 'bono mensual medium'},
    {label: 'Bicho Feo', value: 'bono bicho feo'},
    {label: 'Taller intensivo', value: 'taller intenviso'},
    {label: 'Bono semanal', value: 'bono semanal'},
    {label: 'Bono por dia', value: 'bono dia'},
]

const sta = [
    {label: 'Pago', value: 'Pago'},
    {label: 'Inpago', value: 'Inpago'},
]



const CrudAdd = ({modal,createData,updateData,setDataToEdit,dataToEdit,setmodal}) =>{
    
    const [form, setForm] = useState(initialForm)
   const [ingreso,setingreso] = useState('Ingreso');   
   const navegate = useNavigate();

   const [id,setid] = useState(0);
   const [nombre,setnombre] = useState('');
   const [apellido,setapellido] = useState('');
   const [vencimiento,setvencimiento] = useState(0);
   const [horas,sethoras] = useState(0);
   const [membresia,setmembresia] = useState('');
   const [stado,setstatus] = useState('');
    const [email,setemail] = useState('')
    const [entrada,setentrada] = useState('')
    const [salida,setsalida] = useState('')
   



   
   

   
    const closemodal = () =>{
        let modal = document.getElementById('modal');
        modal.style.opacity = 0;
        setTimeout(()=>{
            setmodal(false);
                },200)
        setForm(initialForm);
        setnombre('');
        setapellido('');
        setemail('');
        setmembresia('');
        setstatus('');
        setvencimiento(0);
        sethoras(0);
        setentrada('');
        setsalida('');
        setDataToEdit(null);
        setmodal(false);
        setingreso('Ingreso');
        
    }

  
    
useEffect(()=>{
    if(dataToEdit){
setnombre(obj.nombre);
setapellido(obj.apellido);
setemail(obj.email);
setmembresia(obj.membresial);
setstatus(obj.stado);
setvencimiento(obj.vencimiento);
sethoras(obj.horas);
setid(obj.id);
console.log(nombre,apellido,email,membresia,stado,horas,entrada,salida);

setingreso('Modificacion');

} else {
setForm(initialForm);
}
},[dataToEdit])



useEffect(()=>{

    if(modal){
    setTimeout(() => {
    let modal = document.getElementById('modal');
    modal.style.opacity = 100;
    }, 450);
    }

},[modal])




const handleChange = (e) => {

    setnombre(e.target.value)

    setapellido( e.target.value)

    setvencimiento(e.target.value)

    sethoras(e.target.value)


    // console.log(form)
    // setForm({
    //     ...form,
    //     [e.target.name]: e.target.value,
    // })
    
    
    
}
const handleSubmit = (e) => {
    e.preventDefault();

   if(!nombre || !apellido || !membresia || !vencimiento || !horas || !stado){
    alert('datos incompletos!');
    return;
   }
   else{
if(!dataToEdit){
async function postdata(){
 
    await  axios.post("https://juli-db.vercel.app/create",{
         nombre,
         apellido,
         email,
         membresia,
         stado,
         vencimiento,
         horas,
         entrada,
          salida
      }).then((res)=>{
      alert('Usuario Agregado correctamente!');
       console.log(res.data);
       console.log(res);
        navegate('/');
        setTimeout(() => {
            window.location.reload(true);
        }, 300);
        
    
    }).catch((err)=>{
        console.log(err);
        alert("Error algo salio mal!");
        navegate('/');
    })
}
 
postdata();

   }
   }
   
if(dataToEdit){
    async function putdata(){
        await axios.put("https://juli-db.vercel.app/update",{
            nombre,
            apellido,
            email,
            membresia,
            stado,
            vencimiento,
            horas,
             id
        }).then((res)=>{
            alert('Usuario Modificado correctamente!');
             console.log(res.data);
             console.log(res);
              navegate('/');
         setTimeout(() => {
             window.location.reload(true);
         }, 300);
        
        }).catch((err)=>{
            console.log(err);
            alert("Error algo salio mal!");
        })

    }
    putdata();
}

    // if(!form.nombre || !form.apellido || !form.membresia || !form.horas || !form.status || !form.status){
    //     alert('Datos incompletos');
    //     return;
    // }
    // if(form.id === null){
    //     createData(form);
    // } else {
    // updateData(form);
    //  }
handleReset(); 
}


const handleReset = (e) => {
    setForm(initialForm);

    setnombre('');
    setapellido('');
    setemail('');
    setmembresia('');
    setstatus('');
    setvencimiento(0);
    sethoras(0);
    setentrada('');
    setsalida('');
    setDataToEdit(false);
    setmodal(false);
    setingreso('Ingreso');
    closemodal();
}


 const handlemembership = (evento) =>{
    let aux = evento.value;
   setmembresia(aux);
     console.log(membresia);
 }

 const handlestatus = (evento) =>{
    let aux = evento.value;
     setstatus(aux);
     console.log(stado);
 }





    return<>

    {modal ?  <div id="modal" className="modal" >
        <header className="mt-1 mb-3 w-full h-6 text-center items-center justify-center">
         <h2 className="text-xl font-medium"> {ingreso} de  datos </h2> 
        </header>
        <aside className="w-full h-3/4  flex  justify-center items-center">

        <form className="w-2/3 h-full flex flex-col gap-2 justify-center" action="/create"   onSubmit={handleSubmit} >

        <label className="label-text" htmlFor="nombre">
            Nombre
        </label>
        <input className="input-add" type="text" name="nombre" placeholder="Nombre" onChange={e=> setnombre( e.target.value)} value={nombre} />

        <label className="label-text" htmlFor="apellido">
            Apellido
        </label>
        <input className="input-add" type="text" name="apellido" placeholder="Apellido" onChange={e=>  setapellido( e.target.value)} value={apellido} />

        <label className="label-text" htmlFor="membresia">
            Membresia
        </label>
        

      <Select className="select-box" name="membresia" id="membresia"
      options={membership}
      onChange={e=> handlemembership(e)}
       />
        

        <label className="label-text" htmlFor="Status">
            Estado
        </label>
       <Select className="select-box" 
       options={sta}
       onChange={e=> handlestatus(e)}
        />
        

        <label className="label-text" htmlFor="horas">
            Horas
        </label>
        <input className="input-add" type="text" name="horas" placeholder="Hora" onChange={e=>sethoras(e.target.value)} value={horas} />

        <label className="label-text" htmlFor="vencimiento">
            Vencimiento
        </label>
        <input className="input-add" type="text" name="vencimiento" placeholder="Vencimiento" onChange={e=>setvencimiento(e.target.value)} value={vencimiento} />


        <footer className="mt-2 w-full  h-12 rounded-2xl flex flex-row justify-around items-end ">
         <input className="btn-send-data" type="submit" value="Enviar" onClick={handleSubmit}/>
         <NavLink to={'/'} className="btn-close-modal flex justify-center items-center"  onClick={closemodal}>Cerrar</NavLink>
        </footer>
        </form>
     
        </aside>

        
     </div> : null }

    
     
    </>

}

export default CrudAdd;
