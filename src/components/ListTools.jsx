import React, { useState } from "react";

export default function ListTools({ onSearch, onSort, onReset }) {
	const [keyword, setKeyword] = useState("");

	return (
		<div className="list-tools-container">
			<div className="tool">
				<input type="text" value={keyword} onChange={e => setKeyword(e.currentTarget.value)} />
				<button type="button" onClick={() => onSearch(keyword)}>
					Search
				</button>
			</div>

			<div className="tool">
				<button type="button" onClick={onSort}>
					Sort Alphabetically
				</button>
			</div>

			<div className="tool">
				<button type="button" onClick={onReset}>
					Reset List
				</button>
			</div>
		</div>
	);
}
