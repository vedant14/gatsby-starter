import React from "react"
import { Layout, SEO, Hero } from "../components"

const IndexPage = () => {
	return (
		<Layout color>
			<SEO title="Shopify" description="Vedant" />
			<Hero>
				<h1>Hi Vedant</h1>
				<p>This is your starter template</p>
			</Hero>
		</Layout>
	)
}

export default IndexPage
