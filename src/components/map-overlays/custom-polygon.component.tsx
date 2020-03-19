import React from "react";
import { Polygon, MapPolygonProps } from "react-native-maps";

type IProps = Omit<MapPolygonProps, "onLayout">;

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
      // @ts-ignore
      ref.current.setNativeProps({ fillColor: props.fillColor });
    }
  };

  return <Polygon ref={ref} onLayout={onLayoutPolygon} {...props} />;
};

export default CustomPolygon;
