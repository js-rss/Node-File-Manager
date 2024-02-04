import fs from 'node:fs/promises';
import path, { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { cwd } from 'node:process';
import { printDir } from '../../index.js';

//const Valid__Path = fileURLToPath(import.meta.url);
//const __dirname = dirname(Valid__Path);
//const Removing__File = path.join(__dirname, 'files', 'fileToRemove.txt');


export const File__remove = async (Src) => {
    const currentDir = cwd();
    const File__Path = path.resolve(currentDir, Src);
    try {
        await fs.unlink(File__Path)
    }
    catch {
        console.error('FS operation failed');
    }
    setTimeout(printDir,125);
};

//await remove();