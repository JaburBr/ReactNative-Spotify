import React, { Component } from 'react';
import { Text, View, StatusBar, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AlbumItem from './components/AlbumItem';
import { Creators as AlbumsActions } from '../../store/ducks/albums';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Main extends Component {

  componentDidMount() {
    this.props.getAlbumsRequest();
  }

  static navigationOptions = ({ navigation }) => ({
    title: 'Sua Bilioteca',
    headerRight: (
      <TouchableOpacity style={styles.headerRight} onPress={() => { navigation.navigate("Search") }}>
        <Icon name='search' size={24} color='#FFF' />
      </TouchableOpacity>
    ),
  });

  static proptypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
    getAlbumRequest: PropTypes.func.isRequired,
    albums: PropTypes.shape({
        data: PropTypes.arrayOf({
        id: PropTypes.number,
      }),
    loading: PropTypes.bool
    }).isRequired
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle='light-content' />

        {this.props.albums.loading
          ? <ActivityIndicator size='small' color='#999' style={styles.loading}  />
          : <FlatList
            data={this.props.albums.data}
            keyExtractor={album => String(album.id)}
            renderItem={({ item }) => (
              <AlbumItem onPress={() => this.props.navigation.navigate('Album', { album: item })} album={item} />
            )}
          />
        }

      </View>
    );
  };

};

const mapStateToProps = state => ({
  albums: state.albums,
});

const mapDispatchToProps = dispatch => (
  bindActionCreators(AlbumsActions, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Main);
