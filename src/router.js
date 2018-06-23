import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import CountReducer from './reducers/countReducer';
import Header from './components/header';
import CounterHome from './components/counterHome';
import PlusButton from './components/plusButton';
import MinusButton from './components/minusButton';
import ResetButton from './components/resetButton';
import NotFound from './components/notFound';

const store = createStore(
    combineReducers({
        count: CountReducer
    })
);

const Router = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <div>
                    <Header />
                    <Switch>
                        <Route path="/" component={CounterHome} exact={true} />
                        <Route path="/plus" component={PlusButton} />
                        <Route path="/minus" component={MinusButton} />
                        <Route path="/reset" component={ResetButton} />
                        <Route component={NotFound} />
                    </Switch>
                </div>
            </BrowserRouter>
        </Provider>
    );
}

export default Router;