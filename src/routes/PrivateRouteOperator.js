import React from 'react';
import { Navigate } from 'react-router';
import useIsOperator from '../hooks/useIsOperator';

export const PrivateRouteOperator = ({ children }) => {
    const isOperator = useIsOperator();
    return !isOperator ? children : <Navigate to="/" />;
}