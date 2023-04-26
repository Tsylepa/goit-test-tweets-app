import { Bar, Link, Wrapper } from "./AppBar.syled";
import Container from "../Container";

export default function AppBar() {
  return (
    <Bar>
      <Container>
        <Wrapper>
          <Link to="/">Home</Link>
          <Link to="/tweets">Tweets</Link>
        </Wrapper>
      </Container>
    </Bar>
  );
}
