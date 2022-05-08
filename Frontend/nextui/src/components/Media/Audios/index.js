import headchange from "assets/audios/Headchange/HeadchangeSong.mp3";
import { AudiosWrapper } from "./AudiosElements";
import AudiosPlayer from "./AudiosPlayer";
import dynamic from "next/dynamic";

const Audios = () => {
	// const song = require("../../../assets/audios/Headchange/HeadchangeSong.mp3");
	const song =
		"https://firebasestorage.googleapis.com/v0/b/green-spot-productions.appspot.com/o/GrandDisplaySong.mp3?alt=media&token=f1d82a54-cc59-4d85-9f04-048eebeaf48d";
	// const [hasMounted, setHasMounted] = useState(false);
	// useEffect(() => {
	// 	setHasMounted(true);
	// }, []);
	// if (!hasMounted) {
	// 	return null;
	// }

	// const DynamicComponentWithNoSSR = dynamic(() => import("./AudiosPlayer"), {
	// 	ssr: false,
	// });

	return (
		<>
			<AudiosWrapper>
				<AudiosPlayer song={song} />
			</AudiosWrapper>
		</>
	);
};

export default Audios;
