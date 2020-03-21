import React from "react";
import { Polygon, MapPolygonProps } from "react-native-maps";

interface IProps extends Omit<MapPolygonProps, "onLayout"> {}

/**
 * Custom wrapper for Polygon which forces specific behavior for onLayout
 *
 * @param props Properties for the CustomPolygon. Extended from the original Polygon
 */
const CustomPolygon = ({ ...props }: IProps) => {
  const ref = React.useRef<Polygon>();

  /**
   * Handles onLayout mount event.
   */
  const onLayoutPolygon = () => {
    if (ref.current) {
      (ref.current as any).setNativeProps({ fillColor: props.fillColor });
    }
  };

  return <Polygon ref={ref} onLayout={onLayoutPolygon} {...props} />;
};

export default CustomPolygon;
