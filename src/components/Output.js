import styles from "./Output.module.css";
function Output(props) {
  const char = props.text.length;
  const words = props.text.split(" ").length;
  return (
    <>
      {words <= 20 && (
        <h3>**Please add more text for a more accurate result**</h3>
      )}
      <h2>{props.output}</h2>
      <div className={styles.flexbox}>
        <h4>{char} Characters</h4>
        <h4>{words} Words</h4>
      </div>
    </>
  );
}
export default Output;
