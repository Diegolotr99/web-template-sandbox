import Document, { Head, Main, NextScript } from 'next/document'

const BaseCSS = ({ css }) =>
  <style
    dangerouslySetInnerHTML={{
      __html: css
    }}
  />

BaseCSS.defaultProps = {
  css: '*{box-sizing:border-box}body{margin:0}'
}

export default class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <meta name='generator' content='mdx-docs' />
          <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css?family=Capriola&amp;subset=latin-ext" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css?family=Satisfy" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css?family=Alex+Brush&amp;subset=latin-ext" rel="stylesheet"></link>
          <link href="https://fonts.googleapis.com/css?family=Raleway:400,600,700,800,900&display=swap" rel="stylesheet"></link>
          <link href="https://fonts.googleapis.com/css?family=Work+Sans:100,200,300,400,500,600,700,800" rel="stylesheet" />
          <BaseCSS />
        </Head>
        <body className="try">
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}   