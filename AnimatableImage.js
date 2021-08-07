import React from 'react';
import PropTypes from 'prop-types';
import { Animated, ImageBackground } from 'react-native';
import Image from 'react-native-fast-image2'

function AnimatableImage(props) {
  const { animated, children, ...rest } = props;

  const ImageComponent = children
    ? ImageBackground
    : animated
    ? Animated.Image
    : Image;

  return <ImageComponent {...rest}>{children}</ImageComponent>;
}

AnimatableImage.propTypes = Image.propTypes | Animated.Image.propTypes;

AnimatableImage.defaultProps = {
  animated: false
};

export default AnimatableImage;
