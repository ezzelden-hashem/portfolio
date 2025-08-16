import { Folder, PortfolioObjectType } from "../../portfolio.model";
import { project_msa } from "./msa.project";
import { project_zad_elkhair } from "./zad-elkhair.project";

export const folder_visual_identity: Folder = {
    objectType: PortfolioObjectType.Folder,
    id: 'c-002-f-004',
    name: 'visual-identity',
    title: 'Visual Identity',
    icon: 'folder-i01',
    projects: [
        project_msa,
        project_zad_elkhair,
    ]
}