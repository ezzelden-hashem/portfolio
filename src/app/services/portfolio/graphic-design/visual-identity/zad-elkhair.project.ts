import { ImgFullTemplateData } from "../../../../utilities/project/project-templates/img-full/img-full.component";
import { ImgGridTemplateData } from "../../../../utilities/project/project-templates/img-grid/img-grid.component";
import { PortfolioObjectType, Project } from "../../portfolio.model";

export const project_zad_elkhair: Project = {
    objectType: PortfolioObjectType.Project,
    id: 'c-002-f-004-p-002',
    name: 'zad-elkhair',
    title: 'Zad Elkhair',
    icon: 'project-i01',
    thumbnail: 'assets/portfolio/graphic-design/visual-identity/zad-elkhair/zad-elkhair-thumbnail.jpg',
    templates: [
        {
            templateName: 'app-img-full',
            templateData: {
                title: 'Zad Elkhair Visual Identity',
                imgUrl: 'assets/portfolio/graphic-design/visual-identity/zad-elkhair/banner_2.jpg'
            } as ImgFullTemplateData
        },
        {
            templateName: 'app-img-grid',
            templateData: {
                title: 'See More',
                imgUrls: [
                    'assets/portfolio/graphic-design/visual-identity/zad-elkhair/logo_2_m1.jpg',
                    'assets/portfolio/graphic-design/visual-identity/zad-elkhair/logo_2_m2.jpg',
                    'assets/portfolio/graphic-design/visual-identity/zad-elkhair/logo_3_m1.jpg',
                    'assets/portfolio/graphic-design/visual-identity/zad-elkhair/logo_3_m2.jpg',
                ]
            } as ImgGridTemplateData
        },
    ]
}