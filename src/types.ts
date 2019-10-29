import { ParamListBase, RouteProp } from "@react-navigation/core";
import { StackNavigationProp } from "@react-navigation/stack";

export interface NavigationRouteProps {
  route: RouteProp<ParamListBase, string>;
  navigation: StackNavigationProp<ParamListBase>;
}
