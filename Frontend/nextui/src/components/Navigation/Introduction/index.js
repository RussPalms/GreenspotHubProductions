import {
	ButtonShell,
	ButtonTag,
	GreenHubProductionsLogo,
	IntroductionContainer,
	IntroductionLink,
	IntroductionShell,
	LinkItem,
	LinkMenu,
	LinkShell,
	LogoShell,
	MenuIcon,
	MobileMenu,
	SigninButton,
} from "./IntroductionElements";
// import introductionItems from "./index.data";
import Link from "next/link";
import { animateScroll as scroll } from "react-scroll";
import { compose, withState, withHandlers } from "recompose";
import React, { createFactory, createElement } from "react";

export const enhancer = compose(
	withState("selectedTabId", "setSelectedTabId", 0),
	withHandlers({
		isActive: (props) => (id) => {
			return props.selectedTabId === id;
		},
		setActiveTab: (props) => (id) => {
			props.setSelectedTabId(id);
		},
	})
);

export const Tab = (props) => {
	return (
		<IntroductionLink
			isActive={props.isActive}
			onClick={props.onActiveTab}
			onMouseDown={props.changeDirectory}
		>
			{props.content}
		</IntroductionLink>
	);
};

export const Tabs = enhancer((props) => {
	return (
		<LinkMenu>
			{props.introductionItems.map((introductionItem, i) => {
				return (
					<Tab
						key={i}
						content={introductionItem.label}
						isActive={props.isActive(introductionItem.id)}
						onActiveTab={() =>
							props.setActiveTab(introductionItem.id)
						}
						// onClick={introductionItem.reference}
						changeDirectory={introductionItem.reference}
					/>
				);
			})}
		</LinkMenu>
	);
});

const Introduction = ({
	toggle,
	pointer,
	handleInformationDirect,
	handleServicesDirect,
	handlePoliciesDirect,
	handleTestimonialsDirect,
}) => {
	const introductionItems = [
		{
			id: 1,
			path: "information",
			label: "Information",
			reference: handleInformationDirect,
		},
		{
			id: 2,
			path: "services",
			label: "Services",
			reference: handleServicesDirect,
		},
		{
			id: 3,
			path: "policies",
			label: "Policies",
			reference: handlePoliciesDirect,
		},
		// {
		// 	path: "team",
		// 	label: "Team",
		// },
		{
			id: 4,
			path: "testimonials",
			label: "Testimonials",
			reference: handleTestimonialsDirect,
		},
	];

	// const enhancer = compose(
	// 	withState("selectedTabId", "setSelectedTabId", 0),
	// 	withHandlers({
	// 		isActive: (props) => (id) => {
	// 			return props.selectedTabId === id;
	// 		},
	// 		setActiveTab: (props) => (id) => {
	// 			props.setSelectedTabId(id);
	// 		},
	// 	})
	// );

	// const Tab = (props) => {
	// 	return (
	// 		<IntroductionLink
	// 			isActive={props.isActive}
	// 			onClick={props.onActiveTab}
	// 			onMouseDown={props.changeDirectory}
	// 		>
	// 			{props.content}
	// 		</IntroductionLink>
	// 	);
	// };

	// const Tabs = enhancer((props) => {
	// 	return (
	// 		<LinkMenu>
	// 			{props.introductionItems.map((introductionItem, i) => {
	// 				return (
	// 					<Tab
	// 						key={i}
	// 						content={introductionItem.label}
	// 						isActive={props.isActive(introductionItem.id)}
	// 						onActiveTab={() =>
	// 							props.setActiveTab(introductionItem.id)
	// 						}
	// 						// onClick={introductionItem.reference}
	// 						changeDirectory={introductionItem.reference}
	// 					/>
	// 				);
	// 			})}
	// 		</LinkMenu>
	// 	);
	// });

	const toggleHome = () => {
		scroll.scrollToTop();
	};

	return (
		<>
			<IntroductionContainer>
				<Link href="/" passHref>
					<LogoShell>
						<GreenHubProductionsLogo
							onClick={toggleHome}
							onMouseEnter={pointer}
							onMouseLeave={pointer}
						>
							Green Spot Productions
						</GreenHubProductionsLogo>
					</LogoShell>
				</Link>
				<MobileMenu onClick={toggle}>
					<MenuIcon />
				</MobileMenu>
				{/* <LinkMenu>
					{introductionItems.map((introductionItem, i) => (
						<IntroductionLink
							activeClass="active"
							to={introductionItem.path}
							spy={true}
							smooth={true}
							key={i}
							duration={500}
							exact="true"
							onClick={introductionItem.reference}
						>
							{introductionItem.label}
						</IntroductionLink>
					))}
				</LinkMenu> */}
				<Tabs introductionItems={introductionItems} />
				<ButtonShell>
					<Link href="/signin" passHref>
						<SigninButton>
							<ButtonTag>Sign In</ButtonTag>
						</SigninButton>
					</Link>
				</ButtonShell>
			</IntroductionContainer>
		</>
	);
};

