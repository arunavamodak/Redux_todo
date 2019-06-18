const initialState = { todos: [] };

function deleteItem(todos, x) {
  for (var i = 0; i < todos.length; i++) {
    if (todos[i].id === x) {
      todos.splice(i, 1);
    }
  }
  return todos;
}

export function changeTodo(state = initialState, action) {
  switch (action.type) {
    case "ADD_TODO":
      const toadd = {
        text: action.payload.text,
        deadline: action.payload.deadline,
        id: new Date().toLocaleTimeString()
      };
      return {
        todos: state.todos.concat([toadd])
      };
    case "DELETE_TODO":
      let too = state.todos;
      var tempState = deleteItem(too, action.payload.id);
      return {
        todos: [...tempState]
      };

    default:
      return state;
  }
}
