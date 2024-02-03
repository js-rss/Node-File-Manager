import { cp }from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path, { dirname, resolve } from 'node:path';
//import { stat } from 'node:fs';
import { cwd } from 'node:process';
import { printDir } from '../../index.js';

export const File__copy = async (src__in, src__out) => {
  const currentDir = cwd();
  const File__Src__Path = path.resolve(currentDir, src__in);
  const Full__Out__Path = path.resolve(src__out, src__in)
  const Folder__Target__Path = path.resolve(File__Src__Path, Full__Out__Path);
  console.log(File__Src__Path, 'src')
  console.log(Folder__Target__Path, 'tar')
/*const Folder_Src__Path = path.join(__dirname, '/files');
const Folder_Target__Path = path.join(__dirname, '/files_copy');
*/
try {
     /* if (await isExists(Folder_Target__Path) || !(await isExists(Folder_Src__Path))) {
      throw new Error('FS operation failed');
    }*/
      await cp(File__Src__Path, Folder__Target__Path, {
      recursive: true,force:false,errorOnExist:true
    })
  } catch (error) {
    console.error('FS operation failed');
  }
  setTimeout(printDir,125);
}
//await copy();





/*const isTargetPath = exists(Folder_Target__Path, (el) => {
    if (el) {
        console.error('FS operation failed targ');
      } else {
        
        
      }
  });

const isSrcPath = exists(Folder_Src__Path, (el) => {
    if (el) {
        
      } else {
        console.error('FS operation failed src');
      }
});*/
 



  /*fs.mkdir(Folder_Target__Path, { recursive: true }, (err) => {
    if (err) throw err;
  })

*/

/*
fs.stat(Folder_Src__Path, (err, stats) => {
    if (err) {
        console.error('FS operation failed');
        return;
    }
    
        fs.mkdir(copyFolder, {recursive: true}, (err) =>{
            if (err) throw err;
    
   });*/
/*fs.stat(Folder_Src__Path, (err, stats) => {
    if (!err) {
        console.error('FS operation failed');
        return;
    }
});*/






