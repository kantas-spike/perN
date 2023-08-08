import '../app/globals.css'
import '../stories/storybook-docs.css'
import {noto_sans_jp} from '../lib/typography'

// console.log("document.readyState: ", document.readyState)
document.addEventListener("DOMContentLoaded", (event) => {
  console.log(`DOMContentLoaded: adding class('${noto_sans_jp.variable}') to #storybook-docs`)
  const root = document.getElementById("storybook-docs")
  root.classList.add(noto_sans_jp.variable)
}, {once: true})

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    backgrounds: {
      default: "light",
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    (Story, context) => (
      <div className={`${context.name}`}>
        <Story />
      </div>
    )
  ]
};

export default preview;
