import {
	HomeIcon,
	CameraIcon,
	VideoCameraIcon,
	PencilIcon,
	MicrophoneIcon,
	BriefcaseIcon,
	ShoppingCartIcon,
} from "@heroicons/react/outline";

// export const icons = [
// 	HomeIcon,
// 	VideoCameraIcon,
// 	CameraIcon,
// 	PencilIcon,
// 	MicrophoneIcon,
// 	BriefcaseIcon,
// 	ShoppingCartIcon,
// ];

import loadable from "@loadable/component";

// const HomeIcon = loadable(() => import("@heroicons/react/outline/HomeIcon"));

const Home = loadable(() => import("@heroicons/react/outline/HomeIcon"));
const Camera = loadable(() => import("@heroicons/react/outline/CameraIcon"));
const VideoCamera = loadable(() =>
	import("@heroicons/react/outline/VideoCameraIcon")
);
const Pencil = loadable(() => import("@heroicons/react/outline/PencilIcon"));
const Microphone = loadable(() =>
	import("@heroicons/react/outline/MicrophoneIcon")
);
const Briefcase = loadable(() =>
	import("@heroicons/react/outline/BriefcaseIcon")
);
const ShoppingCart = loadable(() =>
	import("@heroicons/react/outline/ShoppingCartIcon")
);

import { FaBars } from "react-icons/fa";

export default [
	{
		route: "/boogey/feed",
		// Icon: `${HomeIcon}`,
		// Icon: [Home],
		// Icon: FaBars,
		// Icon: JSON.stringify(Home),
		// Icon: Icon.Home,
		// Icon: { Home },
		// Icon: Home,
		// Icon: function () {
		// 	return [Home];
		// },
		title: "FEED",
	},
	{
		route: "/boogey/photos",
		// Icon: `${CameraIcon}`,
		// Icon: [Camera],
		// Icon: FaBars,
		// Icon: JSON.stringify(Camera),
		// Icon: Icon.Camera,
		// Icon: { Camera },
		// Icon: Camera,
		// Icon: function () {
		// 	return Camera;
		// },
		title: "PHOTOS",
	},
	{
		route: "/boogey/videos",
		// Icon: `${MicrophoneIcon}`,
		// Icon: [VideoCamera],
		// Icon: FaBars,
		// Icon: JSON.stringify(VideoCamera),
		// Icon: Icon.VideoCamera,
		// Icon: { Microphone },
		// Icon: Microphone,
		// Icon: function () {
		// 	return Microphone;
		// },
		title: "MUSIC",
	},
	{
		route: "/boogey/music",
		// Icon: `${VideoCameraIcon}`,
		// Icon: [Microphone],
		// Icon: FaBars,
		// Icon: JSON.stringify(Microphone),
		// Icon: Icon.Microphone,
		// Icon: { VideoCamera },
		// Icon: VideoCamera,
		// Icon: function () {
		// 	return VideoCamera;
		// },
		title: "VIDEOS",
	},
	{
		route: "/boogey/blog",
		// Icon: `${PencilIcon}`,
		// Icon: [Pencil],
		// Icon: FaBars,
		// Icon: JSON.stringify(Pencil),
		// Icon: Icon.Pencil,
		// Icon: { Pencil },
		// Icon: Pencil,
		// Icon: function () {
		// 	return Pencil;
		// },
		title: "BLOG",
	},
	{
		route: "/boogey/shop",
		// Icon: `${ShoppingCartIcon}`,
		// Icon: [ShoppingCart],
		// Icon: FaBars,
		// Icon: JSON.stringify(ShoppingCart),
		// Icon: Icon.ShoppingCart,
		// Icon: { ShoppingCart },
		// Icon: ShoppingCart,
		// Icon: function () {
		// 	return ShoppingCart;
		// },
		title: "SHOP",
	},
	{
		route: "/boogey/connect",
		// Icon: `${BriefcaseIcon}`,
		// Icon: [Briefcase],
		// Icon: FaBars,
		// Icon: JSON.stringify(Briefcase),
		// Icon: Icon.Briefcase,
		// Icon: { Briefcase },
		// Icon: Briefcase,
		// Icon: function () {
		// 	return Briefcase;
		// },
		title: "CONNECT",
	},
];
