import { ImgGridTemplateData } from "../../../../utilities/project/project-templates/img-grid/img-grid.component";
import { PortfolioObjectType, Project } from "../../portfolio.model";

export const project_other_logos: Project = {
    objectType: PortfolioObjectType.Project,
    id: 'c-002-f-003-p-003',
    name: 'other-logos',
    title: 'Other Logos',
    icon: 'project-i01',
    thumbnail: 'assets/portfolio/graphic-design/logo/other-logos/other-logos-thumbnail.jpg',
    templates: [
        {
            templateName: 'app-img-grid',
            templateData: {
                title: 'Other Logos',
                imgUrls: [
                    'assets/portfolio/graphic-design/logo/other-logos/ans-group.jpg',
                    'assets/portfolio/graphic-design/logo/other-logos/ewl-logo-m1.jpg',
                    'assets/portfolio/graphic-design/logo/other-logos/mother-care.png',
                    'assets/portfolio/graphic-design/logo/other-logos/nye-group.jpg',
                ]
            } as ImgGridTemplateData
        },
    ]
}