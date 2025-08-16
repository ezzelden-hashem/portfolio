type callback = () => void
export class ImgViewer
{
    private imgUrl: string;
    private canvas!: HTMLCanvasElement;
    private xBtn!: HTMLDivElement;
    private background!: HTMLDivElement;
    private worker: Worker | null = null;
    private callbackOnDestroy: callback;
    private isDestroyed: boolean = false;
    constructor(imgUrl: string, onDestroy: callback = () => {})
    {
        this.imgUrl = imgUrl;
        this.callbackOnDestroy = onDestroy;
        this.initComponents();
        if (typeof Worker !== undefined)
        {
            const offscreen = this.canvas.transferControlToOffscreen();
            this.worker = new Worker(new URL('./../img-viewer.worker.ts', import.meta.url), {type: 'module'});
            this.getImageBitMap(imgUrl).then(imgBitMap => 
            {
                this.worker?.postMessage(
                {
                    type: "offscreen",
                    offscreenCanvas: offscreen,
                    bitMap: imgBitMap,
                    windowWidth: window.innerWidth,
                    windowHeight: window.innerHeight
                }, 
                [offscreen]);
            });
            this.canvas.addEventListener('wheel', (e) =>
            {
                e.preventDefault();
                this.worker?.postMessage(
                {
                    type: 'zoom',
                    mouseX: e.offsetX,
                    mouseY: e.offsetY,
                    deltaY: e.deltaY,
                })
            });
            const sendMousePosition = (e: MouseEvent) => 
            {
                this.worker?.postMessage(
                {
                    type: 'pan',
                    mouseX: e.offsetX,
                    mouseY: e.offsetY
                })
            }
            this.canvas.addEventListener('mousedown', (e) =>
            {
                this.canvas.style.cursor = 'grabbing';
                this.worker?.postMessage(
                {
                    type: 'start-pan',
                    mouseX: e.offsetX,
                    mouseY: e.offsetY
                })
                this.canvas.addEventListener('mousemove', sendMousePosition)
            });
            this.canvas.addEventListener('mouseup', (event) =>
            {
                this.canvas.style.cursor = 'grab';
                this.canvas.removeEventListener('mousemove', sendMousePosition);
                this.worker?.postMessage({ type: 'end-pan' });
            });
            this.canvas.addEventListener('mouseleave', (event) =>
            {
                this.canvas.style.cursor = 'grab';
                this.canvas.removeEventListener('mousemove', sendMousePosition);
                this.worker?.postMessage({ type: 'end-pan' });
            });
        }
        else console.error('Web Workers are not supported in this environment.');
    }
    private async getImageBitMap(imgUrl: string)
    {
        return await fetch(imgUrl)
        .then(res => res.blob())
        .then(blob => createImageBitmap(blob));
    }
    private initComponents()
    {
        this.createElements()
        this.initCanvas();
        this.initXBtn();
        this.initBackground(
        [
            this.canvas,
            this.xBtn
        ]);
    }
    private createElements()
    {
        this.canvas = document.createElement('canvas');
        this.background = document.createElement('div');
        this.xBtn = document.createElement('div');
    }
    private initCanvas(): HTMLCanvasElement
    {
        this.canvas.id = 'imgViewer-canvas-id-' + Math.floor(Math.random() * 100000);
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.initCanvasStyle(this.canvas);
        return this.canvas
    }
    private initXBtn()
    {
        this.xBtn.id = 'imgViewer-xBtn-id-' + Math.floor(Math.random() * 100000);
        this.initXBtnStyle(this.xBtn);
    }
    private initBackground(elements: HTMLElement[])
    {
        this.background.id = 'imgViewer-background-id-' + Math.floor(Math.random() * 100000);
        this.initBackgroundStyle(this.background);
        for (const element of elements)
        {
            this.background.appendChild(element);
        }
        document.body.appendChild(this.background);
    }
    private initCanvasStyle(canvas: HTMLCanvasElement)
    {
        // canvas.style.backgroundColor = '#ff00003a';
        canvas.style.border = '1px solid #ffffff81';
        // canvas.style.boxShadow = '0 0 10px #ffffff7a';
        canvas.style.width = '95%';
        canvas.style.height = '95%';
        canvas.style.borderRadius = '20px';
        canvas.style.cursor = 'grab'
    }
    private initXBtnStyle(xBtn: HTMLDivElement)
    {
        xBtn.style.color = '#fff';
        xBtn.style.backgroundColor = '#0000007a';
        xBtn.onmousemove = () => 
        {
            
            xBtn.style.color = '#000';
            xBtn.style.backgroundColor = '#ffffff7a';
        }
        xBtn.onmouseleave = () => 
        {
            xBtn.style.color = '#fff';
            xBtn.style.backgroundColor = '#0000007a';
        }
        xBtn.style.width = '50px';
        xBtn.style.height = '50px';
        xBtn.style.borderRadius = '50px';
        xBtn.style.fontFamily = 'bahnschrift';
        xBtn.style.fontSize = '20px';
        xBtn.style.userSelect = 'none';
        xBtn.style.cursor = 'pointer';
        xBtn.style.position = 'absolute';
        xBtn.style.right = '30px';
        xBtn.style.top = '30px';
        xBtn.style.display = 'flex';
        xBtn.style.justifyContent = 'center';
        xBtn.style.alignItems = 'center';
        xBtn.innerHTML = 'X'
        xBtn.onclick = () => 
        {
            this.background.style.opacity = '0%'
            setTimeout(() => 
            {
                this.destroy();
            }, 300);
        }
    }
    private initBackgroundStyle(background: HTMLDivElement)
    {
        background.style.opacity = '0%';
        background.style.transition = '250ms';
        background.style.position = 'fixed';
        background.style.backgroundColor = '#000000e9';
        // background.style.backdropFilter = 'blur(20px)';
        background.style.top = '0';
        background.style.left = '0';
        background.style.display = 'flex';
        background.style.justifyContent = 'center';
        background.style.alignItems = 'center';
        background.style.width = '100vw';
        background.style.height = '100vh';
        background.style.zIndex = '1';
        setTimeout(() => 
        {
            background.style.opacity = '100%';
        }, 50);
    }
    destroy()
    {
        if (!this.isDestroyed)
        {
            this.worker?.terminate();
            this.worker = null;
            if (document.body.contains(this.background)) document.body.removeChild(this.background);
            this.callbackOnDestroy();
            this.isDestroyed = true;
        }
    }
}