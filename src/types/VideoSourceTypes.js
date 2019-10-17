import React from 'react';
import { ReactComponent as PlaybuzzLogo } from '../assets/svg/playbuzz-icon.svg'
import { ReactComponent as FacebookLogo } from '../assets/svg/facebook-icon.svg'
import { ReactComponent as YoutubeLogo } from '../assets/svg/youtube-icon.svg'
import { ReactComponent as UrlLogo } from '../assets/svg/url-icon.svg'

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
                        title="url"
                        height="210"
                        src={url}
                        frameBorder="0">
                    </iframe>
                </div>
            );
        },
        getIcon: () => {
            return <UrlLogo />;
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
                        title="facebook"
                        height="210"
                        src={src}
                        frameBorder="0">
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
                        height="210"
                        title="youtube"
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