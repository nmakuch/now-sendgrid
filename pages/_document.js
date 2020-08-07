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
            font-family: "Roboto";
          }

          h1,h2,h3,label {
            font-family: "Roboto";
            font-weight: 500 !important;
            line-height: 38px;
          }

          .bottom  {
            font-family: "Roboto";
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
