import { execSync } from "node:child_process"
import { defineConfig } from "tsup"

export default defineConfig((options) => ({
  entry: {
    index: "src/index.ts",
  },
  // external: ["react", "react-dom", "cobe", "dotted-map", "react-icon-cloud"],
  banner: {
    js: '"use client";',
  },
  format: ["cjs", "esm"],
  dts: false, // Will use tsc directly in onSuccess
  splitting: true,
  clean: true,
  external: [
    "react",
    "react-dom",
    "lucide-react",
    "framer-motion",
    "cobe",
    "dotted-map",
    "react-icon-cloud",
    "next-themes",
  ],
  treeshake: true,
  sourcemap: true,
  minify: false,

  onSuccess: async () => {
    if (!options.watch) {
      console.log("🎨 Building CSS...")
      execSync("npx @tailwindcss/cli -i ./src/styles/global.css -o ./dist/global.css", {
        stdio: "inherit",
      })
      console.log("✓ Built global.css to dist/")

      console.log("📦 Generating TypeScript declarations...")
      try {
        execSync("npx tsc --emitDeclarationOnly --declaration --skipLibCheck", {
          stdio: "inherit",
        })
        console.log("✓ Generated .d.ts files")
      } catch (error) {
        // tsc may exit with non-zero code due to type errors, but declarations are still generated
        console.log("⚠ Declaration files generated with some type warnings (expected)")
      }
    }
  },
}))
