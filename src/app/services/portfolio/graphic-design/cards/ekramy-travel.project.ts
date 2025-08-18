import { ImgFullTemplateData } from "../../../../utilities/project/project-templates/img-full/img-full.component";
import { ImgGridTemplateData } from "../../../../utilities/project/project-templates/img-grid/img-grid.component";
import { PortfolioObjectType, Project } from "../../portfolio.model";

export const project_ekramy_travel: Project = {
    objectType: PortfolioObjectType.Project,
    id: 'c-002-f-001-p-001',
    name: 'ekramy-travel',
    title: 'Ekramy Travel',
    icon: 'project-i01',
    thumbnail: "https://raw.githubusercontent.com/ezzelden-hashem/portfolio/refs/heads/main/src/assets/portfolio/graphic-design/card/ekramy-wageeh-travel/ekramy-wageeh-travel-thumbnail.jpg",
    templates: [
        {
            templateName: 'app-img-full',
            templateData: {
                title: 'Ekramy Travel Business Card',
                imgUrl: "https://raw.githubusercontent.com/ezzelden-hashem/portfolio/refs/heads/main/src/assets/portfolio/graphic-design/card/ekramy-wageeh-travel/mid/m06-mid.jpg",
                thumbnailUrl: "https://raw.githubusercontent.com/ezzelden-hashem/portfolio/refs/heads/main/src/assets/portfolio/graphic-design/card/ekramy-wageeh-travel/blur/m06-mid-blur.avif",
                fullResolution: "https://raw.githubusercontent.com/ezzelden-hashem/portfolio/refs/heads/main/src/assets/portfolio/graphic-design/card/ekramy-wageeh-travel/full/m06-full.jpg"
            } as ImgFullTemplateData,
        },
        {
            templateName: 'app-img-grid',
            templateData: {
                title: 'See More',
                imgs: [
                    {
                        thumbnail: "https://raw.githubusercontent.com/ezzelden-hashem/portfolio/refs/heads/main/src/assets/portfolio/graphic-design/card/ekramy-wageeh-travel/blur/ekramy-car-f-b-2-mid-blur.avif",
                        imgUrl: "https://raw.githubusercontent.com/ezzelden-hashem/portfolio/refs/heads/main/src/assets/portfolio/graphic-design/card/ekramy-wageeh-travel/mid/ekramy-car-f-b-2-mid.jpg",
                        fullResolution: "https://raw.githubusercontent.com/ezzelden-hashem/portfolio/refs/heads/main/src/assets/portfolio/graphic-design/card/ekramy-wageeh-travel/full/ekramy-car-f-b-2-full.jpg"
                    },
                    {
                        thumbnail: "https://raw.githubusercontent.com/ezzelden-hashem/portfolio/refs/heads/main/src/assets/portfolio/graphic-design/card/ekramy-wageeh-travel/blur/m01-mid-blur.avif",
                        imgUrl: "https://raw.githubusercontent.com/ezzelden-hashem/portfolio/refs/heads/main/src/assets/portfolio/graphic-design/card/ekramy-wageeh-travel/mid/m01-mid.jpg",
                        fullResolution: "https://raw.githubusercontent.com/ezzelden-hashem/portfolio/refs/heads/main/src/assets/portfolio/graphic-design/card/ekramy-wageeh-travel/full/m01-full.jpg"
                    },
                    {
                        thumbnail: "https://raw.githubusercontent.com/ezzelden-hashem/portfolio/refs/heads/main/src/assets/portfolio/graphic-design/card/ekramy-wageeh-travel/blur/m02-mid-blur.avif",
                        imgUrl: "https://raw.githubusercontent.com/ezzelden-hashem/portfolio/refs/heads/main/src/assets/portfolio/graphic-design/card/ekramy-wageeh-travel/mid/m02-mid.jpg",
                        fullResolution: "https://raw.githubusercontent.com/ezzelden-hashem/portfolio/refs/heads/main/src/assets/portfolio/graphic-design/card/ekramy-wageeh-travel/full/m02-full.jpg"
                    }
                ]
            } as ImgGridTemplateData
        }
    ]
}