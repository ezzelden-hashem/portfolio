import { ImgFullTemplateData } from "../../../../utilities/project/project-templates/img-full/img-full.component";
import { ImgGridTemplateData } from "../../../../utilities/project/project-templates/img-grid/img-grid.component";
import { PortfolioObjectType, Project } from "../../portfolio.model";

export const project_eltamayoz: Project = {
    objectType: PortfolioObjectType.Project,
    id: 'c-002-f-002-p-002',
    name: 'eltamayoz',
    title: 'Eltamayoz Notebook',
    icon: 'project-i01',
    thumbnail: 'assets/portfolio/graphic-design/book-cover/eltamayoz/eltamayoz-thumbnail.jpg',
    templates: [
        {
            templateName: 'app-img-full',
            templateData: {
                title: 'Eltamayoz Notebook Cover Design',
                imgUrl: 'assets/portfolio/graphic-design/book-cover/eltamayoz/eltamayoz-s04.jpg'
            } as ImgFullTemplateData
        },
        {
            templateName: 'app-img-grid',
            templateData: {
                title: 'See More',
                imgUrls: [
                    'assets/portfolio/graphic-design/book-cover/eltamayoz/eltamayoz-s01.jpg',
                    'assets/portfolio/graphic-design/book-cover/eltamayoz/eltamayoz-s03.jpg',
                ]
            } as ImgGridTemplateData
        },
    ]
}