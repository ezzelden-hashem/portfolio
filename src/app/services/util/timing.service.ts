import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TimingService {
  delay: (ms: number) => Promise<void> = (ms: number) => {
    return new Promise(res => setTimeout(res, ms));
  }
}
