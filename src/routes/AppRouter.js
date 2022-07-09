import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    BrowserRouter,
    Routes,
    Route,
    HashRouter
} from "react-router-dom";
import AttendeeDash from '../components/Attendees/AttendeeDash';
import SignIn from '../components/Auth/SignIn/SignIn';
import DashEventsOperator from '../components/Events/DashEventsOperator';
import Graphics from '../components/Graphics/Graphics';
import Home from '../components/Home/Home';
import Setting from '../components/Setting/Setting';
import { authRefresh, authRefreshData } from '../statement/actions/auth';
import { getOperator } from '../statement/actions/operators';
import { PrivateRouteAdmin } from './PrivateRouteAdmin';
import { PrivateRouteOperator } from './PrivateRouteOperator';
import { PrivateRouter } from './PrivateRouter';
import { PublicRouter } from './PublicRouter';

const AppRouter = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch( authRefresh() );
        dispatch( authRefreshData() );
    }, []);

    return (
        <HashRouter>
            <Routes>
                <Route path='/signin' element={ 
                    <PublicRouter>
                        <SignIn /> 
                    </PublicRouter>
                } />
                <Route path='/' element={ 
                    <PrivateRouter>
                        <PrivateRouteAdmin>
                            <Home /> 
                        </PrivateRouteAdmin>
                    </PrivateRouter>
                } />
                <Route path='/events' element={ 
                    <PrivateRouter>
                        <PrivateRouteAdmin>
                            <DashEventsOperator /> 
                        </PrivateRouteAdmin>
                    </PrivateRouter>
                } />
                <Route path='/setting' element={ 
                    <PrivateRouter>
                        <PrivateRouteOperator>
                            <Setting /> 
                        </PrivateRouteOperator>
                    </PrivateRouter>
                } />
                <Route path='/attendees/:id' element={ 
                    <PrivateRouter>
                        <PrivateRouteOperator>
                            <AttendeeDash /> 
                        </PrivateRouteOperator>
                    </PrivateRouter>
                } />
                <Route path='/graphics/:id' element={ 
                    <PrivateRouter>
                        <Graphics /> 
                    </PrivateRouter>
                } />
            </Routes>
        </HashRouter>
    )
}

export default AppRouter