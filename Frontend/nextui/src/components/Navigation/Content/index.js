import {
	HomeIcon,
	VideoCameraIcon,
	CameraIcon,
	PencilIcon,
	MicrophoneIcon,
	BriefcaseIcon,
	ShoppingCartIcon,
} from "@heroicons/react/outline";
import {
	ActualIcon,
	ContentBar,
	ContentContainer,
	ContentIcon,
	ContentIconContainer,
	ContentItemIcon,
	ContentItemProps,
	ContentItems,
	ContentItemTitle,
	ContentProperties,
	ContentRoute,
	ContentTitle,
	ContentTitleContainer,
	Icon,
	IconContainer,
	IconItem,
	Icons,
	IconShell,
	IconTestContainer,
	Properties,
	Shell,
	Title,
	Titles,
	TitleShell,
} from "./ContentElements";
import ContentButton from "./ContentButton";
import contentItems from "./index.data";
import sidebarItems from "../Introduction/index.data";
// import icons from "./index.data";
import { useRouter } from "next/router";
import {
	SidebarItem,
	SidebarLink,
	SidebarMenu,
} from "../Introduction/Sidebar/SidebarElements";
import loadable from "@loadable/component";
import { useState } from "react";

const Content = () => {
	const [propertyChange, setPropertyChange] = useState();
	const property = () => {
		setPropertyChange(!propertyChange);
	};

	// const contentIcons = [
	// 	{ Icon: HomeIcon },
	// 	{ Icon: CameraIcon },
	// 	{ Icon: VideoCameraIcon },
	// 	{ Icon: PencilIcon },
	// 	{ Icon: MicrophoneIcon },
	// 	{ Icon: ShoppingCartIcon },
	// 	{ Icon: BriefcaseIcon },
	// ];

	const Home = loadable(() => import("@heroicons/react/outline/HomeIcon"));
	const Camera = loadable(() =>
		import("@heroicons/react/outline/CameraIcon")
	);
	const VideoCamera = loadable(() =>
		import("@heroicons/react/outline/VideoCameraIcon")
	);
	const Pencil = loadable(() =>
		import("@heroicons/react/outline/PencilIcon")
	);
	const Microphone = loadable(() =>
		import("@heroicons/react/outline/MicrophoneIcon")
	);
	const Briefcase = loadable(() =>
		import("@heroicons/react/outline/BriefcaseIcon")
	);
	const ShoppingCart = loadable(() =>
		import("@heroicons/react/outline/ShoppingCartIcon")
	);

	const contentIcons = [
		Home,
		Camera,
		Microphone,
		VideoCamera,
		Pencil,
		ShoppingCart,
		Briefcase,
	];

	const router = useRouter();

	// const Icon = [];

	return (
		<>
			<ContentContainer>
				{/* <Properties>
					<IconContainer>
						{contentIcons.map((contentIcon, i) => {
							const Icon = contentIcons[i];
							return (
								<Icons key={i}>
									<Icon>{contentIcon.i}</Icon>
								</Icons>
							);
						})}
					</IconContainer>
					<TitleShell>
						{contentItems.map((contentItem, i) => (
							<Titles key={i}>
								<Title>{contentItem.title}</Title>
							</Titles>
						))}
					</TitleShell>
				</Properties> */}
				{/* <Properties>
					<IconContainer>
						{contentIcons.map((contentIcon, i) => {
							const Icon = contentIcons[i];
							return (
								<Icons key={i}>
									<Icon>{contentIcon.i}</Icon>
								</Icons>
							);
						})}
					</IconContainer>
					<TitleShell>
						{contentItems.map((contentItem, i) => (
							<Titles key={i}>
								<Title>{contentItem.title}</Title>
							</Titles>
						))}
					</TitleShell>
				</Properties> */}
				<ContentRoute onClick={() => router.push("/boogey/feed")}>
					<ContentButton title="FEED" Icon={Home} />
				</ContentRoute>
				<ContentRoute onClick={() => router.push("/boogey/photos")}>
					<ContentButton title="PHOTOS" Icon={Camera} />
				</ContentRoute>
				<ContentRoute onClick={() => router.push("/boogey/videos")}>
					<ContentButton title="VIDEOS" Icon={VideoCamera} />
				</ContentRoute>
				<ContentRoute onClick={() => router.push("/boogey/music")}>
					<ContentButton title="MUSIC" Icon={Microphone} />
				</ContentRoute>
				<ContentRoute onClick={() => router.push("/boogey/blog")}>
					<ContentButton title="BLOG" Icon={Pencil} />
				</ContentRoute>
				<ContentRoute onClick={() => router.push("/boogey/shop")}>
					<ContentButton title="SHOP" Icon={ShoppingCart} />
				</ContentRoute>
				<ContentRoute onClick={() => router.push("/contact")}>
					<ContentButton title="CONTACT" Icon={Briefcase} />
				</ContentRoute>
			</ContentContainer>
		</>
	);
};

export default Content;
