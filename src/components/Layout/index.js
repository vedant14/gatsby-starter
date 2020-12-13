import React from "react"
import { LayoutWrapper, Gradient } from "./styles"
import { Header } from "../Header"
import { GlobalStyles } from "../../styles/GlobalStyles"
export function Layout({ children, color }) {
	return (
		<Gradient color={color}>
			<GlobalStyles />
			<Header />
			<LayoutWrapper>
				<main>{children}</main>
			</LayoutWrapper>
		</Gradient>
	)
}
