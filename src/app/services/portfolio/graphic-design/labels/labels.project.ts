import { ImgFullTemplateData } from "../../../../utilities/project/project-templates/img-full/img-full.component";
import { ImgGridTemplateData } from "../../../../utilities/project/project-templates/img-grid/img-grid.component";
import { PortfolioObjectType, Project } from "../../portfolio.model";

export const project_labels: Project = {
    objectType: PortfolioObjectType.Project,
    id: 'c-002-f-000-p-005',
    name: 'labels',
    title: 'Labels',
    icon: 'project-i01',
    thumbnail: 'assets/portfolio/graphic-design/labels/labels-thumbnail.jpg',
    templates: [
        {
            templateName: 'app-img-full',
            templateData: {
                title: 'Label Design',
                imgUrl: 'assets/portfolio/graphic-design/labels/01.jpg'
            } as ImgFullTemplateData
        },
        {
            templateName: 'app-img-grid',
            templateData: {
                title: 'See More',
                imgUrls: [
                    'assets/portfolio/graphic-design/labels/02.jpg',
                    'assets/portfolio/graphic-design/labels/03.jpg',
                    'assets/portfolio/graphic-design/labels/04.jpg',
                    'assets/portfolio/graphic-design/labels/05.jpg',
                    'assets/portfolio/graphic-design/labels/06.jpg',
                    'assets/portfolio/graphic-design/labels/07.jpg',
                    'assets/portfolio/graphic-design/labels/08.jpg',
                    'assets/portfolio/graphic-design/labels/09.jpg',
                    'assets/portfolio/graphic-design/labels/10.jpg',
                    'assets/portfolio/graphic-design/labels/11.jpg',
                ]
            } as ImgGridTemplateData
        },
    ]
}