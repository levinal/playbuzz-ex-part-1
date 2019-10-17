import React from 'react';
import { ReactComponent as PlaybuzzLogo } from '../assets/svg/playbuzz-icon.svg'
import { ReactComponent as FacebookLogo } from '../assets/svg/facebook-icon.svg'
import { ReactComponent as YoutubeLogo } from '../assets/svg/youtube-icon.svg'

export const VideoSourceTypes = [
    {
        name: "playbuzz",
        id: "videoId",
        getPlayer: (id) => {
            const video = <div className="playbuzz" data-id={id} data-show-share="false" data-show-info="false" data-comments="false"></div>;
            return video;
        },
        getIcon: () => {
            return <PlaybuzzLogo />;
        }
    },
    {
        name:"url",
        id: "url",
        getPlayer: (url) => {
            return (
                <div className="url-source">
                    <iframe
                        src={url}
                        frameborder="0">
                    </iframe>
                </div>
            );
        },
        getIcon: () => {
            return <PlaybuzzLogo />;
        }
    },
    {
        name: "facebook",
        id: "videoId",
        getPlayer: (id) => {
            const src = `https://www.facebook.com/video/embed?video_id=${id}`;
            return (
                <div className="facebook-source">
                    <iframe
                        src={src}
                        frameborder="0">
                    </iframe>
                </div>
            );
        },
        getIcon: () => {
            return <FacebookLogo />;
        }
    },
    {
        name: "youtube",
        id: "videoId",
        getPlayer: (id) => {
            const src = `https://www.youtube.com/embed/${id}`;
            return (
                <div className="youtube-source">
                    <iframe
                        src={src}>
                    </iframe>
                </div>
            );
        },
        getIcon: () => {
            return <YoutubeLogo />;
        }
    }
];