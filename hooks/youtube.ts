import { YoutubeMedia } from "@/types/youtube";
import React, { useEffect } from "react";
import youtubeDummyContent from "@/json/youtube.json";

const useYoutube = () => {
    const [media, setMedia] = React.useState<YoutubeMedia[]>([]);
    useEffect(() => {
        const callYoutubeApi = async () => {
            // const content = await fetch("/api/youtube?query=funny", {
            //     method: "GET",
            // }).then((res) => res.json())
            const content = youtubeDummyContent;
            return content?.data?.filter(item => item.type === "video").map((item) => {
                return {
                    type: "video",
                    videoId: item.videoId,
                    title: item.title,
                    channelTitle: item.channelTitle,
                    channelId: item.channelId,
                    channelHandle: item.channelHandle,
                    channelThumbnail: item.channelThumbnail,
                    description: item.description,
                    viewCount: item.viewCount,
                    publishedTimeText: item.publishedTimeText,
                    publishDate: item.publishDate,
                    publishedAt: item.publishedAt,
                    lengthText: item.lengthText,
                    badges: item.badges,
                    thumbnail: item.thumbnail,
                    richThumbnail: item.richThumbnail,
                } as YoutubeMedia;
            })
        };
        callYoutubeApi().then((data) => setMedia(data));
    }, []);

    return { media };
};

export default useYoutube;
