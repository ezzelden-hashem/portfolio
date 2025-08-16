import { Folder, PortfolioObjectType } from "../../portfolio.model";
import { project_elmaarof } from "./elmaarof.project";
import { project_eltamayoz } from "./eltamayoz.project";

export const folder_book_cover: Folder = {
    objectType: PortfolioObjectType.Folder,
    id: 'c-002-f-002',
    name: 'book-cover',
    title: 'Book Covers',
    icon: 'folder-i01',
    projects: [
        project_elmaarof,
        project_eltamayoz,
    ]
}