// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-skills',
//   imports: [],
//   templateUrl: './skills.component.html',
//   styleUrl: './skills.component.css'
// })
// export class SkillsComponent {

// }

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from "../home/footer/footer.component";

// Skills data interface
interface Skill {
  name: string;
  level: number;
  icon: string;
  description?: string;
}

interface SkillGroup {
  title: string;
  skills: Skill[];
  icon: string;
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, FooterComponent],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css',
})
export class SkillsComponent {
  experienceYears = 3;

  skillGroups: SkillGroup[] = [
    {
      title: 'Frontend Technologies',
      icon: `<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <polyline points="16 18 22 12 16 6"/>
        <polyline points="8 6 2 12 8 18"/>
      </svg>`,
      skills: [
        {
          name: 'HTML5',
          level: 95,
          icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M3.345 2.396L4.764 20.604L12 22L19.236 20.604L20.655 2.396H3.345ZM17.5 6H8.5L8.75 8.5H17.25L16.75 17L12 18L7.25 17L7 14H9.5L9.75 15.5L12 16L14.25 15.5L14.5 12.5H6.75L6 6Z"/>
          </svg>`,
        },
        {
          name: 'CSS3',
          level: 90,
          icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M3.345 2.396L4.764 20.604L12 22L19.236 20.604L20.655 2.396H3.345ZM16.5 8H8.5L8.75 10.5H16.25L15.75 15.5L12 16.5L8.25 15.5L8 13H10.5L10.75 14L12 14.25L13.25 14L13.5 11.5H7.5L6.75 6H17.25L16.5 8Z"/>
          </svg>`,
        },
        {
          name: 'JavaScript',
          level: 88,
          icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M3 3H21V21H3V3ZM19.5 4.5H4.5V19.5H19.5V4.5ZM7.5 16.5H9V12C9 11.5 9.5 11 10 11S11 11.5 11 12V16.5H12.5V12C12.5 10.6 11.4 9.5 10 9.5S7.5 10.6 7.5 12V16.5ZM14 16.5H17C17.8 16.5 18.5 15.8 18.5 15V13C18.5 12.2 17.8 11.5 17 11.5H15.5V10H18.5V8.5H15C14.2 8.5 13.5 9.2 13.5 10V12C13.5 12.8 14.2 13.5 15 13.5H16.5V15H13.5L14 16.5Z"/>
          </svg>`,
        },
        {
          name: 'TypeScript',
          level: 85,
          icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M1.125 0C.502 0 0 .502 0 1.125V22.875C0 23.498.502 24 1.125 24H22.875C23.498 24 24 23.498 24 22.875V1.125C24 .502 23.498 0 22.875 0H1.125ZM9.75 5.25H14.25V6.75H12.75V18.75H11.25V6.75H9.75V5.25ZM16.5 9C17.325 9 18 9.675 18 10.5V12H16.5V10.5H15V13.5H16.5V15H15V17.25H16.5V18.75H15C14.175 18.75 13.5 18.075 13.5 17.25V10.5C13.5 9.675 14.175 9 15 9H16.5Z"/>
          </svg>`,
        },
      ],
    },
    {
      title: 'Frameworks & Libraries',
      icon: `<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <rect x="3" y="3" width="7" height="7"/>
        <rect x="14" y="3" width="7" height="7"/>
        <rect x="14" y="14" width="7" height="7"/>
        <rect x="3" y="14" width="7" height="7"/>
      </svg>`,
      skills: [
        {
          name: 'Angular',
          level: 90,
          icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L2.5 6L4 18L12 22L20 18L21.5 6L12 2ZM8.5 16L10.5 11H13.5L15.5 16H13.5L13 14.5H11L10.5 16H8.5ZM12 7.5L11.25 9.5H12.75L12 7.5Z"/>
          </svg>`,
        },
        {
          name: 'RxJS',
          level: 75,
          icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <circle cx="8" cy="12" r="2"/>
            <path d="M16 12C16 14.21 14.21 16 12 16S8 14.21 8 12"/>
            <path d="M12 8C14.21 8 16 9.79 16 12"/>
            <path d="M12 16C9.79 16 8 14.21 8 12"/>
          </svg>`,
        },
        {
          name: 'Sass',
          level: 80,
          icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.373 0 0 5.373 0 12S5.373 24 12 24 24 18.627 24 12 18.627 0 12 0ZM8.5 15C7.673 15 7 14.327 7 13.5S7.673 12 8.5 12 10 12.673 10 13.5 9.327 15 8.5 15ZM15.5 15C14.673 15 14 14.327 14 13.5S14.673 12 15.5 12 17 12.673 17 13.5 16.327 15 15.5 15Z"/>
          </svg>`,
        },
        {
          name: 'Tailwind CSS',
          level: 85,
          icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 6C9.33 6 7.67 7.33 7 10C8 8.67 9.17 8.17 10.5 8.5C11.26 8.68 11.8 9.22 12.38 9.8C13.54 10.96 14.83 12 17 12C19.67 12 21.33 10.67 22 8C21 9.33 19.83 9.83 18.5 9.5C17.74 9.32 17.2 8.78 16.62 8.2C15.46 7.04 14.17 6 12 6ZM7 12C4.33 12 2.67 13.33 2 16C3 14.67 4.17 14.17 5.5 14.5C6.26 14.68 6.8 15.22 7.38 15.8C8.54 16.96 9.83 18 12 18C14.67 18 16.33 16.67 17 14C16 15.33 14.83 15.83 13.5 15.5C12.74 15.32 12.2 14.78 11.62 14.2C10.46 13.04 9.17 12 7 12Z"/>
          </svg>`,
        },
      ],
    },
    {
      title: 'Backend & Languages',
      icon: `<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
        <line x1="8" y1="21" x2="16" y2="21"/>
        <line x1="12" y1="17" x2="12" y2="21"/>
      </svg>`,
      skills: [
        {
          name: 'C#',
          level: 70,
          icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.477 2 2 6.477 2 12S6.477 22 12 22 22 17.523 22 12 17.523 2 12 2ZM8.5 8H12C13.105 8 14 8.895 14 10V14C14 15.105 13.105 16 12 16H8.5V8ZM10 10V14H12V10H10ZM16.5 9V11H18V13H16.5V15H15V13H13.5V11H15V9H16.5Z"/>
          </svg>`,
        },
        {
          name: '.NET',
          level: 68,
          icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M3.5 2L8.5 22H10L5 2H3.5ZM14 2L19 22H20.5L15.5 2H14ZM2 11H22V13H2V11Z"/>
          </svg>`,
        },
        {
          name: 'Python',
          level: 65,
          icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M14.31.18L16.74 0H19V2.26L18.84 4.69C18.84 6.62 17.54 7.58 15.62 7.58H8.38C6.46 7.58 5.16 8.52 5.16 10.45V11.54H18.84V13.54H13.08V22H11.08V15.54H3.16V13.54H7.16V10.45C7.16 8.52 8.46 7.58 10.38 7.58H17.62C19.54 7.58 20.84 6.62 20.84 4.69V2.26H24V0H21.69L19.26.18L16.84.88L14.31.18Z"/>
          </svg>`,
        },
        {
          name: 'API Integration',
          level: 82,
          icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M4.93 4.93C3.12 6.74 2 9.24 2 12S3.12 17.26 4.93 19.07L6.34 17.66C5.22 16.54 4.5 14.85 4.5 13S5.22 9.46 6.34 8.34L4.93 4.93ZM17.66 6.34L19.07 4.93C20.88 6.74 22 9.24 22 12S20.88 17.26 19.07 19.07L17.66 17.66C18.78 16.54 19.5 14.85 19.5 13S18.78 9.46 17.66 8.34L17.66 6.34ZM8 12C8 10.9 8.9 10 10 10S12 10.9 12 12 11.1 14 10 14 8 13.1 8 12ZM14 12C14 10.9 14.9 10 16 10S18 10.9 18 12 17.1 14 16 14 14 13.1 14 12Z"/>
          </svg>`,
        },
      ],
    },
    {
      title: 'Tools & Workflow',
      icon: `<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
      </svg>`,
      skills: [
        {
          name: 'Git',
          level: 88,
          icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M23.546 10.93L13.067.452C12.477-.139 11.523-.139 10.932.452L8.546 2.84L11.159 5.453C11.73 5.272 12.369 5.394 12.828 5.853C13.288 6.314 13.409 6.955 13.227 7.526L15.685 9.984C16.257 9.802 16.898 9.923 17.357 10.382C18.045 11.07 18.045 12.182 17.357 12.87C16.669 13.558 15.557 13.558 14.869 12.87C14.364 12.365 14.26 11.595 14.557 10.995L12.269 8.707V15.304C12.427 15.383 12.573 15.486 12.703 15.616C13.391 16.304 13.391 17.416 12.703 18.104C12.015 18.792 10.903 18.792 10.215 18.104C9.527 17.416 9.527 16.304 10.215 15.616C10.373 15.458 10.557 15.339 10.755 15.261V8.618C10.557 8.539 10.374 8.421 10.215 8.263C9.704 7.752 9.604 6.977 9.907 6.376L7.322 3.791L.453 10.661C-.138 11.252-.138 12.206.453 12.797L10.932 23.275C11.523 23.866 12.477 23.866 13.068 23.275L23.546 12.797C24.137 12.206 24.137 11.252 23.546 10.661V10.93Z"/>
          </svg>`,
        },
        {
          name: 'GitHub',
          level: 85,
          icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.374 0 0 5.373 0 12C0 17.302 3.438 21.8 8.207 23.387C8.806 23.498 9 23.126 9 22.81V20.576C5.662 21.302 4.967 19.16 4.967 19.16C4.421 17.773 3.634 17.404 3.634 17.404C2.545 16.659 3.717 16.675 3.717 16.675C4.922 16.759 5.556 17.912 5.556 17.912C6.626 19.746 8.363 19.216 9.048 18.909C9.155 18.134 9.466 17.604 9.81 17.305C7.145 17 4.343 15.971 4.343 11.374C4.343 10.063 4.812 8.993 5.579 8.153C5.455 7.85 5.044 6.629 5.696 4.977C5.696 4.977 6.704 4.655 8.997 6.207C9.954 5.941 10.98 5.808 12 5.803C13.02 5.808 14.047 5.941 15.006 6.207C17.297 4.655 18.303 4.977 18.303 4.977C18.956 6.630 18.545 7.851 18.421 8.153C19.191 8.993 19.656 10.064 19.656 11.374C19.656 15.983 16.849 16.998 14.177 17.295C14.607 17.667 15 18.397 15 19.517V22.81C15 23.129 15.192 23.504 15.801 23.386C20.566 21.797 24 17.300 24 12C24 5.373 18.627 0 12 0Z"/>
          </svg>`,
        },
      ],
    },
  ];

  get totalSkills(): number {
    return this.skillGroups.reduce(
      (total, group) => total + group.skills.length,
      0
    );
  }
}
