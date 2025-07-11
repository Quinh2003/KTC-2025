import React, { useState } from 'react';
import styles from './ButtonTabs.module.css';

const tabs = ['HISTORY', 'APPROACH', 'CULTURE', 'METHOD'];

const content = {
  HISTORY: `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores.`,
  APPROACH: `Contenido de tabNeque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?`,
  CULTURE: `At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est.`,
  METHOD: `Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.`
};

const ButtonTabs: React.FC = () => {
  const [activeButtonTab, setActiveButtonTab] = useState('METHOD');
  const [activeLineTab, setActiveLineTab] = useState('METHOD');

  return (
    <div className={styles.wrapper}>
      <h2 style={{ textAlign: 'left', marginLeft: '-100px' }}><strong>Button Tabs</strong></h2>
      <div className={styles.buttonTabContainer}>
        {tabs.map(tab => (
          <button
            key={tab}
            className={`${styles.tabButton} ${activeButtonTab === tab ? styles.activeTabButton : ''}`}
            onClick={() => setActiveButtonTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className={styles.tabContent}>
        {content[activeButtonTab as keyof typeof content]}
      </div>

      <div className={styles.lineTabContainer}>
        {tabs.map(tab => (
          <div
            key={tab}
            className={`${styles.lineTab} ${activeLineTab === tab ? styles.activeLine : ''}`}
            onClick={() => setActiveLineTab(tab)}
          >
            {tab}
          </div>
        ))}
      </div>
      <div className={styles.tabContent}>
         {content[activeLineTab as keyof typeof content]}
      </div>
    </div>
  );
};

export default ButtonTabs;