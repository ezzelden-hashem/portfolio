import { folder_book_cover } from "./graphic-design/book-covers/book-cover.folder";
import { project_flyers } from "./graphic-design/flyer/flyers.project";
import { folder_cards } from "./graphic-design/cards/cards.folder";
import { Category, PortfolioObjectType } from "./portfolio.model";
import { project_free_design } from "./graphic-design/free-design/free-design.project";
import { folder_logos } from "./graphic-design/logos/logos.folder";
import { project_posts } from "./graphic-design/posts/posts.project";
import { project_mo7a } from "./graphic-design/restaurants-menu/mo7a.project";
import { folder_visual_identity } from "./graphic-design/visual-identity/visual-identity.folder";
import { project_labels } from "./graphic-design/labels/labels.project";
import { project_3_glasses } from "./3d/3-glasses.project";
import { project_room_interior } from "./3d/room-interior.project";
import { project_cup_of_tea } from "./3d/cup-of-tea.project";
import { project_another_3d } from "./3d/another-3d.project";
import { project_password_wallet } from "./mobile-app/password-wallet.project";

export const portfolio: Category[] = 
[
    {
        objectType: PortfolioObjectType.Category,
        id: 'c-001',
        name: '3d',
        title: '3D',
        icon: '3d-i01',
        folders: [],
        projects: [
            project_3_glasses,
            project_room_interior,
            project_cup_of_tea,
            project_another_3d,
        ]
    },
    {
        objectType: PortfolioObjectType.Category,
        id: 'c-002',
        name: 'graphic-design',
        title: 'Graphic Design',
        icon: 'graphic-design-i01',
        folders: [
            folder_cards,
            folder_book_cover,
            folder_logos,
            folder_visual_identity,
        ],
        projects: [
            // project_flyers,
            project_free_design,
            project_posts,
            project_mo7a,
            project_labels,
        ]
    },
    {
        objectType: PortfolioObjectType.Category,
        id: 'c-003',
        name: 'mobile-apps',
        title: 'Mobile Apps',
        icon: 'mobile-app-i01',
        folders: [],
        projects: [
            project_password_wallet
        ]
    },
]