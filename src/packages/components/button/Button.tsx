import { createStyles } from "../../styles/Theme";
import { mergeThemeStyle } from "../../styles/ThemeUtils";

const useStyles = createStyles((theme) => ({
  btn: {
    "&:hover": {
      backgroundColor: "red",
    },

    ...mergeThemeStyle(theme.components?.button?.root),
  },
}));

const Button = () => {
  const classes = useStyles();

  return <button className={classes.btn}>Button</button>;
};

export default Button;
