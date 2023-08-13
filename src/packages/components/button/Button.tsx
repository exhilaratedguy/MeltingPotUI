import { useButtonStyles } from "./Button.styles";

const Button = () => {
  const classes = useButtonStyles();

  return <button className={classes.btn}>Button</button>;
};

export default Button;
