import React from 'react';

function SidePanel({ side, title, component }) {
  return (
    <div className={"sidepanel " + `sp-${side}`}>
      <div className="sidepanel-title">
        {title}
      </div>
      <div className="sidepanel-component">
        {component ? component : null}
      </div>
    </div>
  );
}

export default SidePanel;