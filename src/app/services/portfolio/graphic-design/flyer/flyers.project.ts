import { ImgFullTemplateData } from "../../../../utilities/project/project-templates/img-full/img-full.component";
import { PortfolioObjectType, Project } from "../../portfolio.model";

export const project_flyers: Project = {
    objectType: PortfolioObjectType.Project,
    id: 'c-002-f-000-p-001',
    name: 'flyer',
    title: 'Flyers',
    icon: 'project-i01',
    thumbnail: 'assets/portfolio/graphic-design/flyer/flyer-thumbnail.jpg',
    templates: [
        {
            templateName: 'app-img-full',
            templateData: {
                title: 'Flyer 1',
                imgUrl: 'assets/portfolio/graphic-design/flyer/eklear-01.jpg'
            } as ImgFullTemplateData
        },
        {
            templateName: 'app-img-full',
            templateData: {
                title: 'Flyer 2',
                imgUrl: 'assets/portfolio/graphic-design/flyer/eklear-02.jpg'
            } as ImgFullTemplateData
        },
    ]
}