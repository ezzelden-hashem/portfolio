export class TimeLine
{
    private static instance: TimeLine | null = null;
    private static refreshRate: number = 100;
    private static tasksQueue: AnimationTask[] = [];
    private static timeoutId: any;
    private static maxTasksPerFrame = 100;
    private constructor()
    {
        TimeLine.initMainThreadTimeLine();
    }
    requestTimeLineFrame(animationTask: AnimationTask)
    {
        TimeLine.tasksQueue.push(animationTask);
    }
    static getInstance(): TimeLine
    {
        if (!TimeLine.instance) TimeLine.instance = new TimeLine();
        return TimeLine.instance;
    }
    static setRefreshRate(fps: number)
    {
        TimeLine.refreshRate = fps;
        if (TimeLine.timeoutId) 
        {
            clearInterval(TimeLine.timeoutId);
            TimeLine.initMainThreadTimeLine();
        }
    }
    private static initMainThreadTimeLine()
    {
        const timeLineLoop = () => 
        {
            const tasksToRun = [...TimeLine.tasksQueue.splice(0, TimeLine.maxTasksPerFrame)];
            TimeLine.tasksQueue = 
            [...TimeLine.tasksQueue.splice(TimeLine.maxTasksPerFrame, TimeLine.tasksQueue.length)];
            TimeLine.runTasks(tasksToRun);
            TimeLine.timeoutId = setTimeout(timeLineLoop, 1000 / TimeLine.refreshRate);
        }
        timeLineLoop();
    }
    private static runTasks(tasks: AnimationTask[])
    {
        for (const task of tasks)
        {
            try
            {
                task();
            }
            catch (e)
            {
                console.log(e);
            }
        }
    }
}
export type AnimationTask = () => void;