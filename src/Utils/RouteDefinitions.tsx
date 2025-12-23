import type { ReactNode } from 'react'; // Imports it explicitly as a type

import HomePage from '../Pages/HomePage';
import AdultsPage from '../Pages/AdultsPage'
import JuniorsPage from '../Pages/JuniorsPage'
import GalleryPage from '../Pages/GalleryPage';
import SponsorsPage from '../Pages/SponsorsPage';
import TournamentsPage from '../Pages/TournamentsPage';  
import NewsletterPage from '../Pages/NewsletterPage';
import PoliciesPage from '../Pages/PoliciesPage';
import SafeGuardingPage from '../Pages/SafeGuardingPage';
import NewsPage from '../Pages/NewsPage';

interface AppRoute {
    path: string;
    element: ReactNode;
}

export const AppRoutes: AppRoute[] = [
    { path: '/', element: <HomePage /> },
    { path: '/adults', element: <AdultsPage /> },
    { path: '/juniors', element: <JuniorsPage /> },
    { path: '/gallery', element: <GalleryPage /> },
    { path: '/sponsors', element: <SponsorsPage /> },
    { path: '/tournaments', element: <TournamentsPage /> },
    { path: '/newsletter', element: <NewsletterPage /> },
    { path: '/policies', element: <PoliciesPage /> },
    { path: '/safeguarding', element: <SafeGuardingPage /> },
    { path: '/news', element: <NewsPage /> },
]

export const NotFoundRoute: AppRoute = {
    path: '*',
    element: <h2>404: Page Not Found</h2>,
}
