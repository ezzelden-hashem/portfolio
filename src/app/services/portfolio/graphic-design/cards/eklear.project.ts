import { ImgFullTemplateData } from "../../../../utilities/project/project-templates/img-full/img-full.component";
import { PortfolioObjectType, Project } from "../../portfolio.model";

export const project_eklear: Project = {
    objectType: PortfolioObjectType.Project,
    id: 'c-002-f-001-p-005',
    name: 'eklear',
    title: 'Eklear Bakery',
    icon: 'project-i01',
    thumbnail: 'assets/portfolio/graphic-design/card/eklear/eklear-thumbnail.jpg',
    templates: [
        {
            templateName: 'app-img-full',
            templateData: {
                title: 'Eklear Bakery Business Card',
                imgUrl: 'assets/portfolio/graphic-design/card/eklear/eklear.jpg'
            } as ImgFullTemplateData
        }
    ]
}