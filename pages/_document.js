import Document, { Html, Head, Main, NextScript } from 'next/document';
//import getConfig from 'next/config';
//const { publicRuntimeConfig } = getConfig();

class MyDocument extends Document {

  /*setGoogleTags() {
    if(publicRuntimeConfig.PRODUCTION) {
      return {
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'UA-177188340-1');
        `
      };
    }
  };*/
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css"
          />
          {/*<link rel="stylesheet" href="/static/css/styles.css" />*/}
          {/*<script async src="https://www.googletagmanager.com/gtag/js?id=UA-177188340-1"></script>
          <script dangerouslySetInnerHTML={{__html: this.setGoogleTags}}></script>*/}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
