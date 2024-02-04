import { userInfo } from 'node:os';
import { printDir } from "../../index.js";

export const user_name = async () => {
console.log(' ');
   console.log('System user name is: ', userInfo().username);
printDir();
}