import { ParamListBase, RouteProp } from "@react-navigation/core";
import { StackNavigationProp } from "@react-navigation/stack";
import { Action } from 'redux';
import { todosTypes } from 'modules/todos';

// react-navigation
export interface NavigationRouteProps {
  route: RouteProp<ParamListBase, string>;
  navigation: StackNavigationProp<ParamListBase>;
}

export type TodoItemType = {
  name: string;
  isCompleted: boolean;
  createdAt: Date;
}

export type TodoListType = {
  name: string;
  isArchived: boolean;
  items: TodoItemType[];
  createdAt: Date;
}

// REDUX
export type TodosStateType = {
  items: TodoListType[];
}

export interface TodosAddTodoListType extends Action {
  type: todosTypes.ADD_TODO_LIST;
  payload: {
    name: string;
  };
}

export interface TodosAddTodoItemType extends Action {
  type: todosTypes.ADD_TODO_ITEM;
  payload: {
    name: string;
  };
}

export type TodosActionType =
  | TodosAddTodoListType
  | TodosAddTodoItemType

export type AppStateType = TodosStateType
export type AppActionType = TodosActionType
