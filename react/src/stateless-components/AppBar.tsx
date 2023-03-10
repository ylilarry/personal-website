import React from "react";
import * as Material from "@mui/material";
import {
  Button,
  Icon,
  IconButton,
  Link,
  Toolbar,
  Typography,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
export class AppBar extends React.Component {
  render() {
    return (
      <Material.AppBar elevation={0} color='transparent' position='static'>
        <Toolbar>
          <Typography variant='h5' sx={{ flexGrow: 1 }}></Typography>
          <Link
            color='inherit'
            href='https://github.com/ylilarry'
            target='_blank'>
            <IconButton color='inherit'>
              <GitHubIcon />
            </IconButton>
          </Link>
          <Link
            color='inherit'
            href='https://www.linkedin.com/in/ylilarry/'
            target='_blank'>
            <IconButton color='inherit'>
              <LinkedInIcon />
            </IconButton>
          </Link>
        </Toolbar>
      </Material.AppBar>
    );
  }
}
