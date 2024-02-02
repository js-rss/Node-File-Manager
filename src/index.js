import os, { homedir } from 'node:os';
import process, {chdir, cwd } from 'node:process';
import readline from 'node:readline';
import path from 'node:path';
import { change__Dir } from './navigation/changeDir.js';
import { listItems } from './navigation/showAll.js';


const homeDir = os.homedir();
process.chdir(homeDir);

const Arr_username = process.argv.slice(2);
let Cur_name = '';
let temp_name = '';
if(Arr_username.at(-1) !== '--username=Anonim') {
  temp_name = Arr_username.at(-1).split('=')
  Cur_name = temp_name.at(-1);
}
else{
    Cur_name = 'Anonim';
}
/*console.log(Cur_name,'cur')
console.log(temp_name,'name')
console.log(Arr_username)
console.log(Arr_username.at(-1),'at')
*/
console.log(`Welcome to the File Manager, ${Cur_name}!`);

const input = process.stdin;
const output = process.stdout 

const rl = readline.createInterface({ input, output });

    //pipe(stdout));
   export function printDir(){
        console.log(`You are currently in ${cwd()}`);
        rl.prompt();
    };
    printDir(); 
function printError(){
    console.log('Operation failed');
}
rl.on('line', (input) => {
//console.log(input);
  const Input__Line = input.toLocaleLowerCase().trimStart() || undefined;
//console.log(Input__Line);
   //if(!Input__Line) printDir();
   //if(Input__Line == '.exit') rl.close();
//console.log(Input__Line);
switch (Input__Line){
    case '.exit':
          rl.close();
    break;     
    case 'ls':
        listItems()
    break;
 
 
 
    default:
      console.log('Invalid input');
      printDir();
      break;


//if(Input__Line.includes('cd')) {

 
  }
})
    rl.on('close', () => {
        console.log(`\nThank you for using File Manager, ${Cur_name}, goodbye!`);
    })