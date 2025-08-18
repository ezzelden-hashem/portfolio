import { ImgFullTemplateData } from "../../../../utilities/project/project-templates/img-full/img-full.component";
import { ImgGridTemplateData } from "../../../../utilities/project/project-templates/img-grid/img-grid.component";
import { PortfolioObjectType, Project } from "../../portfolio.model";

export const project_rose_perfume: Project = {
    objectType: PortfolioObjectType.Project,
    id: 'c-002-f-001-p-004',
    name: 'rose-perfume',
    title: 'Rose Perfume',
    icon: 'project-i01',
    thumbnail: "https://raw.githubusercontent.com/ezzelden-hashem/portfolio/refs/heads/main/src/assets/portfolio/graphic-design/card/rose-perfume/rose-perfume-thumbnail.jpg",
    templates: [
        {
            templateName: 'app-img-full',
            templateData: {
                title: 'Rose Perfume Business Card',
                thumbnailUrl: "https://raw.githubusercontent.com/ezzelden-hashem/portfolio/refs/heads/main/src/assets/portfolio/graphic-design/card/rose-perfume/blur/m06-mid-blur.avif",
                imgUrl: "https://raw.githubusercontent.com/ezzelden-hashem/portfolio/refs/heads/main/src/assets/portfolio/graphic-design/card/rose-perfume/mid/m06-mid.jpg",
                fullResolution: "https://raw.githubusercontent.com/ezzelden-hashem/portfolio/refs/heads/main/src/assets/portfolio/graphic-design/card/rose-perfume/full/m06-full.jpg"
            } as ImgFullTemplateData
        },
        {
            templateName: 'app-img-grid',
            templateData: {
                title: 'See More',
                imgs: [
                    {
                        thumbnail: "https://raw.githubusercontent.com/ezzelden-hashem/portfolio/refs/heads/main/src/assets/portfolio/graphic-design/card/rose-perfume/blur/m01-mid-blur.avif",
                        imgUrl: "https://raw.githubusercontent.com/ezzelden-hashem/portfolio/refs/heads/main/src/assets/portfolio/graphic-design/card/rose-perfume/mid/m01-mid.jpg",
                        fullResolution: "https://raw.githubusercontent.com/ezzelden-hashem/portfolio/refs/heads/main/src/assets/portfolio/graphic-design/card/rose-perfume/full/m01-full.jpg"
                    },
                    {
                        thumbnail: "https://raw.githubusercontent.com/ezzelden-hashem/portfolio/refs/heads/main/src/assets/portfolio/graphic-design/card/rose-perfume/blur/m02-mid-blur.avif",
                        imgUrl: "https://raw.githubusercontent.com/ezzelden-hashem/portfolio/refs/heads/main/src/assets/portfolio/graphic-design/card/rose-perfume/mid/m02-mid.jpg",
                        fullResolution: "https://raw.githubusercontent.com/ezzelden-hashem/portfolio/refs/heads/main/src/assets/portfolio/graphic-design/card/rose-perfume/full/m02-full.jpg"
                    },
                    {
                        thumbnail: "https://raw.githubusercontent.com/ezzelden-hashem/portfolio/refs/heads/main/src/assets/portfolio/graphic-design/card/rose-perfume/blur/m03.1-mid-blur.avif",
                        imgUrl: "https://raw.githubusercontent.com/ezzelden-hashem/portfolio/refs/heads/main/src/assets/portfolio/graphic-design/card/rose-perfume/mid/m03.1-mid.jpg",
                        fullResolution: "https://raw.githubusercontent.com/ezzelden-hashem/portfolio/refs/heads/main/src/assets/portfolio/graphic-design/card/rose-perfume/full/m03.1-full.jpg"
                    },
                    {
                        thumbnail: "https://raw.githubusercontent.com/ezzelden-hashem/portfolio/refs/heads/main/src/assets/portfolio/graphic-design/card/rose-perfume/blur/m03.2-mid-blur.avif",
                        imgUrl: "https://raw.githubusercontent.com/ezzelden-hashem/portfolio/refs/heads/main/src/assets/portfolio/graphic-design/card/rose-perfume/mid/m03.2-mid.jpg",
                        fullResolution: "https://raw.githubusercontent.com/ezzelden-hashem/portfolio/refs/heads/main/src/assets/portfolio/graphic-design/card/rose-perfume/full/m03.2-full.jpg"
                    },
                    {
                        thumbnail: "https://raw.githubusercontent.com/ezzelden-hashem/portfolio/refs/heads/main/src/assets/portfolio/graphic-design/card/rose-perfume/blur/m04.1-mid-blur.avif",
                        imgUrl: "https://raw.githubusercontent.com/ezzelden-hashem/portfolio/refs/heads/main/src/assets/portfolio/graphic-design/card/rose-perfume/mid/m04.1-mid.jpg",
                        fullResolution: "https://raw.githubusercontent.com/ezzelden-hashem/portfolio/refs/heads/main/src/assets/portfolio/graphic-design/card/rose-perfume/full/m04.1-full.jpg"
                    },
                    {
                        thumbnail: "https://raw.githubusercontent.com/ezzelden-hashem/portfolio/refs/heads/main/src/assets/portfolio/graphic-design/card/rose-perfume/blur/m04.2-mid-blur.avif",
                        imgUrl: "https://raw.githubusercontent.com/ezzelden-hashem/portfolio/refs/heads/main/src/assets/portfolio/graphic-design/card/rose-perfume/mid/m04.2-mid.jpg",
                        fullResolution: "https://raw.githubusercontent.com/ezzelden-hashem/portfolio/refs/heads/main/src/assets/portfolio/graphic-design/card/rose-perfume/full/m04.2-full.jpg"
                    },
                ]
            } as ImgGridTemplateData
        },
    ]
}