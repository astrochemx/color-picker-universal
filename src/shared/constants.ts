import { Color } from "vscode";
import {
  ColorFormatFrom,
  ColorFormatTo,
  TemplateColorFragments,
} from "../utils/enums";

export const Regex = {
  NewLine: /\r?\n/g,
  ExactNewLine: /^\r?\n$/g,
  LastLineMatch: /(?:\r?\n)?(.+)$/,
};

export const colorFormats = Object.values(ColorFormatTo);

export const colorFormatsWithAlpha = colorFormats.filter(
  (rep) => rep[rep.length - 1] === "A"
);

export const colorFormatsFromPrefixes = Object.values(ColorFormatFrom).filter(
  (v) => {
    return ![
      ColorFormatFrom.NAMED,
      ColorFormatFrom.HEX,
      ColorFormatFrom.HEX_0X,
    ].includes(v);
  }
);

export enum TestedColors {
  yellow = "yellow",
  black = "black",
}

export const colorsFragments = {
  yellow: {
    name: "yellow",
    hex: "ff0",
    aH: "f",
    HEX: "ffff00",
    AH: "ff",
    a: "1",
    r: "255",
    g: "255",
    b: "0",
    h: "60",
    s: "100%",
    l: "50%",
    c: "0%",
    m: "0%",
    y: "100%",
    k: "0%",
    v: "100%",
  },
  black: {
    name: "black",
    hex: "000",
    aH: "f",
    HEX: "000000",
    AH: "ff",
    a: "1",
    r: "0",
    g: "0",
    b: "0",
    h: "0",
    s: "100%",
    l: "0%",
    c: "0%",
    m: "0%",
    y: "0%",
    k: "100%",
    v: "0%",
  },
} satisfies Record<TestedColors, Record<TemplateColorFragments, string>>;

export const colorsRGBAValues = {
  yellow: {
    red: 1,
    green: 1,
    blue: 0,
    alpha: 1,
  },
  black: {
    red: 0,
    green: 0,
    blue: 0,
    alpha: 1,
  },
} satisfies Record<TestedColors, Color>;

