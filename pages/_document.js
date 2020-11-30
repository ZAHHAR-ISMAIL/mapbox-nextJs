// import Document, {Head, Main, NextScript} from 'next/document';
import Document, { Html, Head, Main, NextScript } from 'next/document'

// import {ServerStyleSheet} from 'styled-components';

// import GlobalStyle from '../components/GlobalStyle';

export default class MyDocument extends Document {
    // static getInitialProps({renderPage}) {
        // const sheet = new ServerStyleSheet();
        // const page = renderPage((App) => (props) => sheet.collectStyles(<App {...props} />));
        // const styleTags = sheet.getStyleElement();
        // return {...page, styleTags};
    // }

    render() {
        return (
            <Html lang="en">
                <Head>{this.props.styleTags}</Head>
                <body>
                    {/* <GlobalStyle /> */}
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
