import { VideoCard } from "./VideoCard"
const VIDEOS = [
    {
        thumbnail: "thumbnail.jpg",
        profileImage: "profileImage.jpg",
        title: "Movie Review on the latest south movie hindi dubbed",
        author: "PJ Explained",
        duration: "4Min",
        timestamp: "4 days ago"
    },
    {
        thumbnail: "thumbnail.jpg",
        profileImage: "profileImage.jpg",
        title: "Movie Review on the latest south movie hindi dubbed",
        author: "PJ Explained",
        duration: "4Min",
        timestamp: "4 days ago"
    },
    {
        thumbnail: "thumbnail.jpg",
        profileImage: "profileImage.jpg",
        title: "Movie Review on the latest south movie hindi dubbed",
        author: "PJ Explained",
        duration: "4Min",
        timestamp: "4 days ago"
    },
    {
        thumbnail: "thumbnail.jpg",
        profileImage: "profileImage.jpg",
        title: "Movie Review on the latest south movie hindi dubbed",
        author: "PJ Explained",
        duration: "4Min",
        timestamp: "4 days ago"
    },
    {
        thumbnail: "thumbnail.jpg",
        profileImage: "profileImage.jpg",
        title: "Movie Review on the latest south movie hindi dubbed",
        author: "PJ Explained",
        duration: "4Min",
        timestamp: "4 days ago"
    },
    {
        thumbnail: "thumbnail.jpg",
        profileImage: "profileImage.jpg",
        title: "Movie Review on the latest south movie hindi dubbed",
        author: "PJ Explained",
        duration: "4Min",
        timestamp: "4 days ago"
    },
    {
        thumbnail: "thumbnail.jpg",
        profileImage: "profileImage.jpg",
        title: "Movie Review on the latest south movie hindi dubbed",
        author: "PJ Explained",
        duration: "4Min",
        timestamp: "4 days ago"
    },
    {
        thumbnail: "thumbnail.jpg",
        profileImage: "profileImage.jpg",
        title: "Movie Review on the latest south movie hindi dubbed",
        author: "PJ Explained",
        duration: "4Min",
        timestamp: "4 days ago"
    },
    {
        thumbnail: "thumbnail.jpg",
        profileImage: "profileImage.jpg",
        title: "Movie Review on the latest south movie hindi dubbed",
        author: "PJ Explained",
        duration: "4Min",
        timestamp: "4 days ago"
    },
    {
        thumbnail: "thumbnail.jpg",
        profileImage: "profileImage.jpg",
        title: "Movie Review on the latest south movie hindi dubbed",
        author: "PJ Explained",
        duration: "4Min",
        timestamp: "4 days ago"
    },
]
export function VideoGrid() {
    return <div className="grid md:grid-cols-2 2xl:grid-cols-4">
        {VIDEOS.map(video => <div>
            <VideoCard 
                thumbnail = {video.thumbnail}
                profileImage = {video.profileImage}
                title = {video.title}
                author = {video.author}
                duration = {video.duration}
                timestamp = {video.timestamp}
            />
        </div>)}
    </div>
}