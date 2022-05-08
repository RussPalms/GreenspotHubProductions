import { InformationContainer, PlatformSection } from "./InformationElements";
import Platform from "./Platform";
import { About, Access, Discover } from "./Platform/index.data";

const Information = ({ informationReference }) => {
	return (
		<>
			<InformationContainer id="information" ref={informationReference}>
				<PlatformSection>
					<Platform {...About} />
					<Platform {...Discover} />
					<Platform {...Access} />
				</PlatformSection>
				{/* <Platform {...About} /> */}
			</InformationContainer>
		</>
	);
};

export default Information;
