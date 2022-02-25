import React from "react";

const Background = ({ children }) => {
	return <div className="bg-white transition-all dark:bg-zinc-700">{children}</div>;
};

export default Background;
