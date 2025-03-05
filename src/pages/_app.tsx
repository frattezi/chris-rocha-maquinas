import type { AppProps } from "next/app";

import BaseLayout from "@components/BaseLayout";

function App({ Component, pageProps }: AppProps) {
	return (
		<BaseLayout>
			<Component {...pageProps} />
		</BaseLayout>
	);
}

export default App;
