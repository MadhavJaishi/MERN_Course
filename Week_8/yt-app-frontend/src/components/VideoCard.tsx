export function VideoCard(props: any) {
    return <div className="rounded-xl p-3 bg-black">
        <img className="" src={props.thumbnail} alt="" />
        <div className="grid grid-cols-12 pt-2 pb-2 bg-black text-white">
            <img className="col-span-1 rounded-full h-10 w-16 md:h-16" src={props.profileImage} alt="" />
            <div className="col-span-11 pl-2">
                <div className="">
                    {props.title}
                </div>
                <div className="text-zinc-400">
                    {props.author}
                </div>
                <div className="text-zinc-400">
                    {props.duration} | {props.timestamp}
                </div>
            </div>
        </div>
    </div>
}