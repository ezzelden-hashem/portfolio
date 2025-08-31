import { ImgFullTemplateData } from "../../../../utilities/project/project-templates/img-full/img-full.component";
import { PortfolioObjectType, Project } from "../../portfolio.model";

export const project_mo7a: Project = {
    objectType: PortfolioObjectType.Project,
    description: 'A restaurant menu design with appetizing visuals and a clean layout. Created to highlight dishes in a stylish and mouthwatering way.',
    id: 'c-002-f-000-p-004',
    name: 'mo7a',
    title: 'Mo7a Restaurant',
    icon: 'project-i01',
    thumbnail: "https://raw.githubusercontent.com/ezzelden-hashem/portfolio/refs/heads/main/src/assets/portfolio/graphic-design/restaurants-menu/mo7a/mo7a-thumbnail.jpg",
    templates: [
        {
            templateName: 'app-img-full',
            templateData: {
                title: 'Menu Front',
                thumbnailUrl: "https://raw.githubusercontent.com/ezzelden-hashem/portfolio/refs/heads/main/src/assets/portfolio/graphic-design/restaurants-menu/mo7a/blur/1-mid-blur.avif",
                imgUrl: "https://raw.githubusercontent.com/ezzelden-hashem/portfolio/refs/heads/main/src/assets/portfolio/graphic-design/restaurants-menu/mo7a/mid/1-mid.jpg",
                fullResolution: "https://raw.githubusercontent.com/ezzelden-hashem/portfolio/refs/heads/main/src/assets/portfolio/graphic-design/restaurants-menu/mo7a/full/1-full.jpg"
            } as ImgFullTemplateData
        },
        {
            templateName: 'app-img-full',
            templateData: {
                title: 'Menu Back',
                thumbnailUrl: "https://raw.githubusercontent.com/ezzelden-hashem/portfolio/refs/heads/main/src/assets/portfolio/graphic-design/restaurants-menu/mo7a/blur/2-mid-blur.avif",
                imgUrl: "https://raw.githubusercontent.com/ezzelden-hashem/portfolio/refs/heads/main/src/assets/portfolio/graphic-design/restaurants-menu/mo7a/mid/2-mid.jpg",
                fullResolution: "https://raw.githubusercontent.com/ezzelden-hashem/portfolio/refs/heads/main/src/assets/portfolio/graphic-design/restaurants-menu/mo7a/full/2-full.jpg"
            } as ImgFullTemplateData
        },
    ]
}