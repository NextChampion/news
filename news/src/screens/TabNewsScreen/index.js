import React, { Component } from 'react';
import { StyleSheet, Text, FlatList } from 'react-native';
import { ListItem, Left, Right, Icon } from 'native-base';
import ScrollableTabView from 'react-native-scrollable-tab-view';

import server from '../../server';
import { dispatch, connect } from '../../redux';
import Container from '../../components/Container';
import ImportantNewsScreen from './ImportantNewsScreen';
import TopNewsScreen from './TopNewsScreen';
import SocialNewsScreen from './SocialNewsScreen';

@connect(['cook'])
class TabCookScreen extends Component<{}> {
  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.state.routeName}`,
  });

  componentDidMount() {
    console.log('componentDidMount getData', this.props);
    // this.onRefresh();
  }

  renderItem = ({ item }) => (
    <ListItem
      selected
      onPress={() => this.props.navigation.navigate('cookList', item)}
    >
      <Left>
        <Text>{item.get('name')}</Text>
      </Left>
      <Right>
        <Icon name="arrow-forward" />
      </Right>
    </ListItem>
  );

  render() {
    return (
      <Container style={{ paddingBottom: 0 }}>
        <ScrollableTabView>
          <TopNewsScreen tabLabel="Top" />
          <ImportantNewsScreen tabLabel="Import" />
          <SocialNewsScreen tabLabel="Social" />
        </ScrollableTabView>
      </Container>
    );
  }
}

export default TabCookScreen;

const styles = StyleSheet.create({});
