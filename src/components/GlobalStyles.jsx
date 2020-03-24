import React from "react";
import {css, Global} from "@emotion/core";
import {useTheme} from "emotion-theming";

export default function GlobalStyles(){
    const theme = useTheme();
    return (
        <Global
            styles={css`
					html,
					body {
						height: 100%;
						width: 100%;
						margin: 0;
						background-color: ${theme.colors.background};
						display: flex;
						justify-content: center;
					}
					#app {
					    width: 100%;
					}
				`}
        />
    )
}