export const NamedColors = {
  aliceblue: "#F0F8FF",
  antiquewhite: "#FAEBD7",
  aqua: "#00FFFF",
  aquamarine: "#7FFFD4",
  azure: "#F0FFFF",
  beige: "#F5F5DC",
  bisque: "#FFE4C4",
  black: "#000000",
  blanchedalmond: "#FFEBCD",
  blue: "#0000FF",
  blueviolet: "#8A2BE2",
  brown: "#A52A2A",
  burlywood: "#DEB887",
  cadetblue: "#5F9EA0",
  chartreuse: "#7FFF00",
  chocolate: "#D2691E",
  coral: "#FF7F50",
  cornflowerblue: "#6495ED",
  cornsilk: "#FFF8DC",
  crimson: "#DC143C",
  cyan: "#00FFFF",
  darkblue: "#00008B",
  darkcyan: "#008B8B",
  darkgoldenrod: "#B8860B",
  darkgray: "#A9A9A9",
  darkgreen: "#006400",
  darkgrey: "#A9A9A9",
  darkkhaki: "#BDB76B",
  darkmagenta: "#8B008B",
  darkolivegreen: "#556B2F",
  darkorange: "#FF8C00",
  darkorchid: "#9932CC",
  darkred: "#8B0000",
  darksalmon: "#E9967A",
  darkseagreen: "#8FBC8F",
  darkslateblue: "#483D8B",
  darkslategray: "#2F4F4F",
  darkslategrey: "#2F4F4F",
  darkturquoise: "#00CED1",
  darkviolet: "#9400D3",
  deeppink: "#FF1493",
  deepskyblue: "#00BFFF",
  dimgray: "#696969",
  dimgrey: "#696969",
  dodgerblue: "#1E90FF",
  firebrick: "#B22222",
  floralwhite: "#FFFAF0",
  forestgreen: "#228B22",
  fuchsia: "#FF00FF",
  gainsboro: "#DCDCDC",
  ghostwhite: "#F8F8FF",
  gold: "#FFD700",
  goldenrod: "#DAA520",
  gray: "#808080",
  green: "#008000",
  greenyellow: "#ADFF2F",
  grey: "#808080",
  honeydew: "#F0FFF0",
  hotpink: "#FF69B4",
  indianred: "#CD5C5C",
  indigo: "#4B0082",
  ivory: "#FFFFF0",
  khaki: "#F0E68C",
  lavender: "#E6E6FA",
  lavenderblush: "#FFF0F5",
  lawngreen: "#7CFC00",
  lemonchiffon: "#FFFACD",
  lightblue: "#ADD8E6",
  lightcoral: "#F08080",
  lightcyan: "#E0FFFF",
  lightgoldenrodyellow: "#FAFAD2",
  lightgray: "#D3D3D3",
  lightgreen: "#90EE90",
  lightgrey: "#D3D3D3",
  lightpink: "#FFB6C1",
  lightsalmon: "#FFA07A",
  lightseagreen: "#20B2AA",
  lightskyblue: "#87CEFA",
  lightslategray: "#778899",
  lightslategrey: "#778899",
  lightsteelblue: "#B0C4DE",
  lightyellow: "#FFFFE0",
  lime: "#00FF00",
  limegreen: "#32CD32",
  linen: "#FAF0E6",
  magenta: "#FF00FF",
  maroon: "#800000",
  mediumaquamarine: "#66CDAA",
  mediumblue: "#0000CD",
  mediumorchid: "#BA55D3",
  mediumpurple: "#9370DB",
  mediumseagreen: "#3CB371",
  mediumslateblue: "#7B68EE",
  mediumspringgreen: "#00FA9A",
  mediumturquoise: "#48D1CC",
  mediumvioletred: "#C71585",
  midnightblue: "#191970",
  mintcream: "#F5FFFA",
  mistyrose: "#FFE4E1",
  moccasin: "#FFE4B5",
  navajowhite: "#FFDEAD",
  navy: "#000080",
  oldlace: "#FDF5E6",
  olive: "#808000",
  olivedrab: "#6B8E23",
  orange: "#FFA500",
  orangered: "#FF4500",
  orchid: "#DA70D6",
  palegoldenrod: "#EEE8AA",
  palegreen: "#98FB98",
  paleturquoise: "#AFEEEE",
  palevioletred: "#DB7093",
  papayawhip: "#FFEFD5",
  peachpuff: "#FFDAB9",
  peru: "#CD853F",
  pink: "#FFC0CB",
  plum: "#DDA0DD",
  powderblue: "#B0E0E6",
  purple: "#800080",
  rebeccapurple: "#663399",
  red: "#FF0000",
  rosybrown: "#BC8F8F",
  royalblue: "#4169E1",
  saddlebrown: "#8B4513",
  salmon: "#FA8072",
  sandybrown: "#F4A460",
  seagreen: "#2E8B57",
  seashell: "#FFF5EE",
  sienna: "#A0522D",
  silver: "#C0C0C0",
  skyblue: "#87CEEB",
  slateblue: "#6A5ACD",
  slategray: "#708090",
  slategrey: "#708090",
  snow: "#FFFAFA",
  springgreen: "#00FF7F",
  steelblue: "#4682B4",
  tan: "#D2B48C",
  teal: "#008080",
  thistle: "#D8BFD8",
  tomato: "#FF6347",
  turquoise: "#40E0D0",
  violet: "#EE82EE",
  wheat: "#F5DEB3",
  white: "#FFFFFF",
  whitesmoke: "#F5F5F5",
  yellow: "#FFFF00",
  yellowgreen: "#9ACD32",
};

