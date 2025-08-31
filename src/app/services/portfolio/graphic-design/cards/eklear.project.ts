import { ImgFullTemplateData } from "../../../../utilities/project/project-templates/img-full/img-full.component";
import { PortfolioObjectType, Project } from "../../portfolio.model";

export const project_eklear: Project = {
    objectType: PortfolioObjectType.Project,
    description: 'A bakery shop card design blending warm colors with inviting graphics. The style emphasizes freshness and a welcoming brand feel.',
    id: 'c-002-f-001-p-005',
    name: 'eklear',
    title: 'Eklear Bakery',
    icon: 'project-i01',
    thumbnail: "https://raw.githubusercontent.com/ezzelden-hashem/portfolio/refs/heads/main/src/assets/portfolio/graphic-design/card/eklear/eklear-thumbnail.jpg",
    templates: [
        {
            templateName: 'app-img-full',
            templateData: {
                title: 'Eklear Bakery Business Card',
                thumbnailUrl: "https://raw.githubusercontent.com/ezzelden-hashem/portfolio/refs/heads/main/src/assets/portfolio/graphic-design/card/eklear/blur/eklear-mid-blur.avif",
                imgUrl: "https://raw.githubusercontent.com/ezzelden-hashem/portfolio/refs/heads/main/src/assets/portfolio/graphic-design/card/eklear/mid/eklear-mid.jpg",
                fullResolution: "https://raw.githubusercontent.com/ezzelden-hashem/portfolio/refs/heads/main/src/assets/portfolio/graphic-design/card/eklear/full/eklear-full.jpg"
            } as ImgFullTemplateData
        }
    ]
}