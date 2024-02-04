import { cpus } from 'node:os';
import { printDir } from "../../index.js";

export const cpus_os = async () => {
   console.log(' ');
   let item = []
   const Arr = cpus();
   for(let i = 0;i<Arr.length;i++){
     //console.log(i+1, Arr[i].model, Arr[i].times.user)
     //console.log(typeof Arr[i])
     item.push({ Model: Arr[i].model, Time_user: Arr[i].times.user,Time_nice: Arr[i].times.nice, Time_sys: Arr[i].times.sys, Time_idle: Arr[i].times.idle, Time_irq: Arr[i].times.irq})
    }
  console.table([...item]);
    
      //console.table(i, Arr[i].model,Arr[i].speed,Arr[i].times.irq)
       
    
    //console.table(cpusArr[0],[1],[2]);
    
   printDir();
}