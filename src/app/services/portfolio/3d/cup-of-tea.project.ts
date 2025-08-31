import { ImgFullTemplateData } from "../../../utilities/project/project-templates/img-full/img-full.component";
import { ImgGridTemplateData } from "../../../utilities/project/project-templates/img-grid/img-grid.component";
import { PortfolioObjectType, Project } from "../portfolio.model";

export const project_cup_of_tea: Project = {
    objectType: PortfolioObjectType.Project,
    description: 'A polished glass teacup designed with Blender and rendered with high-quality lighting. The result delivers a crisp and elegant visual aesthetic.',
    id: 'c-001-f-000-p-003',
    name: 'cup-of-tea',
    title: 'Cup of Tea',
    icon: 'project-i01',
    thumbnail: "https://raw.githubusercontent.com/ezzelden-hashem/portfolio/refs/heads/main/src/assets/portfolio/3d/cup-of-tea/glass-model-thumbnail.jpg",
    templates: [
        {
            templateName: 'app-img-full',
            templateData: {
                title: 'Cup of Tea in Blender',
                imgUrl: "https://raw.githubusercontent.com/ezzelden-hashem/portfolio/refs/heads/main/src/assets/portfolio/3d/cup-of-tea/mid/glass-model-01-s05-mid.jpg",
                thumbnailUrl: "https://raw.githubusercontent.com/ezzelden-hashem/portfolio/refs/heads/main/src/assets/portfolio/3d/cup-of-tea/blur/glass-model-01-s05-mid-blur.avif",
                fullResolution: "https://raw.githubusercontent.com/ezzelden-hashem/portfolio/refs/heads/main/src/assets/portfolio/3d/cup-of-tea/full/glass-model-01-s05-full.jpg"
            } as ImgFullTemplateData
        },
        {
            templateName: 'app-img-grid',
            templateData: {
                title: 'See More',
                imgs: [
                    {
                        thumbnail: "https://raw.githubusercontent.com/ezzelden-hashem/portfolio/refs/heads/main/src/assets/portfolio/3d/cup-of-tea/blur/glass-model-01-s01-mid-blur.avif",
                        imgUrl: "https://raw.githubusercontent.com/ezzelden-hashem/portfolio/refs/heads/main/src/assets/portfolio/3d/cup-of-tea/mid/glass-model-01-s01-mid.jpg",
                        fullResolution: "https://raw.githubusercontent.com/ezzelden-hashem/portfolio/refs/heads/main/src/assets/portfolio/3d/cup-of-tea/full/glass-model-01-s01-full.jpg"
                    },
                    {
                        thumbnail: "https://raw.githubusercontent.com/ezzelden-hashem/portfolio/refs/heads/main/src/assets/portfolio/3d/cup-of-tea/blur/glass-model-01-s02-mid-blur.avif",
                        imgUrl: "https://raw.githubusercontent.com/ezzelden-hashem/portfolio/refs/heads/main/src/assets/portfolio/3d/cup-of-tea/mid/glass-model-01-s02-mid.jpg",
                        fullResolution: "https://raw.githubusercontent.com/ezzelden-hashem/portfolio/refs/heads/main/src/assets/portfolio/3d/cup-of-tea/full/glass-model-01-s02-full.jpg"
                    },
                    {
                        thumbnail: "https://raw.githubusercontent.com/ezzelden-hashem/portfolio/refs/heads/main/src/assets/portfolio/3d/cup-of-tea/blur/glass-model-01-s03-mid-blur.avif",
                        imgUrl: "https://raw.githubusercontent.com/ezzelden-hashem/portfolio/refs/heads/main/src/assets/portfolio/3d/cup-of-tea/mid/glass-model-01-s03-mid.jpg",
                        fullResolution: "https://raw.githubusercontent.com/ezzelden-hashem/portfolio/refs/heads/main/src/assets/portfolio/3d/cup-of-tea/full/glass-model-01-s03-full.jpg"
                    },
                    {
                        thumbnail: "https://raw.githubusercontent.com/ezzelden-hashem/portfolio/refs/heads/main/src/assets/portfolio/3d/cup-of-tea/blur/glass-model-01-s04-mid-blur.avif",
                        imgUrl: "https://raw.githubusercontent.com/ezzelden-hashem/portfolio/refs/heads/main/src/assets/portfolio/3d/cup-of-tea/mid/glass-model-01-s04-mid.jpg",
                        fullResolution: "https://raw.githubusercontent.com/ezzelden-hashem/portfolio/refs/heads/main/src/assets/portfolio/3d/cup-of-tea/full/glass-model-01-s04-full.jpg"
                    },
                    {
                        thumbnail: "https://raw.githubusercontent.com/ezzelden-hashem/portfolio/refs/heads/main/src/assets/portfolio/3d/cup-of-tea/blur/glass-model-01-s06-mid-blur.avif",
                        imgUrl: "https://raw.githubusercontent.com/ezzelden-hashem/portfolio/refs/heads/main/src/assets/portfolio/3d/cup-of-tea/mid/glass-model-01-s06-mid.jpg",
                        fullResolution: "https://raw.githubusercontent.com/ezzelden-hashem/portfolio/refs/heads/main/src/assets/portfolio/3d/cup-of-tea/full/glass-model-01-s06-full.jpg"
                    },
                ]
            } as ImgGridTemplateData
        },
    ]
}