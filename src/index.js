import os, { homedir } from 'node:os';
import process, { cwd } from 'node:process';
import readline from 'node:readline';

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
    function printDir(){
        console.log(`You are currently in ${cwd()}`);
        rl.prompt();
    };
    printDir();
rl.on('line', (input) => {


})
    rl.on('close', () => {
        console.log(`\nThank you for using File Manager, ${Cur_name}, goodbye!`);
    })