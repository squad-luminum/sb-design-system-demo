import '../src/styles/luminum-light.theme.css';
import '../src/styles/luminum-dark.theme.css';
import '../src/styles/bluestar-light.theme.css';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  themes: {
    default: 'Luminum Light',
    list: [
      { name: 'Luminum Light', class: 'theme-luminum-light', color: '#2AA288' },
      { name: 'Luminum Dark', class: 'theme-luminum-dark', color: '#1D725F' },
      { name: 'BlueStar Light', class: 'theme-bluestar-light', color: '#477FBA' }
    ],
  },
}

export const decorators = [
  (Story) => (
    <div class="theme-luminum-light">
        <Story />
    </div>
  )
]