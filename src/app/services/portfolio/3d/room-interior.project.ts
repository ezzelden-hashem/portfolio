import { ImgFullTemplateData } from "../../../utilities/project/project-templates/img-full/img-full.component";
import { ImgGridTemplateData } from "../../../utilities/project/project-templates/img-grid/img-grid.component";
import { PortfolioObjectType, Project } from "../portfolio.model";

export const project_room_interior: Project = {
    objectType: PortfolioObjectType.Project,
    id: 'c-001-f-000-p-002',
    name: 'room-interior',
    title: 'Room Interior',
    icon: 'project-i01',
    thumbnail: 'assets/portfolio/3d/room-interior/room-interior-thumbnail.jpg',
    templates: [
        {
            templateName: 'app-img-full',
            templateData: {
                title: 'Room Interior Visualization',
                imgUrl: 'assets/portfolio/3d/room-interior/room-13-e01.jpg'
            } as ImgFullTemplateData
        },
        {
            templateName: 'app-img-grid',
            templateData: {
                title: 'See More',
                imgUrls: [
                    'assets/portfolio/3d/room-interior/room-06.png',
                    'assets/portfolio/3d/room-interior/room-07.png',
                    'assets/portfolio/3d/room-interior/room-08-e01.jpg',
                    'assets/portfolio/3d/room-interior/room-09-500s.png',
                    'assets/portfolio/3d/room-interior/room-10-500s.png',
                    'assets/portfolio/3d/room-interior/room-12.png',
                ]
            } as ImgGridTemplateData
        },
    ]
}