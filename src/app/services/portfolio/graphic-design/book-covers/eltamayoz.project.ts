import { ImgFullTemplateData } from "../../../../utilities/project/project-templates/img-full/img-full.component";
import { ImgGridTemplateData } from "../../../../utilities/project/project-templates/img-grid/img-grid.component";
import { PortfolioObjectType, Project } from "../../portfolio.model";

export const project_eltamayoz: Project = {
    objectType: PortfolioObjectType.Project,
    id: 'c-002-f-002-p-002',
    name: 'eltamayoz',
    title: 'Eltamayoz Notebook',
    icon: 'project-i01',
    thumbnail: "https://raw.githubusercontent.com/ezzelden-hashem/portfolio/refs/heads/main/src/assets/portfolio/graphic-design/book-cover/eltamayoz/eltamayoz-thumbnail.jpg",
    templates: [
        {
            templateName: 'app-img-full',
            templateData: {
                title: 'Eltamayoz Notebook Cover Design',
                thumbnailUrl: "https://raw.githubusercontent.com/ezzelden-hashem/portfolio/refs/heads/main/src/assets/portfolio/graphic-design/book-cover/eltamayoz/blur/eltamayoz-s04-full-mid-blur.avif",
                imgUrl: "https://raw.githubusercontent.com/ezzelden-hashem/portfolio/refs/heads/main/src/assets/portfolio/graphic-design/book-cover/eltamayoz/mid/eltamayoz-s04-full-mid.jpg",
                fullResolution: "https://raw.githubusercontent.com/ezzelden-hashem/portfolio/refs/heads/main/src/assets/portfolio/graphic-design/book-cover/eltamayoz/full/eltamayoz-s04-full.jpg"
            } as ImgFullTemplateData
        },
        {
            templateName: 'app-img-grid',
            templateData: {
                title: 'See More',
                imgs: [
                    {
                        thumbnail: "https://raw.githubusercontent.com/ezzelden-hashem/portfolio/refs/heads/main/src/assets/portfolio/graphic-design/book-cover/eltamayoz/blur/eltamayoz-s01-full-mid-blur.avif",
                        imgUrl: "https://raw.githubusercontent.com/ezzelden-hashem/portfolio/refs/heads/main/src/assets/portfolio/graphic-design/book-cover/eltamayoz/mid/eltamayoz-s01-full-mid.jpg",
                        fullResolution: "https://raw.githubusercontent.com/ezzelden-hashem/portfolio/refs/heads/main/src/assets/portfolio/graphic-design/book-cover/eltamayoz/full/eltamayoz-s01-full.jpg"
                    },
                    {
                        thumbnail: "https://raw.githubusercontent.com/ezzelden-hashem/portfolio/refs/heads/main/src/assets/portfolio/graphic-design/book-cover/eltamayoz/blur/eltamayoz-s03-full-mid-blur.avif",
                        imgUrl: "https://raw.githubusercontent.com/ezzelden-hashem/portfolio/refs/heads/main/src/assets/portfolio/graphic-design/book-cover/eltamayoz/mid/eltamayoz-s03-full-mid.jpg",
                        fullResolution: "https://raw.githubusercontent.com/ezzelden-hashem/portfolio/refs/heads/main/src/assets/portfolio/graphic-design/book-cover/eltamayoz/full/eltamayoz-s03-full.jpg"
                    },
                ]
            } as ImgGridTemplateData
        },
    ]
}