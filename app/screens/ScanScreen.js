import React, {Component} from "react";
import {StyleSheet, Vibration, View, Text} from "react-native";
import {RNCamera} from "react-native-camera";

export default class ScanScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {codeRead: false, barcode:null};
    this.barcodeRecognized = this.barcodeRecognized.bind(this);
    this.renderBarcode = this.renderBarcode.bind(this);
  }

  barcodeRecognized(barcode) {
    // if (!this.props.authenticated) {
    //   return false
    // }

    // if (!this.state.codeRead) {
    //   this.setState({codeRead: true}, () => {
    //     Vibration.vibrate()
    //     if (this.props.barCodeRead) {
    //       this.props.barCodeRead(e.data)
    //     }
    //   })
    // }

    if (!this.state.codeRead) {
      console.warn(barcode.data)
      this.setState({codeRead: true, barcode:barcode})
    }
  }

  // componentWillReceiveProps(nextProps) {
  //   let {camera} = nextProps;
  //
  //   if (camera && this.state.codeRead) {
  //     this.setState({codeRead: false});
  //     this._qrdata = null;
  //   }
  // }

  renderBarcode () {

    if (this.state.codeRead) {
      let {bounds, data} = this.state.barcode
      return (
        <React.Fragment key={data + bounds.origin.x}>
          <View
            style={{
              borderWidth: 2,
              borderRadius: 10,
              position: 'absolute',
              borderColor: '#F00',
              justifyContent: 'center',
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
              padding: 10,
              ...bounds.size,
              left: bounds.origin.x,
              top: bounds.origin.y,
            }}
          >
            <Text style={{
              color: '#F00',
              flex: 1,
              position: 'absolute',
              textAlign: 'center',
              backgroundColor: 'transparent',
            }}>{data}</Text>
          </View>
        </React.Fragment>
      )
    } else {
      return null;
    }
  }

  render() {
    // const {camera} = this.props;
    // let camera = true;
    return (
      <View style={styles.container}>
        {/*{camera &&*/}
        {/*<RNCamera*/}
        {/*  ref={(cam) => {*/}
        {/*    this.camera = cam;*/}
        {/*  }}*/}
        {/*  onBarCodeRead={this._onBarCodeRead}*/}
        {/*  style={styles.preview}*/}
        {/*  barCodeTypes={[RNCamera.constants.BarCodeType.qr]}*/}
        {/*  aspect={RNCamera.constants.Aspect.fill}>*/}
        {/*</RNCamera>}*/}
                <RNCamera
                  ref={ref => {
                    this.camera = ref;
                  }}
                  style={{
                  flex: 1,
                    width: '100%',
                  }}
                  onBarCodeRead={this.barcodeRecognized}
                  captureAudio={false}
                >
                </RNCamera>
        {this.renderBarcode()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 650,
    width: null,
    flex: 1,
    flexDirection: "row",
    padding: 0
  },
  preview: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center"
  },
  viewFinder: {
    backgroundColor: "transparent"
  }
});
