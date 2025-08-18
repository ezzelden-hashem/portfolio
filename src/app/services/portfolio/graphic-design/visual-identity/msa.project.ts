import { ImgFullTemplateData } from "../../../../utilities/project/project-templates/img-full/img-full.component";
import { ImgGridTemplateData } from "../../../../utilities/project/project-templates/img-grid/img-grid.component";
import { PortfolioObjectType, Project } from "../../portfolio.model";

export const project_msa: Project = {
    objectType: PortfolioObjectType.Project,
    id: 'c-002-f-004-p-001',
    name: 'msa',
    title: 'MSA',
    icon: 'project-i01',
    thumbnail: "https://raw.githubusercontent.com/ezzelden-hashem/portfolio/refs/heads/main/src/assets/portfolio/graphic-design/visual-identity/msa/msa-thumbnail.jpg",
    templates: [
        {
            templateName: 'app-img-full',
            templateData: {
                title: 'MSA Visual Identity',
                thumbnailUrl: "https://raw.githubusercontent.com/ezzelden-hashem/portfolio/refs/heads/main/src/assets/portfolio/graphic-design/visual-identity/msa/blur/msa_folder_01_wmu_01-mid-blur.avif",
                imgUrl: "https://raw.githubusercontent.com/ezzelden-hashem/portfolio/refs/heads/main/src/assets/portfolio/graphic-design/visual-identity/msa/mid/msa_folder_01_wmu_01-mid.jpg",
                fullResolution: "https://raw.githubusercontent.com/ezzelden-hashem/portfolio/refs/heads/main/src/assets/portfolio/graphic-design/visual-identity/msa/full/msa_folder_01_wmu_01-full.jpg"
            } as ImgFullTemplateData
        },
        {
            templateName: 'app-img-grid',
            templateData: {
                title: 'See More',
                imgs: [
                    {
                        thumbnail: "https://raw.githubusercontent.com/ezzelden-hashem/portfolio/refs/heads/main/src/assets/portfolio/graphic-design/visual-identity/msa/blur/card-temp-mid-blur.avif",
                        imgUrl: "https://raw.githubusercontent.com/ezzelden-hashem/portfolio/refs/heads/main/src/assets/portfolio/graphic-design/visual-identity/msa/mid/card-temp-mid.jpg",
                        fullResolution: "https://raw.githubusercontent.com/ezzelden-hashem/portfolio/refs/heads/main/src/assets/portfolio/graphic-design/visual-identity/msa/full/card-temp-full.jpg"
                    },
                    {
                        thumbnail: "https://raw.githubusercontent.com/ezzelden-hashem/portfolio/refs/heads/main/src/assets/portfolio/graphic-design/visual-identity/msa/blur/facebook_banner-mid-blur.avif",
                        imgUrl: "https://raw.githubusercontent.com/ezzelden-hashem/portfolio/refs/heads/main/src/assets/portfolio/graphic-design/visual-identity/msa/mid/facebook_banner-mid.jpg",
                        fullResolution: "https://raw.githubusercontent.com/ezzelden-hashem/portfolio/refs/heads/main/src/assets/portfolio/graphic-design/visual-identity/msa/full/facebook_banner-full.jpg"
                    },
                    {
                        thumbnail: "https://raw.githubusercontent.com/ezzelden-hashem/portfolio/refs/heads/main/src/assets/portfolio/graphic-design/visual-identity/msa/blur/letter_head_2_1_wmu-mid-blur.avif",
                        imgUrl: "https://raw.githubusercontent.com/ezzelden-hashem/portfolio/refs/heads/main/src/assets/portfolio/graphic-design/visual-identity/msa/mid/letter_head_2_1_wmu-mid.jpg",
                        fullResolution: "https://raw.githubusercontent.com/ezzelden-hashem/portfolio/refs/heads/main/src/assets/portfolio/graphic-design/visual-identity/msa/full/letter_head_2_1_wmu-full.jpg"
                    },
                    {
                        thumbnail: "https://raw.githubusercontent.com/ezzelden-hashem/portfolio/refs/heads/main/src/assets/portfolio/graphic-design/visual-identity/msa/blur/msa_mug_wmu_01-mid-blur.avif",
                        imgUrl: "https://raw.githubusercontent.com/ezzelden-hashem/portfolio/refs/heads/main/src/assets/portfolio/graphic-design/visual-identity/msa/mid/msa_mug_wmu_01-mid.jpg",
                        fullResolution: "https://raw.githubusercontent.com/ezzelden-hashem/portfolio/refs/heads/main/src/assets/portfolio/graphic-design/visual-identity/msa/full/msa_mug_wmu_01-full.jpg"
                    },
                    {
                        thumbnail: "https://raw.githubusercontent.com/ezzelden-hashem/portfolio/refs/heads/main/src/assets/portfolio/graphic-design/visual-identity/msa/blur/msa_mug_wmu_02-mid-blur.avif",
                        imgUrl: "https://raw.githubusercontent.com/ezzelden-hashem/portfolio/refs/heads/main/src/assets/portfolio/graphic-design/visual-identity/msa/mid/msa_mug_wmu_02-mid.jpg",
                        fullResolution: "https://raw.githubusercontent.com/ezzelden-hashem/portfolio/refs/heads/main/src/assets/portfolio/graphic-design/visual-identity/msa/full/msa_mug_wmu_02-full.jpg"
                    },
                    {
                        thumbnail: "https://raw.githubusercontent.com/ezzelden-hashem/portfolio/refs/heads/main/src/assets/portfolio/graphic-design/visual-identity/msa/blur/msa_pen_wmu-02_01-mid-blur.avif",
                        imgUrl: "https://raw.githubusercontent.com/ezzelden-hashem/portfolio/refs/heads/main/src/assets/portfolio/graphic-design/visual-identity/msa/mid/msa_pen_wmu-02_01-mid.jpg",
                        fullResolution: "https://raw.githubusercontent.com/ezzelden-hashem/portfolio/refs/heads/main/src/assets/portfolio/graphic-design/visual-identity/msa/full/msa_pen_wmu-02_01-full.jpg"
                    },
                    {
                        thumbnail: "https://raw.githubusercontent.com/ezzelden-hashem/portfolio/refs/heads/main/src/assets/portfolio/graphic-design/visual-identity/msa/blur/msa_pen_wmu-03_01-mid-blur.avif",
                        imgUrl: "https://raw.githubusercontent.com/ezzelden-hashem/portfolio/refs/heads/main/src/assets/portfolio/graphic-design/visual-identity/msa/mid/msa_pen_wmu-03_01-mid.jpg",
                        fullResolution: "https://raw.githubusercontent.com/ezzelden-hashem/portfolio/refs/heads/main/src/assets/portfolio/graphic-design/visual-identity/msa/full/msa_pen_wmu-03_01-full.jpg"
                    },
                ]
            } as ImgGridTemplateData
        },
    ]
}