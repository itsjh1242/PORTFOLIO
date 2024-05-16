import React from "react";

const PortfolioContext = React.createContext(null);

export const PortfolioProvider = PortfolioContext.Provider;
export const PortfolioConsumer = PortfolioContext.Consumer;
export const prefix = process.env.NODE_ENV === "production" ? "/portfolio" : "";

export default PortfolioContext;
