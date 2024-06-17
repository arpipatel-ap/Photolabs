import React from "react";
import "../styles/TopicListItem.scss";

const TopicListItem = (props) => {
  const {topic, getPhotosByTopics} =props;

  if (!topic) {
    return <div className="topic-list__item">Loading...</div>;
  }
  return (
    <div className="topic-list__item" onClick={()=>getPhotosByTopics(topic.id)}>
      <p>{topic.title}</p>
    </div>
  );
};

export default TopicListItem;
