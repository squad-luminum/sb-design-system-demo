import '../src/styles/root.css';

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

/** @type {Array<import('@storybook/react').DecoratorFn>} */
export const decorators = [
  (Story, context) => {
    const isDocs = context.viewMode === 'docs';
    const rootClass = `root${isDocs ? ' theme-luminum-light' : ''}`;
    return (
      <div class={rootClass}>
          <Story />
      </div>
    );
  }
]