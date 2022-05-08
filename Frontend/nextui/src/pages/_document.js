import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

class MainDocument extends Document {
	static async getInitialProps(ctx) {
		const sheet = new ServerStyleSheet();
		const originalRenderPage = ctx.renderPage;

		try {
			ctx.renderPage = () =>
				originalRenderPage({
					enhanceApp: (App) => (props) =>
						sheet.collectStyles(<App {...props} />),
				});

			const initialProps = await Document.getInitialProps(ctx);
			return {
				...initialProps,
				styles: (
					<>
						{initialProps.styles}
						{sheet.getStyleElement()}
					</>
				),
			};
		} finally {
			sheet.seal();
		}
	}

	render() {
		return (
			<Html>
				<Head>{this.props.styles}</Head>
				<body>
					<Main />
					<NextScript />
					<div id="modal-root"></div>
				</body>
			</Html>
		);
	}
}

export default MainDocument;

// different implementations of the above

// import Document, { Head, Main, NextScript } from 'next/document'
// import { ServerStyleSheet } from 'styled-components'
// import 'styles/global-styles';

// export default class SiteDocument extends Document {
//   render () {
//     const sheet = new ServerStyleSheet()
//     const main = sheet.collectStyles(<Main />)
//     const styleTags = sheet.getStyleElement()
//     return (
//       <html>
//         <Head>
//           <meta charSet="utf-8" />
//           <meta name="viewport" content="initial-scale=1.0, width=device-width" />
//           {styleTags}
//         </Head>
//         <body>
//           <div className="root">
//             {main}
//           </div>
//           <NextScript />
//         </body>
//       </html>
//     )
//   }
// }
