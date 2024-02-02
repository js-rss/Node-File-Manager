import fs from 'node:fs';
import { fileURLToPath } from 'node:url';
import path, { dirname } from 'node:path';
import { cwd } from 'node:process';
import { printDir } from '../../index.js';

export const File__create = (Src) => {

const Valid__Path = fileURLToPath(import.meta.url);
const __dirname = dirname(Valid__Path); // __dirname like Common JS
//const File__Path = path.join(__dirname, '/files/fresh.txt');
//const Content = 'I am fresh and young';
const Content = '';
const currentDir = cwd();
const File__Path = path.resolve(currentDir, Src);


fs.writeFile(File__Path, Content, { flag: 'ax' }, (err) => {
   if (err) {
     console.error("FS operation failed");
      return;
   }
  });
  setTimeout(printDir,125);
}

//await create();