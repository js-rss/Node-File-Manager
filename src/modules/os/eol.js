import { EOL } from 'node:os';
import { printDir } from "../../index.js";

export const eol = async () => {
   console.log(' ');
   console.log(JSON.stringify(EOL));
   printDir();

}