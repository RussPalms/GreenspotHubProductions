// import { Button } from "../../ButtonElements";
import {
	InfoWrapper,
	InfoRow,
	Column1,
	Column2,
	TextWrapper,
	TopLine,
	Heading,
	Subtitle,
	BtnWrap,
	ImgWrap,
	Img,
	PlatformContainer,
} from "./PlatformElements";
import Link from "next/link";
import { Button } from "components/Navigation/ButtonElements";
import { animateScroll as scroll } from "react-scroll";

const Platform = ({
	lightBg,
	id,
	imgStart,
	topLine,
	lightText,
	headline,
	darkText,
	description,
	buttonLabel,
	img,
	alt,
	primary,
	dark,
	dark2,
}) => {
	const toggleHome = () => {
		scroll.scrollToTop();
	};

	return (
		<>
			<PlatformContainer lightBg={lightBg}>
				<InfoWrapper>
					<InfoRow imgStart={imgStart}>
						<Column1>
							<TextWrapper>
								<TopLine>{topLine}</TopLine>
								<Heading lightText={lightText}>
									{headline}
								</Heading>
								<Subtitle darkText={darkText}>
									{description}
								</Subtitle>
								<BtnWrap>
									<Link href="/" passHref>
										<Button
											to="hero"
											smooth={true}
											duration={500}
											spy={true}
											exact="true"
											offset={-65}
											primary={primary ? 1 : 0}
											dark={dark ? 1 : 0}
											dark2={dark2 ? 1 : 0}
											// onClick={
											// 	"document.getElementById('hero').scrollIntoView()"
											// }
										>
											{buttonLabel}
										</Button>
										{/* <button onClick={toggleHome}>click</button> */}
									</Link>
								</BtnWrap>
							</TextWrapper>
						</Column1>
						<Column2>
							<ImgWrap>
								<Img width='500px' height='300px' src={img} alt={alt} />
							</ImgWrap>
						</Column2>
					</InfoRow>
				</InfoWrapper>
			</PlatformContainer>
		</>
	);
};

export default Platform;
