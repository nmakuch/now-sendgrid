import Document, { Head, Main, NextScript } from "next/document";
import React from "react";

class CustomDocument extends Document {
  render() {
    return (
      <html lang="en">
        <Head>
          <link
            href="https://fonts.googleapis.com/css?family=Raleway"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Inter"
            rel="stylesheet"
          />
          <style
            dangerouslySetInnerHTML={{
              __html: `
          body {
            font-family: "Raleway";
          }

          h1,h2,h3 {
            font-family: "Inter-SemiBold";
          }
          `,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

export default CustomDocument;
