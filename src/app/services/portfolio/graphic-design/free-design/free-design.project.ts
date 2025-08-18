import { ImgGridTemplateData } from "../../../../utilities/project/project-templates/img-grid/img-grid.component";
import { PortfolioObjectType, Project } from "../../portfolio.model";

export const project_free_design: Project = {
    objectType: PortfolioObjectType.Project,
    id: 'c-002-f-000-p-002',
    name: 'free-design',
    title: 'Free Design',
    icon: 'project-i01',
    thumbnail: "https://raw.githubusercontent.com/ezzelden-hashem/portfolio/refs/heads/main/src/assets/portfolio/graphic-design/free-design/free-design-thumbnail.jpg",
    templates: [
        {
            templateName: 'app-img-grid',
            templateData: {
                title: 'Free Design',
                imgs: [
                    {
                        thumbnail: "https://raw.githubusercontent.com/ezzelden-hashem/portfolio/refs/heads/main/src/assets/portfolio/graphic-design/free-design/blur/banner_1_1-mid-blur.avif",
                        imgUrl: "https://raw.githubusercontent.com/ezzelden-hashem/portfolio/refs/heads/main/src/assets/portfolio/graphic-design/free-design/mid/banner_1_1-mid.jpg",
                        fullResolution: "https://raw.githubusercontent.com/ezzelden-hashem/portfolio/refs/heads/main/src/assets/portfolio/graphic-design/free-design/full/banner_1_1-full.jpg"
                    },
                    {
                        thumbnail: "https://raw.githubusercontent.com/ezzelden-hashem/portfolio/refs/heads/main/src/assets/portfolio/graphic-design/free-design/blur/glassmorphism-mid-blur.avif",
                        imgUrl: "https://raw.githubusercontent.com/ezzelden-hashem/portfolio/refs/heads/main/src/assets/portfolio/graphic-design/free-design/mid/glassmorphism-mid.jpg",
                        fullResolution: "https://raw.githubusercontent.com/ezzelden-hashem/portfolio/refs/heads/main/src/assets/portfolio/graphic-design/free-design/full/glassmorphism-full.jpg"
                    },
                    {
                        thumbnail: "https://raw.githubusercontent.com/ezzelden-hashem/portfolio/refs/heads/main/src/assets/portfolio/graphic-design/free-design/blur/sourat-alekhlas-mid-blur.avif",
                        imgUrl: "https://raw.githubusercontent.com/ezzelden-hashem/portfolio/refs/heads/main/src/assets/portfolio/graphic-design/free-design/mid/sourat-alekhlas-mid.jpg",
                        fullResolution: "https://raw.githubusercontent.com/ezzelden-hashem/portfolio/refs/heads/main/src/assets/portfolio/graphic-design/free-design/full/sourat-alekhlas-full.jpg"
                    },
                ]
            } as ImgGridTemplateData
        },
    ]
}