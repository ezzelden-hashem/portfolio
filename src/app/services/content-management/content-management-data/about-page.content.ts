import { DescriptionCardData } from "../../../utilities/cards/description-card/description-card.component";

export const AboutPageContent = {
    quickInfoCard: {
        icon: 'O',
        title: 'Who am I',
        description: `I'm a self-driven learner and creator with a natural passion for improvement, innovation, and problem-solving. What motivates me is not just writing code, but re-thinking how things work and finding unique ways to make them better.
            My journey in programming started with pure curiosity and the urge to build things that serve real purposes. Despite facing challenges like limited resources and language barriers early on, I managed to develop resilience and learn how to grow in tough circumstances.
            So far, I've built small projects that solve personal problems and boost productivity — but the real achievement is the mindset I've developed: the ability to approach problems differently and think beyond the obvious.
            My vision is to reach new heights by creating solutions that seem impossible today. My mission is to use technology and creativity to help people, maximize productivity, and contribute to building a better, more efficient world.`
    } as DescriptionCardData,
    educationInfoCard: {
        icon: 'O',
        title: 'Education Journey',
        description: `My learning journey has always been shaped by a passion for logic, analysis, and the pursuit of clarity. From an early stage, I was deeply engaged with scientific and mathematical thinking—seeking not only to solve problems but also to question different approaches and refine them into simpler, more effective solutions. This mindset built the foundation of my critical and analytical skills.
            Later, I pursued my studies at Cairo University, Faculty of Agriculture, specializing in Animal Production. There, I gained extensive knowledge of agricultural sciences, farm management, and the dynamics of building and running diverse agricultural projects. Combined with my analytical approach, this background provided me with both the theoretical understanding and the practical perspective needed to evaluate, design, and manage complex systems with efficiency.`
    } as DescriptionCardData,
};
export const AboutSkillsCards: AboutSkillsObject[] = [
    {
        title: 'Simplicity First',
        icon: '3-stars-i01',
        description: 'I believe the best solutions are the simplest ones that get the job done.',
    },
    {
        title: 'Efficiency & Speed',
        icon: 'lightning-bolt-i01',
        description: 'I focus on performance and clean code that scales.',
    },
    {
        title: 'Creative Thinking',
        icon: 'lightbulb-i01',
        description: `I like turning complex challenges into elegant solutions.`,
    },
    {
        title: 'Continuous Learning',
        icon: 'infinity-loop-i01',
        description: 'I thrive on learning new technologies and improving every project.',
    },
];
export type AboutSkillsObject = {
    title: string;
    icon: string;
    description: string;
}
