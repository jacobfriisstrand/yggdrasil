import styles from "./styles/FormGroup.module.css";

function FormGroup({ children, headline }) {
  return (
    <fieldset className={styles.areaContainer}>
      <legend>{headline}</legend>
      {children}
    </fieldset>
  );
}

export default FormGroup;
