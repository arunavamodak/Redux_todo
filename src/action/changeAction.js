export const addTodoAction = (text, deadline) => {
  return {
    type: "ADD_TODO",
    payload: {
      text: text,
      deadline: deadline
    }
  };
};

export const deleteTodo = id => {
  return {
    type: "DELETE_TODO",
    payload: {
      id: id
    }
  };
};
