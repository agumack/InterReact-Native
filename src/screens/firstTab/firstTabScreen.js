import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import {mapStateToProps} from '../../store';
import {connect} from 'react-redux';
import {Navigation} from 'react-native-navigation';

class FirstTabScreen extends Component {

  rsvp(){
    Navigation.showModal({
      screen: 'details.RSVPScreen',
      title: 'RSVP',
      navigatorStyle: {
      },
      navigatorButtons: {
        leftButtons: [{
          title: 'Cancel',
          id: 'navBarCancel'
        }]
      }
    });
  }

  render() {
    const {details, attendees} = this.props;
    const {title, description, date, city, coordinates} = details;
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          {title}
        </Text>
        <Text style={styles.welcome}>
          {description}
        </Text>
        <Text style={styles.welcome}>
          {date}
        </Text>
        <Text style={styles.welcome}>
          {city}
        </Text>
        <TouchableOpacity onPress={this.rsvp}><Text>RSVP</Text></TouchableOpacity>
      </View>
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

export default connect(mapStateToProps)(FirstTabScreen);