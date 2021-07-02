import { makeStyles, Typography, useTheme } from "@material-ui/core";
import Landscape from "features/donations/resources/landscape.jpeg";
import { Link } from "react-router-dom";
import Markdown from "components/Markdown";
import CouchersLogo from "resources/CouchersLogo";
import classNames from "classnames";
import DonationsBox from "./DonationsBox";

import {
  DONATIONS_BANNER_TITLE,
  DONATIONS_BANNER_TEXT,
  DONATIONS_TITLE,
  DONATIONS_TEXT,
  DONATIONS_TEXT2,
} from "features/donations/constants";

const useStyles = makeStyles((theme) => ({
  donationsImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    opacity: "0.3",
  },

  donationsLogo: {
    "&&": {
      height: "72px",
      width: "initial",
    },
  },

  donationsWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      height: "6rem",
    },
  },

  donationsLogoHeader: {
    position: "absolute",
    zIndex: 1,
    maxWidth: "1100px",
    display: "flex",
    alignItems: "center",
    width: "100%",
    [theme.breakpoints.down("md")]: {
      maxWidth: "840px",
    },
    [theme.breakpoints.down("sm")]: {
      margin: theme.spacing(0, 3),
    },
  },

  donationsPage: {
    display: "grid",
    gridTemplateColumns: "624px 408px",
    gridGap: theme.spacing(8),
    position: "relative",
    left: "50%",
    transform: "translateX(-50%)",
    justifyContent: "center",
    margin: theme.spacing(3, 0, 9, 0),
    [theme.breakpoints.down("md")]: {
      maxWidth: "840px",
      display: "flex",
      flexDirection: "column",
    },
    [theme.breakpoints.down("sm")]: {
      maxWidth: "initial",
      left: "initial",
      transform: "initial",
      padding: theme.spacing(0, 3),
    },
  },

  donationsLogoText: {
    marginLeft: theme.spacing(2),
  },

  donationsText: {
    "&& p": {
      fontSize: "1rem"
    },
    "&& li": {
      fontSize: "1rem"
    }
  }
}));

export default function Donations() {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.donationsWrapper}>
        <div className={classes.donationsLogoHeader}>
          <CouchersLogo className={classes.donationsLogo} />
          <div className={classes.donationsLogoText}>
            <Typography variant="h2">{DONATIONS_BANNER_TITLE}</Typography>
            <Typography variant="subtitle1">{DONATIONS_BANNER_TEXT}</Typography>
          </div>
        </div>
        <img className={classes.donationsImage} src={Landscape} />
      </div>
      <section className={classes.donationsPage}>
        <div>
          <Typography variant="h1">{DONATIONS_TITLE}</Typography>
          <Markdown className={classes.donationsText} source={DONATIONS_TEXT} />
        </div>
        <div>
          <DonationsBox />
          <Markdown className={classes.donationsText} source={DONATIONS_TEXT2} />
        </div>
      </section>
    </div>
  );
}
