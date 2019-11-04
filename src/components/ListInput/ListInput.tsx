import React, { useState } from 'react';
import {View, TextInput, Button} from 'react-native';
import styles from './ListInput.styles'

type Props = {
  onSubmit: Function,
  value?: string
}

const ListInput = ({ onSubmit, value }: Props) => {
  const [text, setText] = useState(value)

  const handleSubmit = () => {
    onSubmit(text)
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={text}
        onChangeText={t => setText(t)}
        placeholder="Add new list..."
      />
      {!!text.length ? (
        <Button
          title="Add list"
          onPress={handleSubmit}
        />
      )  : null}
    </View>
  );
};

ListInput.defaultProps = {
  value: ''
}

export default ListInput;
