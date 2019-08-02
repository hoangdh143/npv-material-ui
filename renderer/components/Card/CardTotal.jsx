import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import CurrencyFormat from "react-currency-format";

const useStyles = makeStyles({
  card: {
    minWidth: 175
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
});

export default function SimpleCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="h5">Tổng dòng tiền sau chiết khấu</Typography>
        <Typography variant="body2" component="p">
          Số tiền
          <CurrencyFormat
            value={100000000}
            display={"text"}
            prefix={"$"}
            thousandSeparator={true}
            renderText={value => <div>{value}</div>}
          />
        </Typography>
        <Typography variant="body2" component="p">
          Công thức tính
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
