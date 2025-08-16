import { Folder, PortfolioObjectType } from "../../portfolio.model";
import { project_accounting_office } from "./accounting-office.project";
import { project_lsa } from "./lsa.project";
import { project_other_logos } from "./other-logos.project";

export const folder_logos: Folder = {
    objectType: PortfolioObjectType.Folder,
    id: 'c-002-f-003',
    name: 'logos',
    title: 'Logos',
    icon: 'folder-i01',
    projects: [
        project_accounting_office,
        project_lsa,
        project_other_logos
    ]
}