import { ButtonProperties, IconProperties, TitleProperties } from "./ContentElements";
import contentItems from "./index.data";

const ContentButton = ({ route, Icon, title }) => {
	// const contentIcons = [
	// 	HomeIcon,
	// 	CameraIcon,
	// 	VideoCameraIcon,
	// 	PencilIcon,
	// 	MicrophoneIcon,
	// 	ShoppingCartIcon,
	// 	BriefcaseIcon,
	// ];

	return (
		<>
			<ButtonProperties route={route}>
				<IconProperties>
					<Icon />
				</IconProperties>
				<TitleProperties>{title}</TitleProperties>
				{/* {contentItems.map((contentItem, i) => (
					<ContentItemTitle key={i} title={contentItem.title}>
						{contentItem.title}
					</ContentItemTitle>
				))} */}
			</ButtonProperties>

			{/* <ContentItemProps>
						<ContentIconContainer>
							{contentIcons.map((contentIcon, idx) => {
								const Icon = contentIcons[idx];
								return (
									<ContentItemIcon>
										<Icon key={contentIcon.id} />
									</ContentItemIcon>
								);
							})}
						</ContentIconContainer>
						<ContentTitleContainer>
							{contentItems.map((contentItem, i) => (
								<ContentItemTitle key={i}>
									{contentItem.title}
								</ContentItemTitle>
							))}
						</ContentTitleContainer>
					</ContentItemProps>
					<br /> */}

			{/* <ContentItemProps>
						{contentItems.map((contentItem, idx) => {
							const Icon = contentItem[idx];
							return (
								<ContentItemIcon>
									<Icon value={contentItem.id} />
								</ContentItemIcon>
							);
						})}
						{contentItems.map((contentItem, i) => (
							<ContentItemTitle key={i}>
								{contentItem.title}
							</ContentItemTitle>
						))}
					</ContentItemProps> */}
		</>
	);
};

export default ContentButton;
