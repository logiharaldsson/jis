import React from 'react';

const TimeLogRow = ({ timeLog }) => {
    return(
        <div className='table-container flex flex-column-reverse'>
            {timeLog.map((item, i) => (
                <div key={i} className='flex table-row mb2'>
                    <div>
                        {`${item[0] === 'boys' ? 'Strákar ' : 'Stelpur '} ${item[1]} ${item[2]}`}
                    </div>
                    <div className='pl3 action'>
                        {item[3] > 0 ? `+${item[3]}` : `${item[3]}`}
                    </div>
                    <div>
                        {`${item[4]}`}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default TimeLogRow;