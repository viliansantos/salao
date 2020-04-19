import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Principal from './pages/Principal';
import Menu from './pages/Menu';
import Carroussel from './pages/Carroussel';
import Servicos from './pages/Servicos';
import Depoimentos from './pages/Depoimentos';
import Contato from './pages/Contato';


export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Principal} />
                <Route path="/menu" component={Menu} />
                <Route path="/carroussel" component={Carroussel} />
                <Route path="/servicos" component={Servicos} />
                <Route path="/depoimentos" component={Depoimentos} />
                <Route path="/contato" component={Contato} />
            </Switch>
        </BrowserRouter>
    );
}