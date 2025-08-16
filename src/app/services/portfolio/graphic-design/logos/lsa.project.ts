import { ImgFullTemplateData } from "../../../../utilities/project/project-templates/img-full/img-full.component";
import { ImgGridTemplateData } from "../../../../utilities/project/project-templates/img-grid/img-grid.component";
import { PortfolioObjectType, Project } from "../../portfolio.model";

export const project_lsa: Project = {
    objectType: PortfolioObjectType.Project,
    id: 'c-002-f-003-p-002',
    name: 'lsa',
    title: 'LSA Logo',
    icon: 'project-i01',
    thumbnail: 'assets/portfolio/graphic-design/logo/lsa/lsa-thumbnail.jpg',
    templates: [
        {
            templateName: 'app-img-full',
            templateData: {
                title: 'LSA Logo',
                imgUrl: 'assets/portfolio/graphic-design/logo/lsa/lsa-logo-m2.jpg'
            } as ImgFullTemplateData
        },
        {
            templateName: 'app-img-grid',
            templateData: {
                title: 'See More',
                imgUrls: [
                    'assets/portfolio/graphic-design/logo/lsa/lsa-logo-m3.jpg',
                    'assets/portfolio/graphic-design/logo/lsa/lsa-logo.jpg',
                    'assets/portfolio/graphic-design/logo/lsa/lsa_logo_1.jpg',
                ]
            } as ImgGridTemplateData
        },
    ]
}