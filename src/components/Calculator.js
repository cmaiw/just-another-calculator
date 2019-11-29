import React from "react";
import styled from "@emotion/styled";
import colors from "../utils/colors";
import Display from "./Display";
import ActionKey from "./ActionKey";
import NumberKey from "./NumberKey";

const Grid = styled.div`
  width: 400px;
  height: 500px;
  border: solid ${colors.lining};
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(6, 1fr);
`;

export default function Calculator() {
  const [firstNum, setFirstNum] = useState("");
  const [secondNum, secondNum] = useState("");
  const [nextPressed, setNextPressed] = useState(false);

  console.log(firstNum);
  console.log(secondNum);
  console.log(NextHasBeenPressed);

  function handleNumKeyPress(value) {
    console.log(value + "has been pressed!");
    if (!nextHasBeenPressed) {
      setSecondNum(firstNum + value);
    } else {
      secondNum(secondNum + value);
    }
  }

  function handleActionKeyPress(key) {
    switch (key) {
      case "next":
        setNextHasBeenPressed(true);
        break;
      case "+":
        console.log(key);
        break;
      case "-":
        console.log(key);
        break;
      case "x":
        console.log(key);
        break;
      case "/":
        console.log(key);
        break;

      default:
    }
  }

  return (
    <Grid>
      <Display />
      <NumberKey number={7} onNumKeyPress={handleNumKeyPress} />
      <NumberKey number={8} onNumKeyPress={handleNumKeyPress} />
      <NumberKey number={9} onNumKeyPress={handleNumKeyPress} />
      <ActionKey action={"/"} onActionPressKey={handleActionKeyPress} />
      <NumberKey number={4} onNumKeyPress={handleNumKeyPress} />
      <NumberKey number={5} onNumKeyPress={handleNumKeyPress} />
      <NumberKey number={6} />
      <ActionKey action={"x"} onActionPressKey={handleActionKeyPress} />
      <NumberKey number={1} onNumKeyPress={handleNumKeyPress} />
      <NumberKey number={2} onNumKeyPress={handleNumKeyPress} />
      <NumberKey number={3} onNumKeyPress={handleNumKeyPress} />
      <ActionKey action={"-"} onActionPressKey={handleActionKeyPress} />
      <NumberKey number={0} onNumKeyPress={handleNumKeyPress} />
      <ActionKey action={"+"} onActionPressKey={handleActionKeyPress} />
      <ActionKey action={"next"} onActionPressKey={handleActionKeyPress} />
    </Grid>
  );
}
