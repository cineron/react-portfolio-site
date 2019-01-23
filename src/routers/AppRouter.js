import React from "react";
import NotFoundPage from "../components/404";
import PortfolioPage from "../components/portfolio";
import PiecePage from "../components/piece";
import HomePage from "../components/home";
import ContactPage from "../components/contact";
import Header from "../components/header";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// Instead of using export
// Use a stateless functional component
const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
        
            <Switch>
                <Route path="/" component={HomePage} exact={true}/>
                <Route path="/portfolio/:id" component={PiecePage} />
                <Route path="/portfolio" component={PortfolioPage} exact={true}/>
                <Route path="/contact" component={ContactPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>

)

export default AppRouter; 