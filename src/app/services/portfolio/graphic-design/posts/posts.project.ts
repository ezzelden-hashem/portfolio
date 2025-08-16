import { ImgGridTemplateData } from "../../../../utilities/project/project-templates/img-grid/img-grid.component";
import { PortfolioObjectType, Project } from "../../portfolio.model";

export const project_posts: Project = {
    objectType: PortfolioObjectType.Project,
    id: 'c-002-f-000-p-003',
    name: 'posts',
    title: 'Posts',
    icon: 'project-i01',
    thumbnail: 'assets/portfolio/graphic-design/post/post-thumbnail.jpg',
    templates: [
        {
            templateName: 'app-img-grid',
            templateData: {
                title: 'Posts',
                imgUrls: [
                    'assets/portfolio/graphic-design/post/ad1_f01.jpg',
                    'assets/portfolio/graphic-design/post/HonoringCeremony-1ba.jpg',
                    'assets/portfolio/graphic-design/post/Inspection-and-testing-of-drinking-water-p1.jpg',
                    'assets/portfolio/graphic-design/post/post 3.jpg',
                    'assets/portfolio/graphic-design/post/social-media-posts-ar.jpg',
                    'assets/portfolio/graphic-design/post/spirogym.jpg',
                ]
            } as ImgGridTemplateData
        }
    ]
}