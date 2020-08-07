import Document, { Head, Main, NextScript } from "next/document";
import React from "react";

class CustomDocument extends Document {
  render() {
    return (
      <html lang="en">
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;900&display=swap"
            rel="stylesheet"
          />
          <style
            dangerouslySetInnerHTML={{
              __html: `
          body {
            font-family: 'Roboto', sans-serif;
          }

          h1,h2,h3,label {
            font-family: "Roboto";
            font-weight: 900 !important;
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
