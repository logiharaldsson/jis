import React from 'react';
// Styles
import './time-log.styles.scss';
// Redux
import { selectCurrentTimeLog } from '../../redux/time/time.selectors'
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
// Components
import TimeLogRow from '../time-log-row/time-log-row.components';

const TimeLog = ({ timeLog }) => {
    return (
        <div className='table'>
            <h1>Síðustu aðgerðir</h1>
            <div className='flex table-header mb2'>
                <div className='ttu tracked f4'>
                    {`Flokkur:`}
                </div>
                <div className='ttu tracked f4'>
                    {`Aðgerð:`}
                </div>
                <div className='ttu tracked f4'>
                    {`Tími:`}
                </div>
            </div>
            <div>
                <div className='table-container flex flex-column-reverse'>
                    {timeLog.length > 10 ? 
                    <TimeLogRow timeLog={timeLog.slice(timeLog.length-10, timeLog.length)} /> : 
                    <TimeLogRow timeLog={timeLog} />
                    }
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = createStructuredSelector ({
    timeLog: selectCurrentTimeLog, 
    
})


export default connect(mapStateToProps)(TimeLog);