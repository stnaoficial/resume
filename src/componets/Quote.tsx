import React from "react"

interface QuoteInterface {
    children?: React.ReactNode,
    author?: string
}

export default function Quote({ children, ...props }: QuoteInterface) {

    return (
        <div className="@border-s-4 @border-neutral-800 @ps-6 @py-4 @flex @flex-col @gap-6">
            <p className="@text-neutral-600 @text-xl">
                <span className="@me-3">
                    <i className="ri-double-quotes-l"></i>
                </span>
                <span>
                    { props.author || 'Anonym' }
                </span>
            </p>
            { children? children : '...' }
        </div>
    )
}