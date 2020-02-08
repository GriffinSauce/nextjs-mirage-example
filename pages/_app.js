import { createServer } from '../lib/mockAPI';

// TODO: Wrap in dev env switch
if (process.browser) {
  createServer();
}

export default ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};
