import React from "react";
import styles from "./Tabs.module.css";
type Props = {};

export default function Tabs({}: Props) {
  const [tab, setTab] = React.useState(1);
  const handleTab = (index: number) => {
    setTab(index);
  };

  return (
    <div className={styles.container}>
      <div className={styles.buttonTab}>
        <button
          className={styles.btn}
          data-active={tab == 1 ? true : false}
          onClick={() => handleTab(1)}
        >
          HISTORY
        </button>
        <button
          className={styles.btn}
          data-active={tab == 2 ? true : false}
          onClick={() => handleTab(2)}
        >
          APPROACH
        </button>
        <button
          className={styles.btn}
          data-active={tab == 3 ? true : false}
          onClick={() => handleTab(3)}
        >
          CULTURE
        </button>
        <button
          className={styles.btn}
          data-active={tab == 4 ? true : false}
          onClick={() => handleTab(4)}
        >
          METHOD
        </button>
      </div>
      <div className={styles.content}>
        {tab === 1 && (
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores.
          </p>
        )}
        {tab === 2 && (
          <p>
            Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
            consectetur, adipisci velit, sed quia non numquam eius modi tempora
            incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut
            enim ad minima veniam, quis nostrum exercitationem ullam corporis
            suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?
          </p>
        )}
        {tab === 3 && (
          <p>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati cupiditate non
            provident, similique sunt in culpa qui officia deserunt mollitia
            animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis
            est.
          </p>
        )}
        {tab === 4 && (
          <p>
            Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil
            impedit quo minus id quod maxime placeat facere possimus, omnis
            voluptas assumenda est, omnis dolor repellendus. Temporibus autem
            quibusdam et aut officiis debitis aut rerum necessitatibus saepe
            eveniet ut et voluptates repudiandae sint et molestiae non
            recusandae.
          </p>
        )}
      </div>
    </div>
  );
}
