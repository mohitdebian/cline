// Safe HTML parser for highlighted search results
export const parseHighlightedText = (htmlString: string) => {
	// Split by highlight spans and reconstruct as React elements
	const parts = htmlString.split(/(<span class="model-item-highlight">.*?<\/span>)/g)

	return parts
		.map((part, index) => {
			if (part.startsWith('<span class="model-item-highlight">')) {
				// Extract text content from span
				const text = part.replace(/<span class="model-item-highlight">(.*?)<\/span>/, "$1")
				return (
					<span className="model-item-highlight" key={`highlight-${text}-${index}`}>
						{text}
					</span>
				)
			}
			// Return plain text without wrapping in span
			return part || null
		})
		.filter((part) => part !== null && part !== "")
}
