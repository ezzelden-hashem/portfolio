import { ImgFullTemplateData } from "../../../utilities/project/project-templates/img-full/img-full.component";
import { ImgGridTemplateData } from "../../../utilities/project/project-templates/img-grid/img-grid.component";
import { PortfolioObjectType, Project } from "../portfolio.model";

export const project_3_glasses: Project = {
    objectType: PortfolioObjectType.Project,
    description: 'A sleek 3D set of drinking glasses modeled entirely in Blender. The design focuses on realistic reflections and clean rendering for a professional finish.',
    id: 'c-001-f-000-p-001',
    name: '3-glasses',
    title: '3 Glasses',
    icon: 'project-i01',
    thumbnail: "https://raw.githubusercontent.com/ezzelden-hashem/portfolio/refs/heads/main/src/assets/portfolio/3d/3-glasses/3-glasses-thumbnail.jpg",
    templates: [
        {
            templateName: 'app-img-full',
            templateData: {
                title: '3 Glasses in Blender',
                imgUrl: 'https://raw.githubusercontent.com/ezzelden-hashem/portfolio/refs/heads/main/src/assets/portfolio/3d/3-glasses/mid/3-glasses-s03-mid.jpg',
                thumbnailUrl: 'https://raw.githubusercontent.com/ezzelden-hashem/portfolio/refs/heads/main/src/assets/portfolio/3d/3-glasses/blur/3-glasses-s03-mid-blur.avif',
                fullResolution: 'https://raw.githubusercontent.com/ezzelden-hashem/portfolio/refs/heads/main/src/assets/portfolio/3d/3-glasses/full/3-glasses-s03-full.jpg'
            } as ImgFullTemplateData
        },
        {
            templateName: 'app-img-grid',
            templateData: {
                title: 'See More',
                imgs: [
                    {
                        imgUrl   : 'https://raw.githubusercontent.com/ezzelden-hashem/portfolio/refs/heads/main/src/assets/portfolio/3d/3-glasses/mid/3-glasses-s01-mid.jpg',
                        thumbnail: 'https://raw.githubusercontent.com/ezzelden-hashem/portfolio/refs/heads/main/src/assets/portfolio/3d/3-glasses/blur/3-glasses-s01-mid-blur.avif',
                        fullResolution: 'https://raw.githubusercontent.com/ezzelden-hashem/portfolio/refs/heads/main/src/assets/portfolio/3d/3-glasses/full/3-glasses-s01-full.jpg'
                    },
                    {
                        imgUrl   : 'https://raw.githubusercontent.com/ezzelden-hashem/portfolio/refs/heads/main/src/assets/portfolio/3d/3-glasses/mid/3-glasses-s02-mid.jpg',
                        thumbnail: 'https://raw.githubusercontent.com/ezzelden-hashem/portfolio/refs/heads/main/src/assets/portfolio/3d/3-glasses/blur/3-glasses-s02-mid-blur.avif',
                        fullResolution: 'https://raw.githubusercontent.com/ezzelden-hashem/portfolio/refs/heads/main/src/assets/portfolio/3d/3-glasses/full/3-glasses-s02-full.jpg'
                    },
                    {
                        imgUrl   : 'https://raw.githubusercontent.com/ezzelden-hashem/portfolio/refs/heads/main/src/assets/portfolio/3d/3-glasses/mid/3-glasses-s04-mid.jpg',
                        thumbnail: 'https://raw.githubusercontent.com/ezzelden-hashem/portfolio/refs/heads/main/src/assets/portfolio/3d/3-glasses/blur/3-glasses-s04-mid-blur.avif',
                        fullResolution: 'https://raw.githubusercontent.com/ezzelden-hashem/portfolio/refs/heads/main/src/assets/portfolio/3d/3-glasses/full/3-glasses-s04-full.jpg'
                    },
                ]
            } as ImgGridTemplateData
        },
    ]
}