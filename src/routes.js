import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Depoimentos from './pages/Depoimentos';
import Servicos from './pages/Servicos';
import Contato from './pages/Contato';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Depoimentos} />
                <Route path="/servicos" component={Servicos} />
                <Route path="/contato" component={Contato} />
            </Switch>
        </BrowserRouter>
    );
}