import { generate } from "@icona/generator";

generate({
  config: {
    svg: {
      active: true, // you can disable svg generator if you set false
      path: "svg", // will generate svg files in svg folder
      svgoConfig: {},
    },
    drawable: {
      active: true, // you can disable drawable generator if you set false
      path: "drawable", // will generate xml files in drawable folder
      svg2vectordrawableConfig: {},
      defaultColor: "#000000", // default color for android vector drawable
    },
    pdf: {
      active: true, // you can disable pdf generator if you set false
      path: "pdf", // will generate pdf files in pdf folder
      pdfKitConfig: {},
      svgToPdfOptions: {},
    },
    react: {
      active: true, // you can disable react generator if you set false
      path: "react", // will generate react component files in react folder
      svgrConfig: {
        jsxRuntime: "classic",
        plugins: [
          "@svgr/plugin-svgo",
          "@svgr/plugin-jsx",
          "@svgr/plugin-prettier",
        ],
        prettierConfig: {
          tabWidth: 2,
          useTabs: false,
          singleQuote: true,
          semi: true,
        },
      },
    },
  },
});
