import { ImgFullTemplateData } from "../../../utilities/project/project-templates/img-full/img-full.component";
import { ImgGridTemplateData } from "../../../utilities/project/project-templates/img-grid/img-grid.component";
import { PortfolioObjectType, Project } from "../portfolio.model";

export const project_room_interior: Project = {
    objectType: PortfolioObjectType.Project,
    description: 'A modern interior design concept built in Blender. The project captures a dream-like atmosphere with a stylish and cozy finish.',
    id: 'c-001-f-000-p-002',
    name: 'room-interior',
    title: 'Room Interior',
    icon: 'project-i01',
    thumbnail: "https://raw.githubusercontent.com/ezzelden-hashem/portfolio/refs/heads/main/src/assets/portfolio/3d/room-interior/room-interior-thumbnail.jpg",
    templates: [
        {
            templateName: 'app-img-full',
            templateData: {
                title: 'Room Interior Visualization',
                imgUrl: 'https://raw.githubusercontent.com/ezzelden-hashem/portfolio/refs/heads/main/src/assets/portfolio/3d/room-interior/mid/room-13-e01-mid.jpg',
                thumbnailUrl: 'https://raw.githubusercontent.com/ezzelden-hashem/portfolio/refs/heads/main/src/assets/portfolio/3d/room-interior/blur/room-13-e01-mid-blur.avif',
                fullResolution: 'https://raw.githubusercontent.com/ezzelden-hashem/portfolio/refs/heads/main/src/assets/portfolio/3d/room-interior/full/room-13-e01-full.jpg'
            } as ImgFullTemplateData
        },
        {
            templateName: 'app-img-grid',
            templateData: {
                title: 'See More',
                imgs: [
                    {
                        imgUrl: 'https://raw.githubusercontent.com/ezzelden-hashem/portfolio/refs/heads/main/src/assets/portfolio/3d/room-interior/mid/room-06-mid.jpg',
                        thumbnail: 'https://raw.githubusercontent.com/ezzelden-hashem/portfolio/refs/heads/main/src/assets/portfolio/3d/room-interior/blur/room-06-mid-blur.avif',
                        fullResolution: 'https://raw.githubusercontent.com/ezzelden-hashem/portfolio/refs/heads/main/src/assets/portfolio/3d/room-interior/full/room-06-full.jpg'
                    },
                    {
                        imgUrl: 'https://raw.githubusercontent.com/ezzelden-hashem/portfolio/refs/heads/main/src/assets/portfolio/3d/room-interior/mid/room-07-mid.jpg',
                        thumbnail: 'https://raw.githubusercontent.com/ezzelden-hashem/portfolio/refs/heads/main/src/assets/portfolio/3d/room-interior/blur/room-07-mid-blur.avif',
                        fullResolution: 'https://raw.githubusercontent.com/ezzelden-hashem/portfolio/refs/heads/main/src/assets/portfolio/3d/room-interior/full/room-07-full.jpg'
                    },
                    {
                        imgUrl: 'https://raw.githubusercontent.com/ezzelden-hashem/portfolio/refs/heads/main/src/assets/portfolio/3d/room-interior/mid/room-08-e01-mid.jpg',
                        thumbnail: 'https://raw.githubusercontent.com/ezzelden-hashem/portfolio/refs/heads/main/src/assets/portfolio/3d/room-interior/blur/room-08-e01-mid-blur.avif',
                        fullResolution: 'https://raw.githubusercontent.com/ezzelden-hashem/portfolio/refs/heads/main/src/assets/portfolio/3d/room-interior/full/room-08-e01-full.jpg'
                    },
                    {
                        imgUrl: 'https://raw.githubusercontent.com/ezzelden-hashem/portfolio/refs/heads/main/src/assets/portfolio/3d/room-interior/mid/room-09-500s-mid.jpg',
                        thumbnail: 'https://raw.githubusercontent.com/ezzelden-hashem/portfolio/refs/heads/main/src/assets/portfolio/3d/room-interior/blur/room-09-500s-mid-blur.avif',
                        fullResolution: 'https://raw.githubusercontent.com/ezzelden-hashem/portfolio/refs/heads/main/src/assets/portfolio/3d/room-interior/full/room-09-500s-full.jpg'
                    },
                    {
                        imgUrl: 'https://raw.githubusercontent.com/ezzelden-hashem/portfolio/refs/heads/main/src/assets/portfolio/3d/room-interior/mid/room-10-500s-mid.jpg',
                        thumbnail: 'https://raw.githubusercontent.com/ezzelden-hashem/portfolio/refs/heads/main/src/assets/portfolio/3d/room-interior/blur/room-10-500s-mid-blur.avif',
                        fullResolution: 'https://raw.githubusercontent.com/ezzelden-hashem/portfolio/refs/heads/main/src/assets/portfolio/3d/room-interior/full/room-10-500s-full.jpg'
                    },
                    {
                        imgUrl: 'https://raw.githubusercontent.com/ezzelden-hashem/portfolio/refs/heads/main/src/assets/portfolio/3d/room-interior/mid/room-12-mid.jpg',
                        thumbnail: 'https://raw.githubusercontent.com/ezzelden-hashem/portfolio/refs/heads/main/src/assets/portfolio/3d/room-interior/blur/room-12-mid-blur.avif',
                        fullResolution: 'https://raw.githubusercontent.com/ezzelden-hashem/portfolio/refs/heads/main/src/assets/portfolio/3d/room-interior/full/room-12-full.jpg'
                    },
                    
                ]
            } as ImgGridTemplateData
        },
    ]
}