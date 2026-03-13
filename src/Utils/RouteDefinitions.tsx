import type { ReactNode } from 'react'; // Imports it explicitly as a type

import HomePage from '../Pages/HomePage';
import AdultsPage from '../Pages/AdultsPage'
import JuniorsPage from '../Pages/JuniorsPage'
import GalleryPage from '../Pages/GalleryPage';
import SponsorsPage from '../Pages/SponsorsPage';
import TournamentPage from '../Pages/TournamentPage';  
import ClubDocumentsPage from '../Pages/ClubDocuments';
import SocialCalendarPage from '../Pages/SocialCalendarPage';
import SafeGuardingPage from '../Pages/SafeGuardingPage';
import NewsPage from '../Pages/NewsPage';
import AboutUsPage from '../Pages/AboutUsPage';
import PlayersAndTrainingPage from '../Pages/PlayersAndTrainingPage';

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
    { path: '/tournament', element: <TournamentPage /> },
    { path: '/club-documents', element: <ClubDocumentsPage /> },
    { path: '/social', element: <SocialCalendarPage /> },
    { path: '/safeguarding', element: <SafeGuardingPage /> },
    { path: '/news', element: <NewsPage /> },
    { path: '/about', element: <AboutUsPage /> },
    { path: '/players', element: <PlayersAndTrainingPage /> },
]

export const NotFoundRoute: AppRoute = {
    path: '*',
    element: <h2>404: Page Not Found</h2>,
}
