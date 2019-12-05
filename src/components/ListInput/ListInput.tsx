import React, {useState} from 'react';
import {View, TextInput, Button} from 'react-native';
import styles from './ListInput.styles';

type Props = {
  onSubmit: Function;
  value?: string;
  placeholder?: string;
};

const ListInput = ({
  onSubmit,
  value = '',
  placeholder = 'Add new list...',
}: Props) => {
  const [text, setText] = useState(value);

  const handleSubmit = () => {
    onSubmit(text);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={text}
        onChangeText={t => setText(t)}
        placeholder={placeholder}
      />
      {text.length ? <Button title="Add list" onPress={handleSubmit} /> : null}
    </View>
  );
};

export default ListInput;
