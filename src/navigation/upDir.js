
import path from "path";
import { chdir, cwd } from "process";
import { printDir } from "../index.js";
import os from 'node:os';


const homeDir = os.homedir();
process.chdir(homeDir);

export function Up__Dir(){
    
    const currentDir = cwd();
    //console.log(currentDir,homeDir)
    if(currentDir == homeDir) {
        process.chdir = homeDir;
        printDir();
    }else{
    chdir(path.parse(currentDir).dir);
    printDir();
    }
    }