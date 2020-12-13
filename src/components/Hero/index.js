import React from "react"
import { HeroWrapper } from "./styles"
export function Hero({ children }) {
	return (
		<HeroWrapper>
			<div>{children}</div>
		</HeroWrapper>
	)
}
