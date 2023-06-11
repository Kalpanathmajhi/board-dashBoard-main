import React from 'react';
import "./MeetingCard.css";

function MeetingCard() {
  // Dummy data for demonstration
  const scheduledMeetings = [
    {
      title: 'Meeting 1',
      time: '10:00 AM',
    },
    {
      title: 'Meeting 2',
      time: '2:30 PM',
    },
    {
      title: 'Meeting 3',
      time: '4:00 PM',
    },
  ];

  return (
    <div className="meeting-card">
      <h3>Today's Scheduled Meetings</h3>
      {scheduledMeetings.length === 0 ? (
        <p>No meetings scheduled for today.</p>
      ) : (
        <ul>
          {scheduledMeetings.map((meeting, index) => (
            <li key={index}>
              <span className="meeting-title">{meeting.title}</span>
              <span className="meeting-time">{meeting.time}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default MeetingCard;
