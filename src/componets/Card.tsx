import React from "react";

interface CardInterface {
    title?: string,
    id?: string,
    children: React.ReactNode
}

export default function Card({ children, ...props }: CardInterface) {

    return (
        <div className="@w-100 @h-max @flex @flex-col @gap-4 @p-6 @rounded-3xl @bg-neutral-900 @border-neutral-800 @border-[1px]">
            { props.title? (
                <h2 id={ props.id } className="@text-neutral-500 hover:@text-neutral-400 @text-2xl">
                    <a href={ `#${ props.id }` }>
                        <span className="@font-normal @text-neutral-800 @me-2">
                            <i className="ri-hashtag"></i>
                        </span>
                        <span>
                            { props.title }
                        </span>
                    </a>
                </h2>
            ) : null }
            <div className="@flex @flex-col @gap-4">
                { children }
            </div>
        </div>
    )
}