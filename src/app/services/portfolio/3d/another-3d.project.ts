import { ImgFullTemplateData } from "../../../utilities/project/project-templates/img-full/img-full.component";
import { ImgGridTemplateData } from "../../../utilities/project/project-templates/img-grid/img-grid.component";
import { PortfolioObjectType, Project } from "../portfolio.model";

export const project_another_3d: Project = {
    objectType: PortfolioObjectType.Project,
    description: 'A still-life composition featuring a glass of water, a cup of tea, and apples on a plate. Carefully arranged and rendered to highlight realism and balance.',
    id: 'c-001-f-000-p-004',
    name: 'another-3d',
    title: 'Another 3D',
    icon: 'project-i01',
    thumbnail: "https://raw.githubusercontent.com/ezzelden-hashem/portfolio/refs/heads/main/src/assets/portfolio/3d/another-3d/fruits-and-drinks-thumbnail.jpg",
    templates: [
        {
            templateName: 'app-img-full',
            templateData: {
                title: '3D Collection',
                imgUrl: "https://raw.githubusercontent.com/ezzelden-hashem/portfolio/refs/heads/main/src/assets/portfolio/3d/another-3d/mid/fruits-and-drinks-s02-mid.jpg",
                thumbnailUrl: "https://raw.githubusercontent.com/ezzelden-hashem/portfolio/refs/heads/main/src/assets/portfolio/3d/another-3d/blur/fruits-and-drinks-s02-mid-blur.avif",
                fullResolution: "https://raw.githubusercontent.com/ezzelden-hashem/portfolio/refs/heads/main/src/assets/portfolio/3d/another-3d/full/fruits-and-drinks-s02-full.jpg"
            } as ImgFullTemplateData
        },
        {
            templateName: 'app-img-grid',
            templateData: {
                title: 'See More',
                imgs : [
                    {
                        thumbnail: "https://raw.githubusercontent.com/ezzelden-hashem/portfolio/refs/heads/main/src/assets/portfolio/3d/another-3d/blur/fruits-and-drinks-s01-mid-blur.avif",
                        imgUrl: "https://raw.githubusercontent.com/ezzelden-hashem/portfolio/refs/heads/main/src/assets/portfolio/3d/another-3d/mid/fruits-and-drinks-s01-mid.jpg",
                        fullResolution: "https://raw.githubusercontent.com/ezzelden-hashem/portfolio/refs/heads/main/src/assets/portfolio/3d/another-3d/full/fruits-and-drinks-s01-full.jpg"
                    },
                    {
                        thumbnail: "https://raw.githubusercontent.com/ezzelden-hashem/portfolio/refs/heads/main/src/assets/portfolio/3d/another-3d/blur/fur-and-soft-body-mid-blur.avif",
                        imgUrl: "https://raw.githubusercontent.com/ezzelden-hashem/portfolio/refs/heads/main/src/assets/portfolio/3d/another-3d/mid/fur-and-soft-body-mid.jpg",
                        fullResolution: "https://raw.githubusercontent.com/ezzelden-hashem/portfolio/refs/heads/main/src/assets/portfolio/3d/another-3d/full/fur-and-soft-body-full.jpg"
                    },
                    
                ]
            } as ImgGridTemplateData
        },
    ]
}