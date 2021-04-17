import * as React from "react";

import { Admin, Resource } from 'react-admin';
import drfProvider, { fetchJsonWithAuthToken } from 'ra-data-django-rest-framework';
import ptBrMessages from 'ra-language-pt-br';
import polyglotI18nProvider from 'ra-i18n-polyglot';

import HealingIcon from '@material-ui/icons/Healing';
import ViewListIcon from '@material-ui/icons/ViewList';

import Dashboard from './pages/Dashboard';
import NotFound from './pages/NotFound';

import { CIDList, CIDShow } from './cadastros/cid'
import { GrupoCIDList, GrupoCIDShow } from './cadastros/grupo_cid'

window.$URL = 'http://localhost:8000';

const messages = { 'pt-br': ptBrMessages };
const i18nProvider = polyglotI18nProvider(locale => messages[locale], 'pt-br',  { allowMissing: true });
const dataProvider = drfProvider(`${window.$URL}/api`, fetchJsonWithAuthToken);

const App = () => (
    <Admin dashboard={ Dashboard } dataProvider={ dataProvider } catchAll={ NotFound } i18nProvider = { i18nProvider } >
        <Resource name="grupo_cid" icon={ HealingIcon } list={ GrupoCIDList } show= { GrupoCIDShow } options={{ "label": "Grupo CID" }}/>
        <Resource name="cid" icon={ ViewListIcon } list={ CIDList } show= { CIDShow } options={{ "label": "CID" }}/>
    </Admin>
);

export default App;