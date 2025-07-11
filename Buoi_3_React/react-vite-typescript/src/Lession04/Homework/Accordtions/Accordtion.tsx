import React, { useState } from 'react';
import styles from './Accordion.module.css';

const sections = [
  {
    title: 'HISTORY',
    content:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores.',
  },
  {
    title: 'APPROACH',
    content: 'Contenido de tabNeque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?',
  },
  {
    title: 'CULTURE',
    content: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est.',
  },
  {
    title: 'METHOD',
    content: 'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.',
  },
];

const Accordion: React.FC = () => {
  const [activeSingle, setActiveSingle] = useState<string | null>('HISTORY');
  const [activeMulti, setActiveMulti] = useState<string[]>([]);

  const toggleMulti = (title: string) => {
    setActiveMulti((prev) =>
      prev.includes(title) ? prev.filter((t) => t !== title) : [...prev, title]
    );
  };

  return (
    <div className={styles.container}>
      <h2><strong>Button Accordions</strong></h2>
      <div className={styles.columns}>
        <div className={styles.column}>
          <h4>Single Accordions</h4>
          {sections.map((sec) => (
            <div key={sec.title} className={styles.accordion}>
              <button
                className={`${styles.accordionButton} ${activeSingle === sec.title ? styles.active : ''}`}
                onClick={() => setActiveSingle(sec.title)}
              >
                {sec.title}
              </button>
              {activeSingle === sec.title && (
                <div className={styles.accordionContent}>{sec.content}</div>
              )}
            </div>
          ))}
        </div>

        <div className={styles.column}>
          <h4>Multi Accordions</h4>
          {sections.map((sec) => (
            <div key={sec.title} className={styles.accordion}>
              <button
                className={`${styles.accordionButton} ${activeMulti.includes(sec.title) ? styles.active : ''}`}
                onClick={() => toggleMulti(sec.title)}
              >
                {sec.title}
              </button>
              {activeMulti.includes(sec.title) && (
                <div className={styles.accordionContent}>{sec.content}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
