import { Routes } from '@angular/router';
import { routes as categoryRoutes } from './pages/portfolio/categories/category/category.routes';
import { HomeComponent } from './pages/home/home.component';
import { UrlResolverComponent } from './pages/url-resolver/url-resolver.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'portfolio',
        loadComponent: () => import('./pages/portfolio/portfolio.component').then((m) => m.PortfolioComponent),
        children: categoryRoutes
    },
    {
        path: 'about',
        loadComponent: () => import('./pages/about/about.component').then((m) => m.AboutComponent)
    },
    {
            path: '**',
            component: UrlResolverComponent
    },
];
