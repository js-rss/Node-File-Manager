import { cp }from 'node:fs/promises';
import path from 'node:path';
import { cwd } from 'node:process';
import { File__remove } from './delete.js';

export const Cut__paste = async (src__in, src__out) => {
  const currentDir = cwd();
  const File__Src__Path = path.resolve(currentDir, src__in);
  const Full__Out__Path = path.resolve(src__out, src__in)
  const Folder__Target__Path = path.resolve(File__Src__Path, Full__Out__Path);
  //console.log(File__Src__Path, 'src')
  //console.log(Folder__Target__Path, 'tar')
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
    File__remove(src__in);
}