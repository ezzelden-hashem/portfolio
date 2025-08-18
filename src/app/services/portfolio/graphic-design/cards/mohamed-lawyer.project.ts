import { ImgFullTemplateData } from "../../../../utilities/project/project-templates/img-full/img-full.component";
import { ImgGridTemplateData } from "../../../../utilities/project/project-templates/img-grid/img-grid.component";
import { PortfolioObjectType, Project } from "../../portfolio.model";

export const project_mohamed_lawyer: Project = {
    objectType: PortfolioObjectType.Project,
    id: 'c-002-f-001-p-002',
    name: 'mohamed-lawyer',
    title: 'Mohamed Lawyer',
    icon: 'project-i01',
    thumbnail: "https://raw.githubusercontent.com/ezzelden-hashem/portfolio/refs/heads/main/src/assets/portfolio/graphic-design/card/mohamed-mustafa-lawyer/mohamed-mustafa-lawyer-thumbnail.jpg",
    templates: [
        {
            templateName: 'app-img-full',
            templateData: {
                title: 'Mohamed Lawyer Business Card',
                thumbnailUrl: "https://raw.githubusercontent.com/ezzelden-hashem/portfolio/refs/heads/main/src/assets/portfolio/graphic-design/card/mohamed-mustafa-lawyer/blur/m04.1-mid-blur.avif",
                imgUrl: "https://raw.githubusercontent.com/ezzelden-hashem/portfolio/refs/heads/main/src/assets/portfolio/graphic-design/card/mohamed-mustafa-lawyer/mid/m04.1-mid.jpg",
                fullResolution: "https://raw.githubusercontent.com/ezzelden-hashem/portfolio/refs/heads/main/src/assets/portfolio/graphic-design/card/mohamed-mustafa-lawyer/full/m04.1-full.jpg"
            } as ImgFullTemplateData
        },
        {
            templateName: 'app-img-grid',
            templateData: {
                title: 'See More',
                imgs: [
                    {
                        thumbnail: "https://raw.githubusercontent.com/ezzelden-hashem/portfolio/refs/heads/main/src/assets/portfolio/graphic-design/card/mohamed-mustafa-lawyer/blur/m03.1-mid-blur.avif",
                        imgUrl: "https://raw.githubusercontent.com/ezzelden-hashem/portfolio/refs/heads/main/src/assets/portfolio/graphic-design/card/mohamed-mustafa-lawyer/mid/m03.1-mid.jpg",
                        fullResolution: "https://raw.githubusercontent.com/ezzelden-hashem/portfolio/refs/heads/main/src/assets/portfolio/graphic-design/card/mohamed-mustafa-lawyer/full/m03.1-full.jpg"
                    },
                    {
                        thumbnail: "https://raw.githubusercontent.com/ezzelden-hashem/portfolio/refs/heads/main/src/assets/portfolio/graphic-design/card/mohamed-mustafa-lawyer/blur/m06-mid-blur.avif",
                        imgUrl: "https://raw.githubusercontent.com/ezzelden-hashem/portfolio/refs/heads/main/src/assets/portfolio/graphic-design/card/mohamed-mustafa-lawyer/mid/m06-mid.jpg",
                        fullResolution: "https://raw.githubusercontent.com/ezzelden-hashem/portfolio/refs/heads/main/src/assets/portfolio/graphic-design/card/mohamed-mustafa-lawyer/full/m06-full.jpg"
                    }
                ]
            } as ImgGridTemplateData
        },
        
    ]
}