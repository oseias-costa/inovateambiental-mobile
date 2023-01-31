import { Path, Svg } from "react-native-svg"

export const LoIcon = ({size, color}) => {
    return(
        <Svg width={size} height={size} viewBox="0 0 579 382" fill="none">
            <Path d="M1.02818e-06 375V6.24999H89.5V348.5L49.25 303.25H223.75V375H1.02818e-06ZM406.141 381.25C382.807 381.25 360.724 377.167 339.891 369C319.224 360.667 300.974 348.417 285.141 332.25C269.307 316.083 256.807 296.167 247.641 272.5C238.641 248.667 234.141 221.25 234.141 190.25C234.141 159.25 238.641 131.917 247.641 108.25C256.641 84.5833 268.974 64.75 284.641 48.75C300.474 32.75 318.724 20.6667 339.391 12.5C360.224 4.33332 382.474 0.249982 406.141 0.249982C429.807 0.249982 451.974 4.33332 472.641 12.5C493.474 20.6667 511.807 32.75 527.641 48.75C543.474 64.75 555.807 84.5833 564.641 108.25C573.641 131.917 578.141 159.25 578.141 190.25C578.141 221.25 573.557 248.667 564.391 272.5C555.391 296.167 542.891 316.083 526.891 332.25C511.057 348.417 492.724 360.667 471.891 369C451.224 377.167 429.307 381.25 406.141 381.25ZM406.141 311C420.141 311 433.307 307.25 445.641 299.75C457.974 292.083 467.974 279.417 475.641 261.75C483.474 244.083 487.391 220.25 487.391 190.25C487.391 160.083 483.474 136.333 475.641 119C467.807 101.5 457.724 89.0833 445.391 81.75C433.057 74.25 419.974 70.5 406.141 70.5C392.307 70.5 379.141 74.25 366.641 81.75C354.307 89.0833 344.224 101.5 336.391 119C328.724 136.333 324.891 160.083 324.891 190.25C324.891 220.417 328.724 244.333 336.391 262C344.224 279.5 354.307 292.083 366.641 299.75C379.141 307.25 392.307 311 406.141 311Z" fill={color}/>
        </Svg>
    )
}