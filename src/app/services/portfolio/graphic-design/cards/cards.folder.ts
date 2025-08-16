import { Folder, PortfolioObjectType } from "../../portfolio.model";
import { project_card_design } from "./card-design.project";
import { project_eklear } from "./eklear.project";
import { project_ekramy_travel } from "./ekramy-travel.project";
import { project_mohamed_lawyer } from "./mohamed-lawyer.project";
import { project_rose_perfume } from "./rose-perfume.project";

export const folder_cards: Folder = {
    objectType: PortfolioObjectType.Folder,
    id: 'c-002-f-001',
    name: 'cards',
    title: 'Cards',
    icon: 'folder-i01',
    projects: [
        project_ekramy_travel,
        project_mohamed_lawyer,
        project_card_design,
        project_rose_perfume,
        project_eklear,
    ]
}