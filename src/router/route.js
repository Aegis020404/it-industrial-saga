import MainPage from "../pages/MainPage";

import AboutCompanyPage from "../pages/AboutCompanyPage";
import ReviewsPage from "../pages/ReviewsPage";
import VacancyPage from "../pages/VacancyPage";
import KeysPage from '../pages/KeysPage'; 
import TariffPage from "../pages/TariffPage";
import KeySiteContainer from "../pages/KeySite";
import ContactsPage from "../pages/ContactsPage";
import SeoPage from "../pages/SeoPage";
import MobilePage from "../pages/MobilePage";
import CRMPage from "../pages/CRMPage";
import MarketplaceSeoPage from "../pages/genericServPages/MarketplaceSeoPage";

export const publicRouters = [
    {path: '/it-industrial-private', component: MainPage, exact: true},
    {path: '/keys', component: KeysPage, exact: true},

    {path: '/строй-мат', component: KeySiteContainer, exact: true},
    {path: '/avto-estetica', component: KeySiteContainer, exact: true},
    {path: '/hock-team', component: KeySiteContainer, exact: true},
    {path: '/llumar', component: KeySiteContainer, exact: true},
    {path: '/ec-vtor', component: KeySiteContainer, exact: true},
    {path: '/Перевозки-App', component: KeySiteContainer, exact: true},
    {path: '/CRM', component: KeySiteContainer, exact: true},

    {path: '/seo', component: SeoPage, exact: true},

    {path: '/about', component: AboutCompanyPage, exact: true},
    {path: '/reviews', component: ReviewsPage, exact: true},
    {path: '/vacancy', component: VacancyPage, exact: true},
    {path: '/tariffs', component: TariffPage, exact: true},
    {path: '/contacts', component: ContactsPage, exact: true},
    {path: '/mobile-develop', component: MobilePage, exact: true},
    {path: '/crm-develop', component: CRMPage, exact: true},

    {path:'/marketplace-seo', component: MarketplaceSeoPage, exact: true}
]

