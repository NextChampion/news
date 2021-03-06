import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { ListItem, Left, Right, Icon } from 'native-base';

import Loading from '../components/Loading';
import Container from '../../components/Container';

export default class TopNewsScreen extends Component<{}> {
  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.state.params.get('name')}`,
  });

  componentDidMount() {}

  renderItem = ({ item }) => (
    <ListItem
      selected
      onPress={() => {
        console.log('1111', item.toJS());
      }}
    >
      <Left>
        <Text>11111</Text>
      </Left>
      <Right>
        <Icon name="arrow-forward" />
      </Right>
    </ListItem>
  );

  render() {
    return <Loading />;
    return (
      <Container style={{ paddingBottom: 0 }}>
        <FlatList
          data={[]}
          keyExtractor={item => null}
          renderItem={this.renderItem}
        />
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
