import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return { todo: state.items.todo };
};

const ConnectedList = ({ todo }) => (
  <ul>
    {todo.map(el => (
      <li key={el.id}>{el.text}</li>
    ))}
  </ul>
);

const List = connect(mapStateToProps)(ConnectedList);

export default List;