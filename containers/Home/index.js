import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View
} from 'react-native';

import {
  addToCount,
  subtractFromCount
} from '../../actions/counter'

const Home = props => (
	<View style={styles.container}>
		<Text>
			{props.count}
		</Text>
		<TouchableWithoutFeedback onPress={props.addToCount}>
			<View>
				<Text>
					ADD TO COUNT
				</Text>
			</View>
		</TouchableWithoutFeedback>
		<TouchableWithoutFeedback onPress={props.subtractFromCount}>
			<View>
				<Text>
					SUBTRACT FROM COUNT
				</Text>
			</View>
		</TouchableWithoutFeedback>
	</View>
)

const mapStateToProps = state => ({
  count: state.counter.count
})

const mapDispatchToProps = dispatch => bindActionCreators({
  addToCount,
  subtractFromCount,
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
