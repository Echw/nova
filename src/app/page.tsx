import { Button } from "@chakra-ui/react";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Button className={styles.myButton}>Hello</Button>
        <Button>Hello</Button>
        <Button>Hello</Button>
      </main>
    </div>
  );
}
