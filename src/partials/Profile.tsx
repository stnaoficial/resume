interface ProfileInterface {
    cover: string,
    name: string,
    brief: string
}

export default function Profile(props: ProfileInterface) {

    return (
        <div className="@flex @flex-row @gap-5">
            <div className="@relative @aspect-square @h-[100px]">
                <div className="@absolute @bottom-0 @right-0 @aspect-square @h-[30px] @bg-blue-500 @rounded-full"></div>
                <img src={ props.cover } alt="" className="@w-full @rounded-full"/>
            </div>
            <div className="@flex @flex-col @gap-1">
                <p className="@text-xl @font-semibold @whitespace-nowrap">
                    { props.name }
                </p>
                <p className="@text-neutral-500 @whitespace-nowrap @flex @gap-2">
                    { props.brief }
                </p>
            </div>
        </div>
    )
}