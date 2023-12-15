import React from "react";
import styles from "./MutipleAcordions.module.css";
import classNames from "classnames";

type Props = { title?: string; content?: string };

function Accordion({ title, content }: Props) {
  const [accordion, setAccordion] = React.useState(false);
  const container = classNames(styles.container, {
    [styles.active]: accordion,
    [styles.inactive]: !accordion,
  });
  const fnAccordion = () => {
    accordion ? setAccordion(false) : setAccordion(true);
  };
  return (
    <div className={container}>
      <div className={styles.title} onClick={() => fnAccordion()}>
        {title}
      </div>
      <div className={styles.content}>
        <p>{content}</p>
      </div>
    </div>
  );
}

export default function MultipleAcordions({}: Props) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      <Accordion
        title="Multiple panels"
        content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. A id aut
          modi quasi eius voluptatum ratione accusamus, tenetur quae possimus
          sit nulla eum dignissimos fuga fugit alias consequatur amet?
          Asperiores."
      />
      <Accordion
        title="Multiple panels"
        content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. A id aut
          modi quasi eius voluptatum ratione accusamus, tenetur quae possimus
          sit nulla eum dignissimos fuga fugit alias consequatur amet?
          Asperiores."
      />
      <Accordion
        title="Multiple panels"
        content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. A id aut
          modi quasi eius voluptatum ratione accusamus, tenetur quae possimus
          sit nulla eum dignissimos fuga fugit alias consequatur amet?
          Asperiores."
      />
    </div>
  );
}
