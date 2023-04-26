const styles = {
  height: "100%",
  width: "100vw",
  margin: "0 auto",
  padding: "0 15px",
};

export default function Container({ children }) {
  return <div style={styles}>{children}</div>;
}
