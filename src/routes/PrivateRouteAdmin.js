import React from 'react';
import { Navigate } from 'react-router';
import useIsAdmin from '../hooks/useIsAdmin';

export const PrivateRouteAdmin = ({ children }) => {
    const isAdmin = useIsAdmin();
    return !isAdmin ? children : <Navigate to="/setting" />;
}