export default Introduction;

// import { FaBars } from "react-icons/fa";
// import { IconContext } from "react-icons/lib";
// import { animateScroll as scroll } from "react-scroll";
// import {
// 	Nav,
// 	NavbarContainer,
// 	NavLogo,
// 	MobileIcon,
// 	NavMenu,
// 	NavItem,
// 	NavLinks,
// 	NavBtn,
// 	NavBtnLink,
// 	MenuIcon,
// } from "./IntroductionElements";
// import { useState, useEffect } from "react";
// import Link from "next/link";

// const Navbar = ({ pointer, toggle }) => {
// 	const [scrollNav, setScrollNav] = useState(false);

// 	const changeNav = () => {
// 		if (window.scrollY >= 80) {
// 			setScrollNav(true);
// 		} else {
// 			setScrollNav(false);
// 		}
// 	};

// 	useEffect(() => {
// 		window.addEventListener("scroll", changeNav);
// 	}, []);

// 	const toggleHome = () => {
// 		scroll.scrollToTop();
// 	};

// 	return (
// 		<>
// 			<Nav scrollNav={scrollNav}>
// 				<NavbarContainer>
// 					<Link href="/" passHref>
// 						<NavLogo
// 							onMouseEnter={pointer}
// 							onMouseLeave={pointer}
// 							onClick={toggleHome}
// 						>
// 							Green Spot Productions
// 						</NavLogo>
// 					</Link>
// 					<MobileIcon
// 						onMouseEnter={pointer}
// 						onMouseLeave={pointer}
// 						onClick={toggle}
// 					>
// 						<MenuIcon />
// 					</MobileIcon>
// 					<NavMenu onMouseEnter={pointer} onMouseLeave={pointer}>
// 						<NavItem>
// 							<NavLinks
// 								to="about"
// 								smooth={true}
// 								duration={500}
// 								spy={true}
// 								exact="true"
// 							>
// 								About
// 							</NavLinks>
// 						</NavItem>
// 						<NavItem>
// 							<NavLinks
// 								to="discover"
// 								smooth={true}
// 								duration={500}
// 								spy={true}
// 								exact="true"
// 							>
// 								Discover
// 							</NavLinks>
// 						</NavItem>
// 						<NavItem>
// 							<NavLinks
// 								to="services"
// 								smooth={true}
// 								duration={500}
// 								spy={true}
// 								exact="true"
// 							>
// 								Services
// 							</NavLinks>
// 						</NavItem>
// 						<NavItem>
// 							<NavLinks
// 								to="access"
// 								smooth={true}
// 								duration={500}
// 								spy={true}
// 								exact="true"
// 							>
// 								Access
// 							</NavLinks>
// 						</NavItem>
// 					</NavMenu>
// 					<NavBtn>
// 						<Link href="/signin" passHref>
// 							<NavBtnLink
// 								onMouseEnter={pointer}
// 								onMouseLeave={pointer}
// 							>
// 								Sign In
// 							</NavBtnLink>
// 						</Link>
// 					</NavBtn>
// 				</NavbarContainer>
// 			</Nav>
// 		</>
// 	);
// };

// export default Navbar;
