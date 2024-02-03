import os from 'node:os';
import process, { cwd } from 'node:process';
import readline from 'node:readline';
import { change__Dir } from './navigation/changeDir.js';
import { listItems } from './navigation/showAll.js';
import { Up__Dir } from './navigation/upDir.js';
import { File__read } from './modules/fs/read.js';
import { File__create } from './modules/fs/create.js';
import { File__rename } from './modules/fs/rename.js';
import { File__remove } from './modules/fs/delete.js';
import { File__copy } from './modules/fs/copy.js';

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
        console.log(`\n You are currently in ${cwd()}`);
        rl.prompt();
    };
    printDir(); 
function printError(){
    console.log('Operation failed');
}


rl.on('line', (input) => {
//console.log(input);
  const Input__1__Arg = input.trimStart().split(' ')[0] || '';
  const Input__2__Arg = input.trimStart().split(' ')[1] || '';
  const Input__3__Arg = input.trimStart().split(' ')[2] || '';
  console.log(Input__2__Arg)
//console.log(Input__Line);
   //if(!Input__Line) printDir();
   //if(Input__Line == '.exit') rl.close();
//console.log(Input__Line);

switch (Input__1__Arg){
    case '.exit':
          rl.close();
    break;     
    case 'ls':
        listItems();
    break;
    case 'cd':
          change__Dir(Input__2__Arg).catch(() => printError()).finally(() => printDir()); 
    break;
    case 'up':
      Up__Dir();
    break;
    case 'cat':
      File__read(Input__2__Arg);
    break;
    case 'add':
      File__create(Input__2__Arg);
    break;
    case 'rn':
      File__rename(Input__2__Arg, Input__3__Arg);
    break;
    case 'rm':
      File__remove(Input__2__Arg);
    break;
    case 'cp':
      File__copy(Input__2__Arg, Input__3__Arg);
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