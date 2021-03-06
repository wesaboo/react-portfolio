import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import About from "../pages/About";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";
import Container from "../components/Container";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography component={"span"}>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function SimpleTabs() {
  const classes = useStyles();
  const preventDefault = (event) => event.preventDefault();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root} style={{ backgroundColor: "#E0E0E0", minHeight: "97vh" }}>
      <AppBar position="static" style={{ backgroundColor: "#6CA4C8" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
        >
          <Tab
            href="/about"
            onClick={preventDefault}
            label="About Me"
            {...a11yProps(0)}
          />

          <Tab
            href="/projects"
            onClick={preventDefault}
            label="Projects"
            {...a11yProps(1)}
          />

          <Tab
            href="/contact"
            onClick={preventDefault}
            label="Contact Me"
            {...a11yProps(2)}
          />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Container>About Me</Container>
        <About />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Container>My Projects</Container>
        <Projects />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Container>Contact Me</Container>
        <h4>You can also email me at wesaboo@gmail.com</h4>
        <Contact />
      </TabPanel>
    </div>
  );
}
