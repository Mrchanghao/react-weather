import React, { Component } from 'react';
import '../styles/components/google_map.scss'

class GoogleMap extends Component {
    componentDidMount() {
        var center = new google.maps.LatLng(37.566535, 126.977969);
        var map = new google.maps.Map(this.refs.map, {
          zoom: 12,
          center: center
        });
        var marker = new google.maps.Marker({
            position: center,
            map: map
        })
        // 맵을 이동했을 경우 맵 중앙에 마커가 위치하도록 하는     이벤트
        map.addListener('center_changed', () => {
            marker.setPosition(map.getCenter())
        })
      }
    render() {
        return (
            <div className='google' ref='map' />
        );
    }
}

export default GoogleMap;