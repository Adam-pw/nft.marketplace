import styles from "./Highlight.module.scss";

export default function Highlight() {
  return (
    <>
      <div
        className={styles.main}
        style={{ backgroundImage: "url(/images/highlight.svg)" }}
      >
        <div className={styles.linear}></div>
      </div>
    </>
  );
}
