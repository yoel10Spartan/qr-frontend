import React from 'react';
import { Navigate } from "react-router";
import useIsAuthenticated from '../hooks/useIsAuthenticated';

export const PublicRouter = ({ children }) => {
    const isAuthenticated = useIsAuthenticated();
    return !isAuthenticated ? children : <Navigate to="/events" />;
}