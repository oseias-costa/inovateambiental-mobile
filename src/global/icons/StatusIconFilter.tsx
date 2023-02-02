import React from "react";
import {Svg, Path, Defs, Pattern, Use, Image} from 'react-native-svg'

export const StatusIconFilter = ({size, color}) => {
  return (
    <Svg
      width={size ? size : "36"}
      height={size ? size * 1.5 : "24"}
      fill={color ? color  : "#414141"}
      viewBox="0 0 36 24"
    >
      <Path fill="url(#pattern0)" d="M0 0H36V24H0z"></Path>
      <Defs>
        <Pattern
          id="pattern0"
          width="1"
          height="1"
          patternContentUnits="objectBoundingBox"
        >
          <Use
            transform="matrix(.02778 0 0 .04167 .167 0)"
            xlinkHref="#image0_40_69"
          ></Use>
        </Pattern>
        <Image
          id="image0_40_69"
          width="24"
          height="24"
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAABqklEQVR4nN1UPUsDQRA9LMRKxEqMIKjYaCuiiDba2qUK2fdm7go7Kxub9PYKEsXGX2HjR6VgK6hgawj4FRXERmXzgVH29u60ERcGjrnd92befATBvz0huaBAWYBzJZ+tCXmh5JaIzP8YOCoWR4U8VPLda8CRiAxlAldjZoW8SwRnwwR40GJxKkvkqcH10+6NMcOJBD5ZglaGcZmQ+8kF9UQZJBDUSURm4rUHyr8lUHIzXp5GK2YleFFyOQzDXgA9asyij+DRQ1B1EgBLXt2/SNQYJCe4qo7X76iOtxX1tFQqdeTz+U4hT6zZb18NLlOAV5v+N5LTzXcrbRmt+DLYcgzRugPcRr9r/QD6lKy1valZn7sGIvMx62DjCzjwZIzJ1d+QO98bwPp8Mh2lmNrVZkCTVipHh73Zf24C1UEBbj3L7QpAly2uAsdxLdxqACcJyQklb5wEptHnIiKJMwIwVqowDEcUOPhW8D37r1AodCtZSSFlxd6NJWlGOifAtgJnkTFjdR+5lnaN2LtBlhNF0YCSrxn21Kt9k5rAGJNLKU8rg2tV7c+UxZ88H8JqR+/JkYO2AAAAAElFTkSuQmCC"
        ></Image>
      </Defs>
    </Svg>
  );
}
