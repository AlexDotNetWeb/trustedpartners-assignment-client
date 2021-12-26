import { Pipe, PipeTransform } from '@angular/core';
import { MainService } from '../services/main.service';

@Pipe({
  name: 'highlight'
})
export class HighlightPipe implements PipeTransform {
  constructor(public mainService:MainService){

  }
  transform(value: string, search: string): string {
    
    const re = new RegExp(search, 'gi');
    const valueWithYellowBG =  value.replace(re, "<span class='yelow-bg'>" + search + "</span>");
    return valueWithYellowBG;

}
}
