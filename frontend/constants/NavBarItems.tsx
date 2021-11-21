import { appRoutes } from './AppRoutes';

export const NAVBAR_ITEMS = [
   {
      name: 'Créer une annonce',
      path: appRoutes.CREATE_AD,
   },
   {
      name: 'Rechercher',
      path: appRoutes.RESEARCH,
   },
   {
      name: 'Mes favoris',
      path: appRoutes.FAVORITES,
   },
   {
      name: 'Mes messages',
      path: appRoutes.MESSAGES,
   },
   {
      name: 'Mon compte',
      path: appRoutes.ACCOUNT,
   },
   {
      name: 'Se connecter',
      path: appRoutes.LOGIN,
   },
];
