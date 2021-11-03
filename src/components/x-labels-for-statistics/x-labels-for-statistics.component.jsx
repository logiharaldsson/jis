import React from 'react';

import './x-labels-for-statistics.styles.scss';

const XLabelsForStatistics = ({ labels }) => {
    return (
        <div className="x-axis-labels-container">
            {labels.map((item, i) => {
                return (
                    <div id={i} className="x-axis-label">
                        <span>{item}</span>
                    </div>
                )
            })}
        </div>
    )
}

export default XLabelsForStatistics;