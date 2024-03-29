import HomeOutLineIcon from "../assets/home-outLine.svg";
import HomeFillIcon from "../assets/home-fill.svg";
import YoutubeShortsOutLineIcon from "../assets/youtube-shorts-outLine.svg";
import YoutubeShortsFillIcon from "../assets/youtube-shorts-fill.svg";
import SubscriptionsOutlinedIcon from "../assets/subscriptions-outLine.png";
import SubscriptionsFillIcon from "../assets/subscriptions-fill.png";
import VideoGalleryOutLineIcon from "../assets/video-gallery-outLine.png";
import VideoGalleryFillIcon from "../assets/video-gallery-fill.png";
import HistoryOutLineIcon from "../assets/history.png";
import HistoryFillIcon from "../assets/history.png";
import TrendingOutLineIcon from "../assets/trending-outLine.png";
import TrendingFillIcon from "../assets/trending-fill.png";
import MusicOutLineIcon from "../assets/music-outLine.svg";
import MusicFillIcon from "../assets/music-fill.svg";
import LiveOutLineIcon from "../assets/live.svg";
import LiveFillIcon from "../assets/live.svg";
import GamingOutlineIcon from "../assets/youtube-gaming-outline.png";
import GamingFillIcon from "../assets/youtube-gaming-fill.png";
import SportsOutlineIcon from "../assets/sports-outLine.png";
import SportsFillIcon from "../assets/sports-fill.png";
import Pulse from "../assets/plus.svg";
import YouTubeLogo from "../assets/youtube-logo.svg";
import YouTubeMusicIcon from "../assets/youtube-music.svg";
import YouTubeKidsIcon from "../assets/youtube-kids.svg";
import SettingsIcon from "../assets/settings-icon.svg";
import FlagReportHistoryIcon from "../assets/flag-icon.png";
import HelpIcon from "../assets/help-icon.png";
import SendFeedbackIcon from "../assets/send-feedback-icon.png";

export const categories1 = [
  {
    name: "Home",
    link: "/",
    icon: HomeOutLineIcon,
    iconTarget: HomeFillIcon,
  },
  {
    name: "Shorts",
    link: "/Shorts/:id",
    icon: YoutubeShortsOutLineIcon,
    iconTarget: YoutubeShortsFillIcon,
  },
  {
    name: "Subscriptions",
    link: "/feed/subscriptions",
    icon: SubscriptionsOutlinedIcon,
    iconTarget: SubscriptionsFillIcon,
  },
];

export const categories2 = [
  {
    name: "You",
    link: "/feed/you",
    icon: VideoGalleryOutLineIcon,
    iconTarget: VideoGalleryFillIcon,
  },
  {
    name: "History",
    link: "/feed/history",
    icon: HistoryOutLineIcon,
    iconTarget: HistoryFillIcon,
  },
];

export const categories3 = [
  {
    name: "Trending",
    link: "/feed/trending",
    icon: TrendingOutLineIcon,
    iconTarget: TrendingFillIcon,
  },
  {
    name: "Music",
    link: "/music",
    icon: MusicOutLineIcon,
    iconTarget: MusicFillIcon,
  },
  {
    name: "Live",
    link: "/live",
    icon: LiveOutLineIcon,
    iconTarget: LiveFillIcon,
  },
  {
    name: "Gaming",
    link: "/gaming",
    icon: GamingOutlineIcon,
    iconTarget: GamingFillIcon,
  },
  {
    name: "Sports",
    link: "/sports",
    icon: SportsOutlineIcon,
    iconTarget: SportsFillIcon,
  },
];

export const categories4 = [
  {
    name: "Browse channels",
    link: "/feed/guide_builder",
    icon: Pulse,
    iconTarget: Pulse,
  },
];

export const categories5 = [
  {
    name: "YouTube Premium",
    link: "/premium",
    icon: YouTubeLogo,
    iconTarget: YouTubeLogo,
  },
  {
    name: "YouTube Music",
    link: "/youtubemusic",
    icon: YouTubeMusicIcon,
    iconTarget: YouTubeMusicIcon,
  },
  {
    name: "YouTube Kids",
    link: "/youtubekids",
    icon: YouTubeKidsIcon,
    iconTarget: YouTubeKidsIcon,
  },
];

export const categories6 = [
  {
    name: "Settings",
    link: "/settings",
    icon: SettingsIcon,
    iconTarget: SettingsIcon,
  },
  {
    name: "Report History",
    link: "/reporthistory",
    icon: FlagReportHistoryIcon,
    iconTarget: FlagReportHistoryIcon,
  },
  {
    name: "Help",
    link: "/",
    icon: HelpIcon,
    iconTarget: HelpIcon,
  },
  {
    name: "Send feedback",
    link: "/",
    icon: SendFeedbackIcon,
    iconTarget: SendFeedbackIcon,
  },
];