export const namedColorsLAB = {
  aliceblue: [19.914, -1.275, -4.158],
  antiquewhite: [16.73, 1.655, 9.691],
  aqua: [14.446, -36.877, -13.002],
  aquamarine: [15.237, -35.751, 7.992],
  azure: [21.609, -4.739, -1.682],
  beige: [18.755, -3.868, 10.529],
  bisque: [15.216, 3.882, 14.852],
  black: [0, 0, 0],
  blanchedalmond: [16.899, 1.925, 13.949],
  blue: [-13.208, 19.618, -53.384],
  blueviolet: [-11.119, 22.929, -36.322],
  brown: [-12.202, 13.023, 4.587],
  burlywood: [3.936, 4.615, 15.912],
  cadetblue: [-4.622, -8.199, -3.472],
  chartreuse: [13.399, -48.667, 43.139],
  chocolate: [-6.759, 16.044, 13.384],
  coral: [-1.686, 26.466, 17.279],
  cornflowerblue: [-4.277, 4.335, -31.417],
  cornsilk: [20.177, -2.108, 12.691],
  crimson: [-9.797, 26.887, 7.168],
  cyan: [14.446, -36.877, -13.002],
  darkblue: [-15.279, 5.065, -13.783],
  darkcyan: [-8.139, -9.521, -3.357],
  darkgoldenrod: [-5.458, 4.276, 15.675],
  darkgray: [-0.659, 0.002, -0.004],
  darkgreen: [-12.476, -7.199, 5.146],
  darkgrey: [-0.659, 0.002, -0.004],
  darkkhaki: [1.689, -5.099, 17.884],
  darkmagenta: [-13.157, 14.587, -10.429],
  darkolivegreen: [-11.108, -4.398, 5.6],
  darkorange: [-0.527, 22.066, 23.582],
  darkorchid: [-10.814, 21.792, -26.808],
  darkred: [-13.878, 9.522, -31.054],
  darksalmon: [-0.324, 16.641, 12.513],
  darkseagreen: [0.932, -12.891, 9.213],
  darkslateblue: [-13.456, 4.819, -11.056],
  darkslategray: [-13.386, -1.835, -0.647],
  darkslategrey: [-13.386, -1.835, -0.647],
  darkturquoise: [2.848, -22.36, -9.113],
  darkviolet: [-11.747, 23.701, -30.927],
  deeppink: [-6.771, 42.21, -2.302],
  deepskyblue: [1.2, -9.816, -32.345],
  dimgray: [-10.538, 0.001, -0.001],
  dimgrey: [-10.538, 0.001, -0.001],
  dodgerblue: [-5.389, 4.341, -41.953],
  firebrick: [-11.853, 15.83, 5.576],
  floralwhite: [21.09, -0.031, 5.079],
  forestgreen: [-8.684, -13.682, 9.78],
  fuchsia: [-4.988, 56.499, -40.392],
  gainsboro: [11.673, 0.004, -0.007],
  ghostwhite: [20.467, 1.208, -3.283],
  gold: [11.013, -1.508, 40.433],
  goldenrod: [0.209, 4.885, 23.531],
  gray: [-7.653, 0.001, -0.002],
  green: [-10.031, -12.195, 8.717],
  greenyellow: [15.169, -40.524, 44.293],
  grey: [-7.653, 0.001, -0.002],
  honeydew: [21.25, -7.262, 5.185],
  hotpink: [-2.599, 37.855, -5.669],
  indianred: [-7.723, 18.57, 6.54],
  indigo: [-14.798, 6.974, -11.003],
  ivory: [22.308, -2.518, 6.856],
  khaki: [13.778, -7.421, 29.274],
  lavender: [15.057, 3.235, -8.799],
  lavenderblush: [18.867, 5.567, -0.566],
  lawngreen: [12.577, -47.56, 41.928],
  lemonchiffon: [20.362, -5.149, 19.005],
  lightblue: [8.634, -7.858, -9.084],
  lightcoral: [-2.265, 24.177, 8.514],
  lightcyan: [20.574, -9.385, -3.318],
  lightgoldenrodyellow: [20.095, -6.106, 16.619],
  lightgray: [9.188, 0.003, -0.007],
  lightgreen: [10.716, -32.545, 23.261],
  lightgrey: [9.188, 0.003, -0.007],
  lightpink: [6.646, 20.916, 3.413],
  lightsalmon: [2.485, 20.84, 16.798],
  lightseagreen: [-2.447, -16.733, -3.293],
  lightskyblue: [5.729, -7.179, -22.962],
  lightslategray: [-6.786, -0.856, -4.667],
  lightslategrey: [-6.786, -0.856, -4.667],
  lightsteelblue: [4.874, -0.843, -11.063],
  lightyellow: [21.956, -4.989, 13.581],
  lime: [11.654, -56.494, 40.382],
  limegreen: [1.234, -32.687, 23.364],
  linen: [18.165, 1.554, 5.364],
  magenta: [-4.988, 56.499, -40.392],
  maroon: [-14.226, 7.961, -30.486],
  mediumaquamarine: [3.097, -21.703, 4.92],
  mediumblue: [-14.296, 11.977, -32.591],
  mediumorchid: [-7.633, 25.757, -24.727],
  mediumpurple: [-7.143, 15.504, -27.482],
  mediumseagreen: [-2.701, -20.561, 9.975],
  mediumslateblue: [-8.157, 16.258, -37.479],
  mediumspringgreen: [11.339, -47.668, 21.353],
  mediumturquoise: [3.851, -21.785, -5.645],
  mediumvioletred: [-10.443, 25.242, -4.799],
  midnightblue: [-15.199, 2.988, -8.131],
  mintcream: [21.829, -4.064, 1.211],
  mistyrose: [15.777, 7.823, 4.126],
  moccasin: [14.965, 2.117, 19.653],
  navajowhite: [13.588, 3.813, 20.181],
  navy: [-15.397, 4.235, -11.523],
  oldlace: [19.535, 0.166, 7.391],
  olive: [-8.256, -4.234, 11.521],
  olivedrab: [-7.264, -9.529, 11.936],
  orange: [2.626, 15.625, 28.186],
  orangered: [-6.134, 33.52, 15.395],
  orchid: [-3.878, 29.896, -20.246],
  palegoldenrod: [14.466, -6.169, 22.235],
  palegreen: [14.136, -36.759, 26.273],
  paleturquoise: [13.555, -15.718, -5.547],
  palevioletred: [-4.881, 22.696, 0.17],
  papayawhip: [17.948, 1.172, 12.327],
  peachpuff: [12.963, 6.791, 15.404],
  peru: [-4.356, 10.241, 14.749],
  pink: [8.465, 18.819, 2.397],
  plum: [1.684, 20.993, -15.01],
  powderblue: [10.392, -10.575, -6.501],
  purple: [-13.623, 12.196, -8.719],
  rebeccapurple: [-13.103, 9.279, -13.942],
  red: [-7.779, 36.882, 12.992],
  rosybrown: [-3.503, 8.418, 2.962],
  royalblue: [-9.557, 8.74, -33.804],
  saddlebrown: [-12.214, 6.288, 5.41],
  salmon: [-1.702, 26.364, 12.154],
  sandybrown: [2.03, 14.687, 20.5],
  seagreen: [-8.369, -11.708, 5.693],
  seashell: [19.859, 2.07, 4.221],
  sienna: [-10.704, 8.713, 6.573],
  silver: [4.382, 0.003, -0.005],
  skyblue: [5.379, -9.635, -16.278],
  slateblue: [-10.283, 11.516, -26.589],
  slategray: [-7.92, -0.748, -4.067],
  slategrey: [-7.92, -0.748, -4.067],
  snow: [21.326, 1.629, 0.562],
  springgreen: [12.247, -52.331, 29.052],
  steelblue: [-8.049, -1.398, -14.555],
  tan: [2.652, 3.13, 12.804],
  teal: [-9.428, -7.96, -2.807],
  thistle: [5.97, 9.364, -6.698],
  tomato: [-4.153, 31.069, 14.666],
  turquoise: [6.796, -27.846, -2.905],
  violet: [-0.411, 35.696, -25.521],
  wheat: [12.965, 1.253, 17.295],
  white: [22.667, 0.005, -0.01],
  whitesmoke: [19.306, 0.005, -0.01],
  yellow: [19.875, -19.612, 53.373],
  yellowgreen: [3.628, -21.946, 27.148],
} satisfies Record<string, [number, number, number]>;
