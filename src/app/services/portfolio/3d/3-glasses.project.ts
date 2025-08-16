import { ImgFullTemplateData } from "../../../utilities/project/project-templates/img-full/img-full.component";
import { ImgGridTemplateData } from "../../../utilities/project/project-templates/img-grid/img-grid.component";
import { PortfolioObjectType, Project } from "../portfolio.model";

export const project_3_glasses: Project = {
    objectType: PortfolioObjectType.Project,
    id: 'c-001-f-000-p-001',
    name: '3-glasses',
    title: '3 Glasses',
    icon: 'project-i01',
    thumbnail: 'assets/portfolio/3d/3-glasses/3-glasses-thumbnail.jpg',
    templates: [
        {
            templateName: 'app-img-full',
            templateData: {
                title: '3 Glasses in Blender',
                imgUrl: 'assets/portfolio/3d/3-glasses/3-glasses-s03.png'
            } as ImgFullTemplateData
        },
        {
            templateName: 'app-img-grid',
            templateData: {
                title: 'See More',
                imgUrls: [
                    'assets/portfolio/3d/3-glasses/3-glasses-s01.png',
                    'assets/portfolio/3d/3-glasses/3-glasses-s02.png',
                    'assets/portfolio/3d/3-glasses/3-glasses-s04.png',
                ]
            } as ImgGridTemplateData
        },
    ]
}