import Skeleton from "react-loading-skeleton";

const SkeletonCard = () => {
    return (
        <>
            {/* <div className=" gap-x-10 ">
                <div className=" rounded overflow-hidden shadow-lg max-h-full bg-white">
                    <div className="flex flex-row px-6 py-3">
                        <div className="">
                            <Skeleton circle={true} height={50} width={50} />
                        </div>
                        <div className='m-2 flex flex-col '>
                            <Skeleton width={200} />
                            <Skeleton height={10} width={150} />
                        </div>
                    </div>
                    <div className="pl-6 space-x-3">
                        <Skeleton circle={true} height={30} width={30} />
                        <Skeleton circle={true} height={30} width={30} />
                        <Skeleton circle={true} height={30} width={30} />
                        <Skeleton circle={true} height={30} width={30} />
                        <div className="pr-6 space-x-3 float-right">
                            <Skeleton circle={true} height={30} width={30} />
                            <Skeleton circle={true} height={30} width={30} />
                        </div>
                    </div>
                    <div className="pl-6 pt-1 flex flex-col">
                        <Skeleton  width={200} />
                        <Skeleton height={10} width={160} />
                    </div>
                    <div className="px-6 py-4">
                        <Skeleton height={200} />
                    </div>
                </div>
            </div> */}
            <div className="gap-x-10">
                <div className="p-4 space-y-2 rounded overflow-hidden shadow-lg max-h-full bg-thr_bg">
                    <div className="animate-pulse">
                        <div className="p-1 flex flex-row">
                            <div className="rounded-full bg-section_bg h-12 w-12"></div>
                            <div className="flex-1 pl-4 pt-2 space-y-2 flex flex-col">
                                <div className="h-4 bg-section_bg rounded w-2/4"></div>
                                <div className="h-3 bg-section_bg rounded w-1/3"></div>
                            </div>
                        </div>
                        <div className="p-1 pt-4 flex flex-row justify-between">
                            <div className="space-x-2 flex flex-row">
                                <div className="rounded-full bg-section_bg h-8 w-8"></div>
                                <div className="rounded-full bg-section_bg h-8 w-8"></div>
                                <div className="rounded-full bg-section_bg h-8 w-8"></div>
                                <div className="rounded-full bg-section_bg h-8 w-8"></div>
                            </div>
                            <div className="space-x-2 flex flex-row">
                                <div className="rounded-full bg-section_bg h-8 w-8"></div>
                                <div className="rounded-full bg-section_bg h-8 w-8"></div>
                            </div>
                        </div>
                        <div className="p-1 space-y-2">
                            <div className="h-4 bg-section_bg rounded w-2/4"></div>
                            <div className="h-3 bg-section_bg rounded w-1/3"></div>
                        </div>
                        <div className="p-1 pt-4">
                            <div className="h-48 bg-section_bg rounded max-w-full"></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};
export default SkeletonCard;