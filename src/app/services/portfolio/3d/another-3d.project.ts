import { ImgFullTemplateData } from "../../../utilities/project/project-templates/img-full/img-full.component";
import { ImgGridTemplateData } from "../../../utilities/project/project-templates/img-grid/img-grid.component";
import { PortfolioObjectType, Project } from "../portfolio.model";

export const project_another_3d: Project = {
    objectType: PortfolioObjectType.Project,
    id: 'c-001-f-000-p-004',
    name: 'another-3d',
    title: 'Another 3D',
    icon: 'project-i01',
    thumbnail: 'assets/portfolio/3d/another-3d/fruits-and-drinks-thumbnail.jpg',
    templates: [
        {
            templateName: 'app-img-full',
            templateData: {
                title: '3D Collection',
                imgUrl: 'assets/portfolio/3d/another-3d/fruits-and-drinks-s02.png'
            } as ImgFullTemplateData
        },
        {
            templateName: 'app-img-grid',
            templateData: {
                title: 'See More',
                imgUrls: [
                    'assets/portfolio/3d/another-3d/fruits-and-drinks-s01.png',
                    'assets/portfolio/3d/another-3d/fur-and-soft-body.png',
                ]
            } as ImgGridTemplateData
        },
    ]
}