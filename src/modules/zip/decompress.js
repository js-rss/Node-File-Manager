import fs from 'node:fs';
import path from 'node:path';
//import { fileURLToPath } from 'node:url';
import zlib from 'node:zlib';
import { cwd } from 'node:process';
import { printDir } from '../../index.js';

//const Valid__Path = fileURLToPath(import.meta.url);
//const __dirname = dirname(Valid__Path);

//const Input__Path = path.join(__dirname, 'files', 'archive.gz');
//const Output__Path = path.join(__dirname, 'files', 'fileToCompress.txt');

//const Read__Stream = fs.createReadStream(Input__Path);
//const Write__Stream = fs.createWriteStream(Output__Path);
//const De__Compress = zlib.createGunzip();

export const decompress = async (src__in, src__out) => {
   const currentDir = cwd();
   const name = src__in.replace('.br','');
   const Input__Path = path.resolve(currentDir, src__in);
   const Full__Out__Name = path.resolve(currentDir, src__out)
   const Output__Path = path.resolve(Full__Out__Name, name);
try{
   const Read__Stream = fs.createReadStream(Input__Path);
   const Write__Stream = fs.createWriteStream(Output__Path);
   const De__Compress = zlib.createBrotliDecompress();

   Read__Stream.pipe(De__Compress).pipe(Write__Stream);
   setTimeout(printDir,125);
}
     catch (error) {
     console.error('FS operation failed');
}
};

//await decompress();