import { ImgGridTemplateData } from "../../../../utilities/project/project-templates/img-grid/img-grid.component";
import { PortfolioObjectType, Project } from "../../portfolio.model";

export const project_other_logos: Project = {
    objectType: PortfolioObjectType.Project,
    id: 'c-002-f-003-p-003',
    name: 'other-logos',
    title: 'Other Logos',
    icon: 'project-i01',
    thumbnail: "https://raw.githubusercontent.com/ezzelden-hashem/portfolio/refs/heads/main/src/assets/portfolio/graphic-design/logo/other-logos/other-logos-thumbnail.jpg",
    templates: [
        {
            templateName: 'app-img-grid',
            templateData: {
                title: 'Other Logos',
                imgs: [
                    {
                        thumbnail: "https://raw.githubusercontent.com/ezzelden-hashem/portfolio/refs/heads/main/src/assets/portfolio/graphic-design/logo/other-logos/blur/ans-group-mid-blur.avif",
                        imgUrl: "https://raw.githubusercontent.com/ezzelden-hashem/portfolio/refs/heads/main/src/assets/portfolio/graphic-design/logo/other-logos/mid/ans-group-mid.jpg",
                        fullResolution: "https://raw.githubusercontent.com/ezzelden-hashem/portfolio/refs/heads/main/src/assets/portfolio/graphic-design/logo/other-logos/full/ans-group-full.jpg"
                    },
                    {
                        thumbnail: "https://raw.githubusercontent.com/ezzelden-hashem/portfolio/refs/heads/main/src/assets/portfolio/graphic-design/logo/other-logos/blur/ewl-logo-m1-mid-blur.avif",
                        imgUrl: "https://raw.githubusercontent.com/ezzelden-hashem/portfolio/refs/heads/main/src/assets/portfolio/graphic-design/logo/other-logos/mid/ewl-logo-m1-mid.jpg",
                        fullResolution: "https://raw.githubusercontent.com/ezzelden-hashem/portfolio/refs/heads/main/src/assets/portfolio/graphic-design/logo/other-logos/full/ewl-logo-m1-full.jpg"
                    },
                    {
                        thumbnail: "https://raw.githubusercontent.com/ezzelden-hashem/portfolio/refs/heads/main/src/assets/portfolio/graphic-design/logo/other-logos/blur/mother-care-mid-blur.avif",
                        imgUrl: "https://raw.githubusercontent.com/ezzelden-hashem/portfolio/refs/heads/main/src/assets/portfolio/graphic-design/logo/other-logos/mid/mother-care-mid.jpg",
                        fullResolution: "https://raw.githubusercontent.com/ezzelden-hashem/portfolio/refs/heads/main/src/assets/portfolio/graphic-design/logo/other-logos/full/mother-care-full.jpg"
                    },
                    {
                        thumbnail: "https://raw.githubusercontent.com/ezzelden-hashem/portfolio/refs/heads/main/src/assets/portfolio/graphic-design/logo/other-logos/blur/nye-group-mid-blur.avif",
                        imgUrl: "https://raw.githubusercontent.com/ezzelden-hashem/portfolio/refs/heads/main/src/assets/portfolio/graphic-design/logo/other-logos/mid/nye-group-mid.jpg",
                        fullResolution: "https://raw.githubusercontent.com/ezzelden-hashem/portfolio/refs/heads/main/src/assets/portfolio/graphic-design/logo/other-logos/full/nye-group-full.jpg"
                    },
                ]
            } as ImgGridTemplateData
        },
    ]
}