import Head from "next/head"
import { AppProps } from "next/app"
import "../styles/globals.css"

export default function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<meta charSet="utf-8" />
				<title> Bias Museuem </title>
			</Head>
			<Component {...pageProps} />
		</>
	)
}
