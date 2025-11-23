import type { ReactNode } from 'react'; // Imports it explicitly as a type

import HomePage from '../Pages/HomePage';
import AdultsPage from '../Pages/AdultsPage'
import JuniorsPage from '../Pages/JuniorsPage'
import GalleryPage from '../Pages/GalleryPage';
import SponsorsPage from '../Pages/SponsorsPage';
import ContactPage from '../Pages/ContactPage';  
import NewsletterPage from '../Pages/NewsletterPage';
import PoliciesPage from '../Pages/PoliciesPage';

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
    { path: '/contact', element: <ContactPage /> },
    { path: '/newsletter', element: <NewsletterPage /> },
    { path: '/policies', element: <PoliciesPage /> },
]

export const NotFoundRoute: AppRoute = {
    path: '*',
    element: <h2>404: Page Not Found</h2>,
}
