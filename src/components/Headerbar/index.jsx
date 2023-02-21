import React from 'react';
import Classes from './styles.module.scss';

const Headerbar = () => (
    <div className={Classes.newsHeaderBar}>
        <div className={Classes.headerContentHolder}>
            <p className={Classes.newsHeaderbarTitle}>Make MyNews your homepage</p>
            <p className={Classes.newsHeaderbarText}>Every day discover what’s trending on the internet!</p>
            <button type='button' className={Classes.newsHeaderbarButton}>GET</button>
            <p className={Classes.newsHeaderbarEndButton}>No, thanks</p>
        </div>
    </div>
  );

export default Headerbar;