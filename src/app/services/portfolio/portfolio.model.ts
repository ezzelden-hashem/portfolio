export type Category = {
    objectType: PortfolioObjectType.Category;
    id: string;
    name: string;
    title: string;
    icon: string;
    folders: Folder[];
    projects: Project[];
};
export type CategoryInfo = {
    objectType: PortfolioObjectType.CategoryInfo;
    id: string;
    name: string;
    title: string;
    icon: string;
};
export type Folder = {
    objectType: PortfolioObjectType.Folder;
    id: string;
    name: string;
    title: string;
    icon: string;
    projects: Project[];
};
export type FolderInfo = {
    objectType: PortfolioObjectType.FolderInfo;
    id: string;
    name: string;
    title: string;
    icon: string;
};
export type Project = {
    objectType: PortfolioObjectType.Project;
    id: string;
    name: string;
    title: string;
    icon: string;
    thumbnail: StringURL;
    templates: ProjectTemplate[];
};
export type ProjectInfo = {
    objectType: PortfolioObjectType.ProjectInfo;
    id: string;
    name: string;
    title: string;
    icon: string;
    thumbnail: StringURL;
};
// export type ObjectInfo = {
//     objectType: PortfolioObjectType;
//     id: string;
//     name: string;
//     title: string;
//     icon: string;
// }
export type ProjectTemplate = {
    templateName: string;
    templateData: TemplateData;
};
export type TemplateData = {}
export enum PortfolioObjectType {
    Category,
    CategoryInfo,
    Folder,
    FolderInfo,
    Project,
    ProjectInfo,
}
export type SegmentsSelectionObject = {
    category: CategoryInfo | null;
    folder: FolderInfo | null;
    project: ProjectInfo | null;
}
export type StringURL = string;