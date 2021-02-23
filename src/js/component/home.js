import React, { useState } from "react";

export function Home() {
	const [state, setState] = useState({
		red: "",
		yellow: "",
		green: ""
	});
	const stylesBorder = {
		border: "1px solid black",
		height: "30px",
		width: "30px"
	};
	return (
		<div className="text-center mt-5">
			{" "}
			hello
			<div
				className="rounded-circle bg-danger border-dark"
				style={
					!state.red
						? { height: "30px", width: "30px" }
						: stylesBorder
				}
				onClick={() =>
					setState({ red: "clicked", yellow: "", green: "" })
				}></div>
			<div
				className="rounded-circle bg-warning border-dark"
				style={
					state.yellow
						? stylesBorder
						: { height: "30px", width: "30px" }
				}
				onClick={() =>
					setState({ red: "", yellow: "clicked", green: "" })
				}></div>
			<div
				className="rounded circle bg-success border-dark"
				style={
					state.green
						? stylesBorder
						: { height: "30px", width: "30px" }
				}
				onClick={() =>
					setState({ red: "", yellow: "", green: "clicked" })
				}></div>
		</div>
	);
}
