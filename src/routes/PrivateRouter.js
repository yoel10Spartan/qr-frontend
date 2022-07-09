import React from 'react';
import { Navigate } from 'react-router';
import useIsAuthenticated from '../hooks/useIsAuthenticated';

export const PrivateRouter = ({ children }) => {
    const isAuthenticated = useIsAuthenticated();
    return isAuthenticated ? children : <Navigate to="/signin" />;
}