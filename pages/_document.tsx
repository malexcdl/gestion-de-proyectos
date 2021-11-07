/* eslint-disable react/no-unknown-property */
/* eslint-disable @next/next/no-sync-scripts */
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <script
            src="https://kit.fontawesome.com/a3108bc98d.js"
            crossOrigin="anonymous"
          ></script>
        </Head>
        {/* <body style={{ backgroundColor: "red" }}> */}
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
//En este documento se hacen configuraciones globales de toda la aplicación.