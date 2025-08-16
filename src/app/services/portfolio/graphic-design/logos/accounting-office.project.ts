import { ImgFullTemplateData } from "../../../../utilities/project/project-templates/img-full/img-full.component";
import { ImgGridTemplateData } from "../../../../utilities/project/project-templates/img-grid/img-grid.component";
import { PortfolioObjectType, Project } from "../../portfolio.model";

export const project_accounting_office: Project = {
    objectType: PortfolioObjectType.Project,
    id: 'c-002-f-003-p-001',
    name: 'accounting-office',
    title: 'Accounting Office',
    icon: 'project-i01',
    thumbnail: 'assets/portfolio/graphic-design/logo/accounting_office/accounting_office-thumbnail.jpg',
    templates: [
        {
            templateName: 'app-img-full',
            templateData: {
                title: 'Accounting Office Logo',
                imgUrl: 'assets/portfolio/graphic-design/logo/accounting_office/accounting_office_m1.jpg'
            } as ImgFullTemplateData
        },
        {
            templateName: 'app-img-grid',
            templateData: {
                title: 'See More',
                imgUrls: [
                    'assets/portfolio/graphic-design/logo/accounting_office/accounting_office_m2.jpg',
                    'assets/portfolio/graphic-design/logo/accounting_office/accounting_office_m3.jpg',
                ]
            } as ImgGridTemplateData
        },
    ]
}