import React, { useState } from "react";

export function Home() {
	const [color, setColor] = useState("red");
	const stylesBorder = {
		border: "1px solid black"
	};
	const allColors = ["danger", "warning", "success"];
	return (
		<div
			className="card"
			style={{
				background: "black",
				width: "32px",
				margin: "auto"
			}}>
			{allColors.map((c, i) => (
				<div
					key={i}
					className={`rounded-circle bg-${c} border-dark ${
						c == color ? "glow" : ""
					}`}
					onClick={() => setColor(c)}></div>
			))}
		</div>
	);
}
