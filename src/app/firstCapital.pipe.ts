import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:'firstCapital'
})
export class firstCapitalPipe implements PipeTransform {
    transform(value: string) {
       let newStr=value.trim();
        return newStr[0].toUpperCase()+newStr.slice(1);
    }

}