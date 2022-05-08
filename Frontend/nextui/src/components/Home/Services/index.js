import Description from "./Description";
import { DescriptionSection, ServicesContainer } from "./ServicesElements";

const Services = ({ servicesReference }) => {
	return (
		<>
			<ServicesContainer id="services" ref={servicesReference}>
				<DescriptionSection>
					<Description />
				</DescriptionSection>
			</ServicesContainer>
		</>
	);
};

export default Services;
