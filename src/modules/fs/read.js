import fs from 'node:fs';
import { fileURLToPath } from 'node:url';
import path, { dirname } from 'node:path';
import { cwd } from 'node:process';
import { printDir } from '../../index.js';

export const File__read = (Src) => {

const Valid__Path = fileURLToPath(import.meta.url);
const __dirname = dirname(Valid__Path);
//const File__Path = path.join(__dirname, '/files/fileToRead.txt');
const currentDir = cwd();
const File__Path = path.resolve(currentDir, Src);

const Read__Data = fs.createReadStream( File__Path, 'utf-8');
let out = '';

Read__Data.on('data', (data) => { out += data; });
Read__Data.on('end', () => process.stdout.write(out));
Read__Data.on('error', (error) => console.error('FS operation failed'));
setTimeout(printDir,125);
};

//await read();