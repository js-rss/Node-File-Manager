import path from "path";
import { chdir, cwd } from "process";
import { printDir } from "../index.js";

export async function change__Dir(input){
        const isAbsolute = path.isAbsolute(input);
        const currentDir = cwd();
        isAbsolute ? chdir(input) : chdir(path.resolve(currentDir, input));
        //console.log(`You are currently in ${cwd()}`);
    }