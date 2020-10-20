import { formatURL } from "xhr-mock/lib/MockURL";

function rowZero(str) {
  let max_count_zero=0;
  let itog=0;
  let l = str.length;
  for(let i = 0; i < str.length;i++){
    if(str[i]==="0") {max_count_zero++; };
    if (itog<max_count_zero) {itog=max_count_zero;}
    if( str[i]==="1") {max_count_zero=0;continue;}
  }

return itog;
}

window.rowZero = rowZero;

export default rowZero;
