import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import withStyles from "@material-ui/core/styles/withStyles";
import MainFooter from "components/Footer/MainFooter.jsx";
import MainHeader from "components/Header/MainHeader.jsx";
import NotFound from "../NotFound";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Button from "components/CustomButtons/Button.jsx";
import CustomDropdown from "components/CustomDropdown/CustomDropdown.jsx";
import { mainRoutes } from "../../routes.js";
import Badge from "components/Badge/Badge.jsx";
import InputAdornment from "@material-ui/core/InputAdornment";

import CustomInput from "components/CustomInput/CustomInput.jsx";
import "assets/scss/material-kit-react.scss?v=1.4.0";
import "../../assets/css/index.css";

import navbarsStyle from "../../assets/jss/material-kit-react/views/componentsSections/navbarsStyle.jsx";

class MainLayout extends Component {
  getRoutes = routes => {
    return routes.map((prop, key) => {
      return (
        <Route path={prop.path} exact component={prop.component} key={key} />
      );
    });
  };

  render() {
    const { classes, ...rest } = this.props;
    return (
      <div>
        <MainHeader
          brand="Random Things"
          path="/"
          fixed
          color="transparent"
          changeColorOnScroll={{
            height: 200,
            color: "orange"
          }}
          leftLinks={
            <List className={classes.list}>
              <ListItem className={classes.listItem + " mr-2"}>
                <Button
                  href="/catalogo"
                  className={classes.navLink}
                  color="transparent"
                >
                  Catalogo
                </Button>
              </ListItem>
              <ListItem className={classes.listItem}>
                <div id="nav-catalogo" className="color-white">
                  <CustomInput
                    inputProps={{
                      placeholder: "Pesquisar",
                      endAdornment: (
                        <InputAdornment position="end">
                          <a href="/catalogo">
                            <i className="fas fa-search color-white" />
                          </a>
                        </InputAdornment>
                      )
                    }}
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </div>
              </ListItem>
            </List>
          }
          rightLinks={
            <List className={classes.list}>
              <ListItem className={classes.listItem}>
                <Button
                  href="/favorito"
                  className={classes.navLink}
                  color="transparent"
                >
                  <i className="fas fa-heart" />
                </Button>
              </ListItem>
              <ListItem className={classes.listItem}>
                <Button
                  href="/carrinho"
                  className={classes.navLink}
                  color="transparent"
                >
                  <i className="fas fa-shopping-cart" />
                  <Badge color="info">4</Badge>
                </Button>
              </ListItem>
              <ListItem className={classes.listItem}>
                <CustomDropdown
                  buttonText="Embarque Conosco"
                  buttonProps={{
                    className: classes.navLink,
                    color: "transparent"
                  }}
                  dropdownList={[
                    { name: "Novo Usuario", path: "/cadastro" },
                    { name: "Entrar", path: "/login" }
                  ]}
                />
              </ListItem>
            </List>
          }
        />
        <Switch>
          {this.getRoutes(mainRoutes)}
          <Route component={NotFound} />
        </Switch>
        <MainFooter />
      </div>
    );
  }
}

export default withStyles(navbarsStyle)(MainLayout);