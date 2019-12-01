import React from 'react';
import {View} from 'react-native';

type Props = {
  height: number;
}

const ListInput = ({
  height = 20
}: Props) => {
  return (
    <View style={{ height }} />
  );
};

export default ListInput;
