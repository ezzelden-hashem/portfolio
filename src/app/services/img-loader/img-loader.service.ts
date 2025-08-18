import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImgLoaderService {
  load(url: string, onProgress: (percent: number) => void): Promise<string>
  {
    return new Promise((resolve, reject) => 
    {
      const xhr = new XMLHttpRequest();
      xhr.open('GET', url, true);
      xhr.responseType = 'blob';

      xhr.onprogress = (event) => 
      {
        if (event.lengthComputable)
        {
          const percent = Math.floor((event.loaded / event.total) * 100);
          onProgress(percent);
        }
      }

      xhr.onload = () => 
      {
        if (xhr.status === 200)
        {
          const blob = xhr.response;
          const objectUrl = URL.createObjectURL(blob);
          resolve(objectUrl);
        }
        else
        {
          reject(`Failed to load image: ${xhr.status}`);
        }
      }

      xhr.onerror = () => reject('Network error');
      xhr.send();
    });
  }
}
