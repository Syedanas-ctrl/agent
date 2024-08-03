export interface Thumbnail {
    url: string;
    width: number;
    height: number;
}

export interface YoutubeMedia {
    type: "video";
    videoId: string;
    title: string;
    channelTitle: string;
    channelId: string;
    channelHandle: string;
    channelThumbnail: Thumbnail[];
    description: string;
    viewCount: string;
    publishedTimeText: string;
    publishDate: string;
    publishedAt: string;
    lengthText: string;
    badges: string[];
    thumbnail: Thumbnail[];
    richThumbnail: Thumbnail[];
}