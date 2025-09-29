import { MobileAppTemplateData } from "../../../utilities/project/project-templates/mobile-app/mobile-app.component";
import { PortfolioObjectType, Project } from "../portfolio.model";

export const project_password_wallet: Project = {
    title: 'Password Wallet',
    icon: 'project-i01',
    id: 'c-003-f-000-p-001',
    description: 'Password Wallet is a deterministic password generation app that enables users to generate, retrieve, and manage complex passwords without storing them anywhere.',
    name: 'password-wallet',
    objectType: PortfolioObjectType.Project,
    thumbnail: '',
    templates: [
        {
            templateName: 'app-mobile-app',
            templateData: {
                title: 'Password Wallet',
                iconUrl: '',
                keyFeatures: [
                    'Generated from private user data (name, ID, birth dates, etc.).',
                    'Regenerate passwords at any time with identical input.',
                    'Group passwords by domain with history & multiple accounts.',
                    'Choose length (4-512), allowed symbols, casing, etc.',
                    'Offline by design, no Internet required.',
                    'Predefined list of platforms with icons for easy use.',
                    'Simple, privacy-first, and user-focused design.',
                    'Local encryption of metadata and preferences.'
                ],
                downloadLink: 'https://github.com/ezzelden-hashem/password-wallet/releases/download/v1.0.0/password-wallet-mvp-1.0.apk',
                gitHubLink: 'https://github.com/ezzelden-hashem/password-wallet',
                shortDescription: 'Password Wallet is a deterministic password generation app that enables users to generate, retrieve, and manage complex passwords without storing them anywhere.',
                longDescription: `This is the first MVP release of Password Wallet, delivered as an APK package. While some non-critical features (such as the settings page and a few minor refinements) are not yet included, the core functionality is stable and fully operational. The current version allows users to securely generate, store, and manage their passwords with a smooth and reliable user experience. This release is focused on validating the essential workflows and ensuring the foundation of the application is solid before expanding into advanced features. As an MVP, this version serves as the first milestone, showcasing the app’s value proposition and paving the way for further improvements, optimizations, and additional features in upcoming releases.`
            } as MobileAppTemplateData
        }
    ]
}