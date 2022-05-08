import Link from "next/link";
import sidebarItems from "../index.data";
import {
	CloseIcon,
	MobileClose,
	SidebarContainer,
	SidebarItem,
	SidebarLink,
	SidebarMenu,
	SidebarRoute,
	SidebarWrapper,
	SideBtnWrap,
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggle }) => {
	return (
		<>
			<SidebarContainer isOpen={isOpen} onClick={toggle}>
				<MobileClose onClick={toggle}>
					<CloseIcon />
				</MobileClose>
				<SidebarWrapper>
					<SidebarMenu>
						{sidebarItems.map((sidebarItem, i) => (
							<SidebarLink
								to={sidebarItem.path}
								onClick={toggle}
								key={i}
							>
								<SidebarItem>{sidebarItem.label}</SidebarItem>
							</SidebarLink>
						))}
					</SidebarMenu>
					<SideBtnWrap>
						<Link href="/signin" passHref>
							<SidebarRoute>Sign In</SidebarRoute>
						</Link>
					</SideBtnWrap>
				</SidebarWrapper>
			</SidebarContainer>
		</>
	);
};

export default Sidebar;
