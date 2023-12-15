import React from "react";
import styles from "./SingleAcordions.module.css";
import classNames from "classnames";

// type Props = { title?: string[]; content?: string[] };
type Props = { data?: { title: string[]; content: string[] } };

function Accordion({ data }: Props) {
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
        {data?.title.map((t, index) => (
          <div key={index}>{t}</div>
        ))}
      </div>
      <div className={styles.content}>
        <p>
          {data?.content.map((c, index) => (
            <p key={index}>{c}</p>
          ))}
        </p>
      </div>
    </div>
  );
}

export default function SingleAcordions({}: Props) {
  const accordionData = {
    title: ["Multiple panels"],
    content: [
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. A id aut modi quasi eius voluptatum ratione accusamus, tenetur quae possimus sit nulla eum dignissimos fuga fugit alias consequatur amet? Asperiores.",
    ],
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      <Accordion data={accordionData} />
    </div>
  );
}
