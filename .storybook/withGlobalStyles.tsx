import GlobalStyles from '../src/styles/global';

const withGlobalStyles = (storyFn: any) => (
  <>
  <GlobalStyles />
  {storyFn()}
  </>
)

export default withGlobalStyles;
