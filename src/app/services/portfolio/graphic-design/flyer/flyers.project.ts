import { ImgFullTemplateData } from "../../../../utilities/project/project-templates/img-full/img-full.component";
import { PortfolioObjectType, Project } from "../../portfolio.model";

export const project_flyers: Project = {
    objectType: PortfolioObjectType.Project,
    description: '',
    id: 'c-002-f-000-p-001',
    name: 'flyer',
    title: 'Flyers',
    icon: 'project-i01',
    thumbnail: "https://raw.githubusercontent.com/ezzelden-hashem/portfolio/refs/heads/main/src/assets/portfolio/graphic-design/flyer/flyer-thumbnail.jpg",
    templates: [
        {
            templateName: 'app-img-full',
            templateData: {
                title: 'Flyer 1',
                thumbnailUrl: "https://raw.githubusercontent.com/ezzelden-hashem/portfolio/refs/heads/main/src/assets/portfolio/graphic-design/flyer/blur/eklear-01-mid-blur.avif",
                imgUrl: "https://raw.githubusercontent.com/ezzelden-hashem/portfolio/refs/heads/main/src/assets/portfolio/graphic-design/flyer/mid/eklear-01-mid.jpg",
                fullResolution: "https://raw.githubusercontent.com/ezzelden-hashem/portfolio/refs/heads/main/src/assets/portfolio/graphic-design/flyer/full/eklear-01-full.jpg"
            } as ImgFullTemplateData
        },
        {
            templateName: 'app-img-full',
            templateData: {
                title: 'Flyer 2',
                thumbnailUrl: "https://raw.githubusercontent.com/ezzelden-hashem/portfolio/refs/heads/main/src/assets/portfolio/graphic-design/flyer/blur/eklear-02-mid-blur.avif",
                imgUrl: "https://raw.githubusercontent.com/ezzelden-hashem/portfolio/refs/heads/main/src/assets/portfolio/graphic-design/flyer/mid/eklear-02-mid.jpg",
                fullResolution: "https://raw.githubusercontent.com/ezzelden-hashem/portfolio/refs/heads/main/src/assets/portfolio/graphic-design/flyer/full/eklear-02-full.jpg"
            } as ImgFullTemplateData
        },
    ]
}