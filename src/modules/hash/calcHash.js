import crypto from 'node:crypto';
import path from 'node:path';
//import { fileURLToPath } from 'node:url';
import fs from 'node:fs/promises';
import { stdout } from 'node:process';
import { cwd } from 'node:process';
import { printDir } from '../../index.js';


//const Valid__Path = fileURLToPath(import.meta.url);
//const __dirname = dirname(Valid__Path);
//const Src__Path = path.join(__dirname, 'files','fileToCalculateHashFor.txt');

export const calculateHash = async (Src) => {
    const currentDir = cwd();
    try{
    const File__Path = path.resolve(currentDir, Src);
    const Secret = await fs.readFile(File__Path);
    const Hash__256 = crypto.createHash("sha256", Secret);
    stdout.write(Hash__256.update(Secret).digest("hex"));
    setTimeout(printDir,125);
    }
    catch (err) {
        console.error("FS operation failed");
    }
};

//await calculateHash();