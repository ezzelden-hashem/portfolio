import { ImgFullTemplateData } from "../../../../utilities/project/project-templates/img-full/img-full.component";
import { ImgGridTemplateData } from "../../../../utilities/project/project-templates/img-grid/img-grid.component";
import { PortfolioObjectType, Project } from "../../portfolio.model";

export const project_rose_perfume: Project = {
    objectType: PortfolioObjectType.Project,
    id: 'c-002-f-001-p-004',
    name: 'rose-perfume',
    title: 'Rose Perfume',
    icon: 'project-i01',
    thumbnail: 'assets/portfolio/graphic-design/card/rose-perfume/rose-perfume-thumbnail.jpg',
    templates: [
        {
            templateName: 'app-img-full',
            templateData: {
                title: 'Rose Perfume Business Card',
                imgUrl: 'assets/portfolio/graphic-design/card/rose-perfume/m02.jpg'
            } as ImgFullTemplateData
        },
        {
            templateName: 'app-img-grid',
            templateData: {
                title: 'See More',
                imgUrls: [
                    'assets/portfolio/graphic-design/card/rose-perfume/m01.jpg',
                    'assets/portfolio/graphic-design/card/rose-perfume/m03.1.jpg',
                    'assets/portfolio/graphic-design/card/rose-perfume/m03.2.jpg',
                    'assets/portfolio/graphic-design/card/rose-perfume/m04.1.jpg',
                    'assets/portfolio/graphic-design/card/rose-perfume/m04.2.jpg',
                    'assets/portfolio/graphic-design/card/rose-perfume/m06.jpg',
                ]
            } as ImgGridTemplateData
        },
    ]
}