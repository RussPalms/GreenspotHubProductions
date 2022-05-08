import { PoliciesContainer } from "./PoliciesElements";
import Deposit from "./Deposit";
import TwoHours from "./TwoHours";
import Management from "./Management";
import MomAndDad from "./MomAndDad";
import NoSmoking from "./NoSmoking";
import Drinks from "./Drinks";
import PoliciesShell from "./PoliciesShell";

const Policies = ({ policiesReference }) => {
	return (
		<>
			<PoliciesContainer ref={policiesReference}>
				{/* <Deposit />
				<Management />
				<MomAndDad />
				<NoSmoking />
                <Drinks />
				<TwoHours /> */}
				<PoliciesShell
					Graphic={Deposit}
					description="A DEPOSIT OF 50% DOWN IS REQUIRED TO START!"
				/>
				<PoliciesShell
					Graphic={Management}
					description="NO GUESTS W/THE EXCEPTION OF MANAGEMENT UPON  BEING GIVEN CONSENT!"
				/>
				<PoliciesShell
					Graphic={MomAndDad}
					description="MOM AND DAD ARE ALLOWED W/OUT PERMISSION"
				/>
				<PoliciesShell
					Graphic={Drinks}
					description="NO DRINKS IN THE STUDIO UNLESS THEY HAVE A CAP!"
				/>
				<PoliciesShell
					Graphic={TwoHours}
					description="2 HOUR MINIMUM REQUIRED "
				/>
				<PoliciesShell
					Graphic={NoSmoking}
					description="NO SMOKING IN OR AROUND STUDIO"
				/>
			</PoliciesContainer>
		</>
	);
};

export default Policies;
