import { ImgFullTemplateData } from "../../../utilities/project/project-templates/img-full/img-full.component";
import { ImgGridTemplateData } from "../../../utilities/project/project-templates/img-grid/img-grid.component";
import { PortfolioObjectType, Project } from "../portfolio.model";

export const project_cup_of_tea: Project = {
    objectType: PortfolioObjectType.Project,
    id: 'c-001-f-000-p-003',
    name: 'cup-of-tea',
    title: 'Cup of Tea',
    icon: 'project-i01',
    thumbnail: 'assets/portfolio/3d/cup-of-tea/glass-model-thumbnail.jpg',
    templates: [
        {
            templateName: 'app-img-full',
            templateData: {
                title: 'Cup of Tea in Blender',
                imgUrl: 'assets/portfolio/3d/cup-of-tea/glass-model-01-s05.png'
            } as ImgFullTemplateData
        },
        {
            templateName: 'app-img-grid',
            templateData: {
                title: 'See More',
                imgUrls: [
                    'assets/portfolio/3d/cup-of-tea/glass-model-01-s01.png',
                    'assets/portfolio/3d/cup-of-tea/glass-model-01-s02.png',
                    'assets/portfolio/3d/cup-of-tea/glass-model-01-s03.png',
                    'assets/portfolio/3d/cup-of-tea/glass-model-01-s04.png',
                    'assets/portfolio/3d/cup-of-tea/glass-model-01-s06.png',
                ]
            } as ImgGridTemplateData
        },
    ]
}