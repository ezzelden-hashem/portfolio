import { ImgFullTemplateData } from "../../../../utilities/project/project-templates/img-full/img-full.component";
import { PortfolioObjectType, Project } from "../../portfolio.model";

export const project_mo7a: Project = {
    objectType: PortfolioObjectType.Project,
    id: 'c-002-f-000-p-004',
    name: 'mo7a',
    title: 'Mo7a Restaurant',
    icon: 'project-i01',
    thumbnail: 'assets/portfolio/graphic-design/restaurants-menu/mo7a/mo7a-thumbnail.jpg',
    templates: [
        {
            templateName: 'app-img-full',
            templateData: {
                title: 'Menu Front',
                imgUrl: 'assets/portfolio/graphic-design/restaurants-menu/mo7a/1.jpg'
            } as ImgFullTemplateData
        },
        {
            templateName: 'app-img-full',
            templateData: {
                title: 'Menu Back',
                imgUrl: 'assets/portfolio/graphic-design/restaurants-menu/mo7a/2.jpg'
            } as ImgFullTemplateData
        },
    ]
}