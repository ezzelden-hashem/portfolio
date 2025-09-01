export const ExploreMoreSections: ExploreMoreObject[] = [
    {
        title: 'About Me',
        icon: 'profile-i01',
        description: 'Get to know me better, learn about my background, experiences, and the story behind my journey as a designer and web developer.',
        url: 'about'
    },
    {
        title: 'Skills',
        icon: 'skills-i01',
        description: 'Explore my toolbox, from front-end web development to creative design, see the technologies and tools I use to bring ideas to life.',
        url: 'skills'
    },
    {
        title: 'Contact Me',
        icon: 'contact-i01',
        description: `Let's connect! Whether you're interested in collaboration, have a project in mind, or just want to say hi, here's how you can reach me.`,
        url: 'contact'
    },
    {
        title: 'Portfolio',
        icon: 'portfolio-i01',
        description: 'See my work in action, A showcase of projects, designs, and experiments that highlight my capabilities and passion for building.',
        url: 'portfolio'
    },
]
export type ExploreMoreObject = {
    title: string;
    icon: string;
    description: string;
    url: string;
}