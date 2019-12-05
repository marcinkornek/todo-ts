import {ParamListBase, RouteProp} from '@react-navigation/core';
import {StackNavigationProp} from '@react-navigation/stack';
import {Action} from 'redux';

// react-navigation
export interface NavigationRouteProps {
  route: RouteProp<ParamListBase, string>;
  navigation: StackNavigationProp<ParamListBase>;
}

export type ItemKey = string;

export type ListKey = string;

export type TodoListType = {
  name: string;
  key: ListKey;
  isArchived: boolean;
  items: TodoItemType[];
  createdAt: Date;
};

export type TodoItemType = {
  name: string;
  key: ItemKey;
  isCompleted: boolean;
  createdAt: Date;
};

// REDUX
export type TodosStateType = {
  items: TodoListType[];
};

export interface AddTodoListType extends Action {
  type: 'ADD_TODO_LIST';
  payload: {
    listKey: ListKey;
    name: string;
  };
}

export interface ToggleTodoListType extends Action {
  type: 'TOGGLE_TODO_LIST';
  payload: {
    listKey: ListKey;
  };
}

export interface AddTodoType extends Action {
  type: 'ADD_TODO';
  payload: {
    listKey: ListKey;
    key: ItemKey;
    name: string;
  };
}

export interface ToggleTodoType extends Action {
  type: 'TOGGLE_TODO';
  payload: {
    listKey: ListKey;
    key: ItemKey;
  };
}

export interface UpdateTodoType extends Action {
  type: 'UPDATE_TODO';
  payload: {
    listKey: ListKey;
    key: ItemKey;
    name: string;
  };
}

export interface DeleteTodoType extends Action {
  type: 'DELETE_TODO';
  payload: {
    listKey: ListKey;
    key: ItemKey;
  };
}

export type TodosActionType =
  | AddTodoListType
  | ToggleTodoListType
  | AddTodoType
  | ToggleTodoType
  | UpdateTodoType
  | DeleteTodoType;

export type AppStateType = TodosStateType;
export type AppActionType = TodosActionType;
