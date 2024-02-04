import { arch } from 'node:os';
import { printDir } from "../../index.js";

export const architecture = async () => {
   console.log(' ');
       console.log('Architecture is: ',arch());
    printDir();
}