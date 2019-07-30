import babel from "rollup-plugin-babel";
import resolve from "rollup-plugin-node-resolve";
const name = "Name";
const dist = "dist";

export default {
  input: "src/index.js",
  output: [
    {
      file: `${dist}/bundle.cjs.js`,
      format: "cjs"
    },
    {
      file: `${dist}/bundle.esm.js`,
      format: "esm"
    },
    {
      name: name,
      globals: {
        react: "React"
      },
      file: `${dist}/bundle.umd.js`,
      format: "umd"
    }
  ],
  plugins: [
    resolve(),
    babel({
      exclude: "node_modules/**"
    })
  ],
  external: ["react"]
};
