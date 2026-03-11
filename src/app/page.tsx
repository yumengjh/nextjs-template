import { TechCounter } from "@/components/tech-counter/TechCounter";

import styles from "./page.module.scss";

/**
 * 根路径默认只放一个极简技术组件，方便把这个仓库当作长期模板反复复用。
 */
export default function Home() {
  return (
    <main className={styles.page}>
      <TechCounter />
    </main>
  );
}
