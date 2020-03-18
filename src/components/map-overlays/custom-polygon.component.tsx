import React from "react";
import { Polygon } from "react-native-maps";

function CustomPolygon({ onLayout, ...props }) {
  const ref = React.useRef();

  function onLayoutPolygon() {
    if (ref.current) {
      ref.current.setNativeProps({ fillColor: props.fillColor });
    }
  }

  return <Polygon ref={ref} onLayout={onLayoutPolygon} {...props} />;
}

export default CustomPolygon;
