import { ImgFullTemplateData } from "../../../../utilities/project/project-templates/img-full/img-full.component";
import { ImgGridTemplateData } from "../../../../utilities/project/project-templates/img-grid/img-grid.component";
import { PortfolioObjectType, Project } from "../../portfolio.model";

export const project_card_design: Project = {
    objectType: PortfolioObjectType.Project,
    id: 'c-002-f-001-p-003',
    name: 'card-design',
    title: 'Business Card Design',
    icon: 'project-i01',
    thumbnail: 'assets/portfolio/graphic-design/card/card-design/card-design-thumbnail.jpg',
    templates: [
        {
            templateName: 'app-img-full',
            templateData: {
                title: 'Business Card Design',
                imgUrl: 'assets/portfolio/graphic-design/card/card-design/c-01.jpg'
            } as ImgFullTemplateData
        },
        {
            templateName: 'app-img-grid',
            templateData: {
                title: 'See More',
                imgUrls: [
                    'assets/portfolio/graphic-design/card/card-design/c-02.jpg',
                    'assets/portfolio/graphic-design/card/card-design/c-03.jpg',
                    'assets/portfolio/graphic-design/card/card-design/c-04.jpg',
                    'assets/portfolio/graphic-design/card/card-design/c-05.jpg',
                    'assets/portfolio/graphic-design/card/card-design/c-06.jpg',
                    'assets/portfolio/graphic-design/card/card-design/c-07.jpg',
                    'assets/portfolio/graphic-design/card/card-design/c-08.jpg',
                    'assets/portfolio/graphic-design/card/card-design/c-09.jpg',
                    'assets/portfolio/graphic-design/card/card-design/c-10.jpg',
                    'assets/portfolio/graphic-design/card/card-design/c-11.jpg',
                    'assets/portfolio/graphic-design/card/card-design/c-12.jpg',
                    'assets/portfolio/graphic-design/card/card-design/c-13.jpg',
                    'assets/portfolio/graphic-design/card/card-design/c-14.jpg',
                ]
            } as ImgGridTemplateData
        },
    ]
}