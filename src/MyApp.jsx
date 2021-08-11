import React from "react";
import { Avatar, ShellBar, ShellBarItem } from "@ui5/webcomponents-react";
import "@ui5/webcomponents-icons/dist/add.js";
import { Switch, Route, Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { Home } from "./Home";
import { Detail } from "./Detail";

export function MyApp() {
  const history = useHistory();
  const handleLogoClick = () => {
    history.push("./");
  };
  return (
    <>
      <ShellBar
        logo={<img src="reactLogo.png" />}
        profile={
          <Avatar>
            <img src="profilePictureExample.png" />
          </Avatar>
        }
        primaryTitle="My App"
        onLogoClick={handleLogoClick}
      >
        <ShellBarItem icon="add" text="Add" />
      </ShellBar>
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/detail" component={Detail} />
        <Redirect from="/" to="/home" />
      </Switch>
    </>
  );
}