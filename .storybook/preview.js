import '../app/globals.css'
import '../stories/storybook-docs.css'
import {noto_sans_jp} from '../lib/typography'

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
      <div className={`${noto_sans_jp.variable} ${context.name}`}>
        <Story />
      </div>
    )
  ]
};

export default preview;
