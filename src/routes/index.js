import React from 'react';
import Route from 'react-router/lib/Route';
import IndexRedirect from 'react-router/lib/IndexRedirect';

import AppView from 'views/app';

export default function(){
    return (
        <Route name="App" path="/" component={AppView}>
            
        </Route>
    );
}
