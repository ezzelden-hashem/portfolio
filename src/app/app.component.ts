import { AfterViewInit, Component, HostListener, inject, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { MainHeaderComponent } from "./header/main-header/main-header.component";
import { NavMenuPageComponent } from "./header/nav-menu-page/nav-menu-page.component";
import { FloatHeaderComponent } from "./header/float-header/float-header.component";
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MainHeaderComponent, NavMenuPageComponent, FloatHeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit, OnInit {
  router = inject(Router);
  @HostListener('window:resize', ['$event']) onResize = (event: Event) => {
    this.worker.postMessage({
      type: "resize",
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight,
    })
  }
  offscreen!: OffscreenCanvas;
  
  worker!: Worker;
  ngAfterViewInit() {
    const canvas = this.getInitCanvas()
    document.body.appendChild(canvas);
    this.offscreen = canvas.transferControlToOffscreen();
    if (typeof Worker !== undefined)
    {
      this.worker = new Worker(new URL('./circle-canvas-animation.worker.ts', import.meta.url), {type: 'module'});
      this.worker.postMessage({
        type: "offscreen",
        offscreenCanvas: this.offscreen,
        windowWidth: window.innerWidth,
        windowHeight: window.innerHeight
      }, [this.offscreen]);
    }
    else console.error('Web Workers are not supported in this environment.');
  }
  ngOnInit()
  {
    
  }
  getInitCanvas()
  {
    const canvasElement: HTMLCanvasElement = document.createElement('canvas');
    canvasElement.id = 'circle-canvas-animation-' + Math.floor(Math.random() * 100000);
    canvasElement.width = window.innerWidth;
    canvasElement.height = window.innerHeight;
    canvasElement.style.position = 'fixed';
    canvasElement.style.top = '0';
    canvasElement.style.left = '0';
    canvasElement.style.width = '100vw';
    canvasElement.style.height = '100vh';
    canvasElement.style.zIndex = '-1';
    return canvasElement;
  }
}
