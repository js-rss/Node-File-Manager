import { cwd } from "node:process";
import { printDir } from "../index.js";
import fs from "node:fs";

export function listItems() {
  const currentDir = cwd();
  const folders = [];
  const files = [];
  fs.readdir(currentDir, (err, data) => {
    if (err) {
      console.log("error from ls");
      return;
    }
    data.forEach((item) => {
      //console.log(item,'fff')
      if (fs.lstatSync(item).isDirectory()) {
        folders.push({ Name: item, Type: "directory" });
      }
      if (fs.lstatSync(item).isFile()) {
        files.push({ Name: item, Type: "file" });
      }
    });

    const sorty = (a, b) => a.Name > b.Name;
    const Dir__Sorted = folders.sort(sorty);
    const Fil__Sorted = folders.sort(sorty);
    const Len =
      Dir__Sorted.length > Fil__Sorted.length
        ? Dir__Sorted.length
        : Fil__Sorted.length;
    console.log("");
    //console.table([...Dir__Sorted, ...Fil__Sorted]);
    console.table([...folders.sort(sorty), ...files.sort(sorty)]);
  });
  setTimeout(printDir, 100);
}
