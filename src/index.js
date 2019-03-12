import ExtensibleTodoApp from '/home/mathias/github/extensible-todo-app';
import React from 'react';

const { actions, selectors } = ExtensibleTodoApp;

/******** Reducers **********/

const latestTodoIdReducer = (state = '', action) => {
  if (action.type === 'EVENT_TODO_ADDED') {
    return action.todoId;
  }
  return state;
}

/******** Actions **********/

const upperCaseTodoText = (todoId) => (disptach, getState) => {
  const text = getState().todos[todoId].text;
  const upperText = text.toUpperCase();
  disptach(actions.updateTodo(todoId, { text: upperText }));
}

/******** Component **********/

class UpperCaseComponent extends React.Component {
  componentDidUpdate() {
    if (this.props.latestTodoId) {
      this.props.upperCaseTodoText(this.props.latestTodoId);
    }
  }
  render () {
    return null;
  }
}

/******** State connecting **********/

const mapStateToProps = (state) => ({
  latestTodoId: state.latestTodoId,
});

const mapDispatchToProps = {
  upperCaseTodoText: upperCaseTodoText
};

/******** Plugin object **********/

const plugin = {
  target: 'Background',
  modus: 'add',
  component: UpperCaseComponent,
  mapStateToProps: mapStateToProps,
  mapDispatchToProps: mapDispatchToProps,
  reducers: {
    latestTodoId: latestTodoIdReducer,
  }
};

export default plugin;
