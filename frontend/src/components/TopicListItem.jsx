import React from "react";
import "../styles/TopicListItem.scss";
import TopicList from "./TopicList";
import topics from "mocks/topics";


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
