import React from "react";

const PortfolioContext = React.createContext(null);

export const PortfolioProvider = PortfolioContext.Provider;
export const PortfolioConsumer = PortfolioContext.Consumer;
export const prefix = process.env.NODE_ENV === "production" ? "https://itsjh1242.github.io/portfolio" : "";

export default PortfolioContext;
