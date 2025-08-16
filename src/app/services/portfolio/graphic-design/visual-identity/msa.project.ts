import { ImgFullTemplateData } from "../../../../utilities/project/project-templates/img-full/img-full.component";
import { ImgGridTemplateData } from "../../../../utilities/project/project-templates/img-grid/img-grid.component";
import { PortfolioObjectType, Project } from "../../portfolio.model";

export const project_msa: Project = {
    objectType: PortfolioObjectType.Project,
    id: 'c-002-f-004-p-001',
    name: 'msa',
    title: 'MSA',
    icon: 'project-i01',
    thumbnail: 'assets/portfolio/graphic-design/visual-identity/msa/msa-thumbnail.jpg',
    templates: [
        {
            templateName: 'app-img-full',
            templateData: {
                title: 'MSA Visual Identity',
                imgUrl: 'assets/portfolio/graphic-design/visual-identity/msa/facebook_banner.jpg'
            } as ImgFullTemplateData
        },
        {
            templateName: 'app-img-grid',
            templateData: {
                title: 'See More',
                imgUrls: [
                    'assets/portfolio/graphic-design/visual-identity/msa/card-temp.jpg',
                    'assets/portfolio/graphic-design/visual-identity/msa/letter_head_2_1_wmu.jpg',
                    'assets/portfolio/graphic-design/visual-identity/msa/msa_folder_01_wmu_01.jpg',
                    'assets/portfolio/graphic-design/visual-identity/msa/msa_mug_wmu_01.jpg',
                    'assets/portfolio/graphic-design/visual-identity/msa/msa_mug_wmu_02.jpg',
                    'assets/portfolio/graphic-design/visual-identity/msa/msa_pen_wmu-02_01.jpg',
                    'assets/portfolio/graphic-design/visual-identity/msa/msa_pen_wmu-03_01.jpg',
                ]
            } as ImgGridTemplateData
        },
    ]
}