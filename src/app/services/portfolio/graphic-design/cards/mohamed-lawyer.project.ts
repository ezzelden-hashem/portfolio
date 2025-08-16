import { ImgFullTemplateData } from "../../../../utilities/project/project-templates/img-full/img-full.component";
import { ImgGridTemplateData } from "../../../../utilities/project/project-templates/img-grid/img-grid.component";
import { PortfolioObjectType, Project } from "../../portfolio.model";

export const project_mohamed_lawyer: Project = {
    objectType: PortfolioObjectType.Project,
    id: 'c-002-f-001-p-002',
    name: 'mohamed-lawyer',
    title: 'Mohamed Lawyer',
    icon: 'project-i01',
    thumbnail: 'assets/portfolio/graphic-design/card/mohamed-mustafa-lawyer/mohamed-mustafa-lawyer-thumbnail.jpg',
    templates: [
        {
            templateName: 'app-img-full',
            templateData: {
                title: 'Mohamed Lawyer Business Card',
                imgUrl: 'assets/portfolio/graphic-design/card/mohamed-mustafa-lawyer/m06.jpg',
            } as ImgFullTemplateData
        },
        {
            templateName: 'app-img-grid',
            templateData: {
                title: 'See More',
                imgUrls: [
                    'assets/portfolio/graphic-design/card/mohamed-mustafa-lawyer/m03.1.jpg',
                    'assets/portfolio/graphic-design/card/mohamed-mustafa-lawyer/m04.1.jpg',
                ]
            } as ImgGridTemplateData
        },
        
    ]
}