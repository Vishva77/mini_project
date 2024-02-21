import React from 'react';
import "./Education.css";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import ImportantDevicesIcon from '@mui/icons-material/ImportantDevices';
import SchoolIcon from '@mui/icons-material/School';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';

function Education() {
    return (
        <div id='education'>
        <VerticalTimeline lineColor='blue'>
            <VerticalTimelineElement
                    date="2023 - present"
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(33, 150, 243)', color: 'black' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<ImportantDevicesIcon />}
                    >
                <h3 className="vertical-timeline-element-title">Work :</h3>
                <h2 className="vertical-timeline-element-subtitle">Web Developer</h2>
                <h2 className="vertical-timeline-element-subtitle">Online Course</h2>
                <h2 className="vertical-timeline-element-subtitle">Cuddalore</h2>
            </VerticalTimelineElement>

            <VerticalTimelineElement
                    date="2023 - present"
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(33, 150, 243)', color: 'black' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<SchoolIcon />}
                    >
                <h3 className="vertical-timeline-element-title">College :</h3>
                <h2 className="vertical-timeline-element-subtitle">PMT Arts and Science College</h2>
                <h2 className="vertical-timeline-element-subtitle">Bsc Computer Science</h2>
                <h2 className="vertical-timeline-element-subtitle">Usilampatti, Madurai</h2>
            </VerticalTimelineElement>

            <VerticalTimelineElement
                    date="2021-2023"
                    className="vertical-timeline-element--education"
                    contentStyle={{ background: 'rgb(33, 150, 243)', color: 'black'}}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<ImportContactsIcon />}
                    >
            <h3 className="vertical-timeline-element-title">School 11th & 12th :</h3>
            <h2 className="vertical-timeline-element-subtitle">Government HighSchool</h2>
            <h2 className="vertical-timeline-element-subtitle">Eriyodu, Dindigul</h2>
            </VerticalTimelineElement>

        </VerticalTimeline>
        </div>
    );
}

export default Education;
