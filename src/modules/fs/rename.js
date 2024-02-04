import fs from 'node:fs/promises';
//import { fileURLToPath } from 'node:url';
import path from 'node:path';
import { cwd } from 'node:process';
import { printDir } from '../../index.js';

//const Valid__Path = fileURLToPath(import.meta.url);
//const __dirname = dirname(Valid__Path);
//const File_Src__Path = path.resolve(__dirname, 'files', 'wrongFilename.txt');
//const Renamed__File__Path = path.resolve(__dirname, 'files','properFilename.md');

export const File__rename = async (src__in, src__out) => {
    const currentDir = cwd();
    const File_Src__Path = path.resolve(currentDir, src__in);
    const Renamed__File__Path = path.resolve(currentDir, src__out);
    //console.log(src__in,'in')
    //console.log(src__out,'out')
    //console.log(currentDir,File_Src__Path, Renamed__File__Path,'ooo')
    try {
        await fs.rename(File_Src__Path, Renamed__File__Path)
    }
    catch {
        console.error('FS operation failed');
    }
    setTimeout(printDir,125);
};

//await rename();