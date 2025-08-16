import { ImgGridTemplateData } from "../../../../utilities/project/project-templates/img-grid/img-grid.component";
import { PortfolioObjectType, Project } from "../../portfolio.model";

export const project_free_design: Project = {
    objectType: PortfolioObjectType.Project,
    id: 'c-002-f-000-p-002',
    name: 'free-design',
    title: 'Free Design',
    icon: 'project-i01',
    thumbnail: 'assets/portfolio/graphic-design/free-design/free-design-thumbnail.jpg',
    templates: [
        {
            templateName: 'app-img-grid',
            templateData: {
                title: 'Free Design',
                imgUrls: [
                    'assets/portfolio/graphic-design/free-design/banner_1_1.jpg',
                    'assets/portfolio/graphic-design/free-design/glassmorphism.jpg',
                    'assets/portfolio/graphic-design/free-design/sourat-alekhlas.jpg',
                ]
            } as ImgGridTemplateData
        },
    ]
}