// These act as global styles
const styles = {
  global: {
    html: {
      overflowX: "initial",
    },
    body: {
      height: "100vh",
      fontSize: "md",
      color: "semantics.default",
      lineHeight: "base",
      fontFamily: "body",
      fontWeight: "normal",
      overflowX: "hidden",
    },
    "#root": {
      display: "flex",
      flexDirection: "column",
      height: "100%",
    },
    main: {
      flex: 1,
    },
    "*:focus": {
      boxShadow: "none",
      outline: "none",
    },
    button: {
      ":focus": {
        boxShadow: "none",
        outline: "none",
      },
    },
  },
};

export default styles;
