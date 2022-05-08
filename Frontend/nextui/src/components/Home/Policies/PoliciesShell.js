import {
	DescriptionWrapper,
	Policy,
	PolicyDescription,
	PolicyGraphic,
} from "./PoliciesElements";

const PoliciesShell = ({ Graphic, description }) => {
	return (
		<>
			<Policy>
				<PolicyGraphic>
					<Graphic />
				</PolicyGraphic>
				<DescriptionWrapper>
					<PolicyDescription>{description}</PolicyDescription>
				</DescriptionWrapper>
			</Policy>
		</>
	);
};

export default PoliciesShell;
