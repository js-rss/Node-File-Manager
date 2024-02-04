import { eol } from "./eol.js";
import { printDir } from "../../index.js";

export const all__os = async (a) => {

        const dash = a[0] + a[1];   
        
        if (dash !== '--') {
          console.error('Invalid input');
        }

        const Os__Item = a.slice(2);
        //console.log(Os__Item)
        switch (Os__Item){
            case 'EOL':
                  eol();
            break;     
           
      




      default:
      console.log('Invalid input');
      printDir();
      break;
}
}