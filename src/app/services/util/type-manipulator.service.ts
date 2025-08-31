import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TypeManipulatorService {
  Str = {
    parseNumber: (str: string): number => {
      let ref = '.0123456789';
      let res = '';
      let periodInitialized = false;
      for (const char of str)
      {
        if (ref.includes(char)) {
          if (char === '.' && !periodInitialized)
          {
            res += char;
            periodInitialized = true;
            continue;
          }
          else if (char !== '.')
          {
            res += char;
          }
        }
      }
      if (res[res.length - 1] === '.') res.slice(res.length - 1, 1);
      else if (res[0] === '.') res = '0' + res;
      return Number(res);
    }
  }
}
