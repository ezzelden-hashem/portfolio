import { ImgFullTemplateData } from "../../../../utilities/project/project-templates/img-full/img-full.component";
import { ImgGridTemplateData } from "../../../../utilities/project/project-templates/img-grid/img-grid.component";
import { PortfolioObjectType, Project } from "../../portfolio.model";

export const project_elmaarof: Project = {
    objectType: PortfolioObjectType.Project,
    id: 'c-002-f-002-p-001',
    name: 'elmaarof',
    title: 'Elmaarof Notebook',
    icon: 'project-i01',
    thumbnail: 'assets/portfolio/graphic-design/book-cover/elma3rof/elma3rof-note-book-thumbnail.jpg',
    templates: [
        {
            templateName: 'app-img-full',
            templateData: {
                title: 'Elmaarof en Francais',
                imgUrl: 'assets/portfolio/graphic-design/book-cover/elma3rof/elma3rof-note-book-s03.jpg'
            } as ImgFullTemplateData
        },
        {
            templateName: 'app-img-grid',
            templateData: {
                title: 'See More',
                imgUrls: [
                    'assets/portfolio/graphic-design/book-cover/elma3rof/elma3rof-note-book-s01.jpg',
                    'assets/portfolio/graphic-design/book-cover/elma3rof/elma3rof-note-book-s02.jpg',
                ]
            } as ImgGridTemplateData
        },
    ]
}