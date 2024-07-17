import axios from "axios";
import React from "react";
import { useState,useEffect } from "react";
import { Navigate, NavLink } from "react-router-dom";


const CrudFilter = ({setDb,handlefiltercontrol,handleserchcontrol,serchdata}) =>{

const [filter,setfilter] = useState(false);
const [rotate,setrotate] = useState(false);
const [list,setlist] = useState(false);
const [option,setoption]= useState('');
const [condition,setcondition] = useState(false);
const [serch,setserch] = useState();
let identificador;

const rotar = () =>{

    if(!rotate){
        setrotate(true);
        setlist(true);
        let img = document.getElementById('img-arrow');
        img.className += "img-arrow";
        
    }
    if(rotate){

        setrotate(false);
        setlist(false);
        let img = document.getElementsByClassName('img-arrow');
        for(let i = 0; i< img.length; i++){
            img[i].classList.remove("img-arrow");
        }
       
    }
}

const noseque = (id) =>{

    if(!condition){
    identificador = document.getElementById(id);
 
    setoption(identificador.innerHTML);
          
     let btn = document.getElementById('btn-op');
     btn.style.opacity = 100;
     let img = document.getElementById('img-mark');
     img.style.opacity = 100;
     let aux = identificador.id;
     setrotate(true);
     setlist(true);
     rotar();
    }
    if(condition){
        setfilter(false);
        setoption('');
        setcondition(false);
        handlefiltercontrol(false);
        let btn = document.getElementById('btn-op');
        let img = document.getElementById('img-mark');
               img.style.opacity = 0;
        btn.style.opacity = 0;
        setTimeout(()=>{
          identificador = document.getElementById(id);
    
          setoption(identificador.innerHTML);
       
          let btn = document.getElementById('btn-op');
         btn.style.opacity = 100;
          let img = document.getElementById('img-mark');
          img.style.opacity = 100;
          let aux = identificador.id;
          setrotate(true);
          setlist(true);
          rotar();
    
      },500) 
    }
}
const evaluationFilter = (id,valor) =>{
   
    if(valor === 1){
        axios.get('http://localhost:8000/Pago').then((res)=>{
         
                console.log(res.data);
                console.log(res.status);
                    setDb(res.data);
            
        }).catch((err)=>{
            console.log(err);
        })
       noseque(id);
    }
    if(valor === 2){
        axios.get('http://localhost:8000/Inpago').then((res)=>{
           
                console.log(res.data);
                console.log(res.status);
             setDb(res.data);
      
        }).catch((err)=>{
            console.log(err);
        })
       noseque(id);
    }

    if(valor === 3 ){

        axios.get('http://localhost:8000/bono-mensual-medium').then((res)=>{
           
            console.log(res.data);
            console.log(res.status);
         setDb(res.data);
  
    }).catch((err)=>{
        console.log(err);
    })
   noseque(id);

    }

    if(valor === 4 ){

        axios.get('http://localhost:8000/bono-mensual-basico').then((res)=>{
           
            console.log(res.data);
            console.log(res.status);
         setDb(res.data);
  
    }).catch((err)=>{
        console.log(err);
    })
   noseque(id);

    }

    if(valor === 5 ){

        axios.get('http://localhost:8000/bono-semanal').then((res)=>{
           
            console.log(res.data);
            console.log(res.status);
         setDb(res.data);
  
    }).catch((err)=>{
        console.log(err);
    })
   noseque(id);

    }

    if(valor === 6 ){

        axios.get('http://localhost:8000/bono-diario').then((res)=>{
           
            console.log(res.data);
            console.log(res.status);
         setDb(res.data);
  
    }).catch((err)=>{
        console.log(err);
    })
   noseque(id);

    }

    if(valor === 7 ){

        axios.get('http://localhost:8000/taller-intensivo').then((res)=>{
           
            console.log(res.data);
            console.log(res.status);
         setDb(res.data);
  
    }).catch((err)=>{
        console.log(err);
    })
   noseque(id);

    }

    if(valor === 8 ){

        axios.get('http://localhost:8000/bono-bichoo-feo').then((res)=>{
           
            console.log(res.data);
            console.log(res.status);
         setDb(res.data);
  
    }).catch((err)=>{
        console.log(err);
    })
   noseque(id);

    }

    if(valor === 9 ){

        axios.get('http://localhost:8000/').then((res)=>{
           
            console.log(res.data);
            console.log(res.status);
         setDb(res.data);
  
    }).catch((err)=>{
        console.log(err);
    })
   noseque(id);

    }
     
   

    setcondition(true);

}





const desfiltrar = () =>{
 setoption('');
 setcondition(false);
 let btn = document.getElementById('btn-op');
 btn.style.opacity = 0;
 let img = document.getElementById('img-mark');
 img.style.opacity = 0;
 handlefiltercontrol(false);
 setfilter(false);
 Navigate('/');
}

const sendserch = () =>{

    handleserchcontrol(false)
    
     let serch = document.getElementById('input').value;

        serchdata(serch);
        handleserchcontrol(true);

     cleaninput();


}
const cleaninput = () =>{
    let input = document.getElementById('input');
    input.value = null;
    
}





    return<>
       <div className="w-3/5 flex flex-row gap-4 mb-4">
    <div  className="div flex flex-row items-center justify-center gap-4" >
    {/* <input id="input" className="Serch" type="serch" name="keyserch" placeholder="Buscar"  />
    <NavLink to={'/serch'} className="btn-serch" onClick={sendserch}><img src="https://i.postimg.cc/156LKCqV/lupa.png" alt="" className="serch"/></NavLink> */}
    </div>
  
    <div className=" flex flex-row gap-2">

   <div className="filtro ">
   <li className="flex flex-row gap-2 w-full h-7 justify-center items-center" value="0" onClick={()=> rotar()}>Filtrar <img id="img-arrow" className="" src="https://i.postimg.cc/zDK2gLWq/arrow1.png" alt="" width={'14px'} /></li>
       { list ? 
       <div className="w-full ">
        <NavLink to={'/Pago'}><li id="Pago" value={1} className="w-full li-item text-center" onClick={()=>evaluationFilter('Pago',1)}>Pago</li></NavLink>

        <NavLink to={'/Inpago'}><li id="Inpago" value={2}  className="w-full li-item text-center" onClick={()=>evaluationFilter('Inpago',2)}>Inpago</li></NavLink>

        <NavLink to={'/bono-mensual-medium'}><li id="bono mensual medium" value={3}  className="w-full li-item text-center" onClick={()=>evaluationFilter('bono mensual medium',3)}>medium</li></NavLink> 

        <NavLink to={'/bono-mensual-basico'}><li id="bono mensual basico" value={4} className="w-full li-item text-center" onClick={()=>evaluationFilter('bono mensual basico',4)}>base</li></NavLink>

        <NavLink to={'bono-semanal'}><li id="bono semanal" value={5} className="w-full li-item text-center" onClick={()=>evaluationFilter('bono semanal',5)}>Diario</li></NavLink>

        <NavLink to={'/bono-diario'}><li id="bono diario" value={6} className="w-full li-item text-center" onClick={()=>evaluationFilter('bono diario',6)}>semanal</li></NavLink>

        <NavLink to={'/taller-intensivo'}><li id="taller intensivo" value={7} className="w-full li-item text-center" onClick={()=>evaluationFilter('taller intensivo',7)}>Taller</li></NavLink>

        <NavLink to={'/bono-bicho-feo'}><li id="bono bicho feo" value={8} className="w-full li-item text-center" onClick={()=>evaluationFilter('bono bicho feo',8)}>bicho</li></NavLink>

        <NavLink to={'/'}><li id="todo" value={9} className="w-full li-item text-center" onClick={()=>evaluationFilter('todo',9)}>Todo</li></NavLink>

        </div> :
        null }
       
   </div>


     <NavLink to={'/'} id="btn-op" className="option-selected" onClick={()=> desfiltrar()}> {option} <img id="img-mark" src="https://i.postimg.cc/Y9pV2Mn1/mark.png" alt="" className="img-mark" /></NavLink>
    </div>
     </div>
    </>
}

export default CrudFilter
