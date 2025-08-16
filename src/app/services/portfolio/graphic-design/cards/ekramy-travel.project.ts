import { ImgFullTemplateData } from "../../../../utilities/project/project-templates/img-full/img-full.component";
import { ImgGridTemplateData } from "../../../../utilities/project/project-templates/img-grid/img-grid.component";
import { PortfolioObjectType, Project } from "../../portfolio.model";

export const project_ekramy_travel: Project = {
    objectType: PortfolioObjectType.Project,
    id: 'c-002-f-001-p-001',
    name: 'ekramy-travel',
    title: 'Ekramy Travel',
    icon: 'project-i01',
    thumbnail: 'assets/portfolio/graphic-design/card/ekramy-wageeh-travel/ekramy-wageeh-travel-thumbnail.jpg',
    templates: [
        {
            templateName: 'app-img-full',
            templateData: {
                title: 'Ekramy Travel Business Card',
                imgUrl: 'assets/portfolio/graphic-design/card/ekramy-wageeh-travel/m06.jpg'
            } as ImgFullTemplateData,
        },
        {
            templateName: 'app-img-grid',
            templateData: {
                title: 'See More',
                imgUrls: [
                    'assets/portfolio/graphic-design/card/ekramy-wageeh-travel/m01.jpg',
                    'assets/portfolio/graphic-design/card/ekramy-wageeh-travel/m02.jpg',
                    'assets/portfolio/graphic-design/card/ekramy-wageeh-travel/ekramy-car-f-b-2.jpg',
                ]
            } as ImgGridTemplateData
        }
    ]
}