import { homedir } from 'node:os';
import { printDir } from "../../index.js";

export const home_dir = async () => {
   console.log(' ');
       console.log('Home directory is: ', homedir());
    printDir();
}