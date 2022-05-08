import styled from "styled-components";
import Image from "next/image";
// const photo1 = require("assets/images/JakeboogeyPhotos/jb_01.jpg");
// import image1 from "assets/images/JakeboogeyPhotos/jb_01.jpg";
// import image2 from "assets/images/JakeboogeyPhotos/jb_02.jpg";
// import image3 from "assets/images/JakeboogeyPhotos/jb_03.jpg";
// import image4 from "assets/images/JakeboogeyPhotos/jb_04.jpg";
// // import image5 from "assets/images/JakeboogeyPhotos/jb_01.jpg";
// // import image6 from "assets/images/JakeboogeyPhotos/jb_01.jpg";
// // import image7 from "assets/images/JakeboogeyPhotos/jb_01.jpg";
// // import image8 from "assets/images/JakeboogeyPhotos/jb_01.jpg";
// import image9 from "assets/images/JakeboogeyPhotos/jb_09.jpg";
// import image10 from "assets/images/JakeboogeyPhotos/jb_10.jpg";
// // import image11 from "assets/images/JakeboogeyPhotos/jb_01.jpg";
// import image12 from "assets/images/JakeboogeyPhotos/jb_12.jpg";
// import image13 from "assets/images/JakeboogeyPhotos/jb_13.jpg";
// import image14 from "assets/images/JakeboogeyPhotos/jb_14.jpg";
// // import image15 from "assets/images/JakeboogeyPhotos/jb_01.jpg";
// // import image16 from "assets/images/JakeboogeyPhotos/jb_01.jpg";
// // import image17 from "assets/images/JakeboogeyPhotos/jb_01.jpg";
// import image18 from "assets/images/JakeboogeyPhotos/jb_18.jpg";
// import image19 from "assets/images/JakeboogeyPhotos/jb_19.jpg";
// // import image20 from "assets/images/JakeboogeyPhotos/jb_01.jpg";
// // import image21 from "assets/images/JakeboogeyPhotos/jb_01.jpg";
// // import image22 from "assets/images/JakeboogeyPhotos/jb_01.jpg";
// // import image23 from "assets/images/JakeboogeyPhotos/jb_01.jpg";
// import image24 from "assets/images/JakeboogeyPhotos/jb_24.jpg";
// // import image25 from "assets/images/JakeboogeyPhotos/jb_01.jpg";
// import image26 from "assets/images/JakeboogeyPhotos/jb_26.jpg";
// // import image27 from "assets/images/JakeboogeyPhotos/jb_01.jpg";
// import image28 from "assets/images/JakeboogeyPhotos/jb_28.jpg";
// import image29 from "assets/images/JakeboogeyPhotos/jb_29.jpg";
// import image30 from "assets/images/JakeboogeyPhotos/jb_30.jpg";
// import image31 from "assets/images/JakeboogeyPhotos/jb_31.jpg";
// // import image32 from "assets/images/JakeboogeyPhotos/jb_01.jpg";
// import image33 from "assets/images/JakeboogeyPhotos/jb_33.jpg";
// import image34 from "assets/images/JakeboogeyPhotos/jb_34.jpg";
// import image35 from "assets/images/JakeboogeyPhotos/jb_35.png";
// import image36 from "assets/images/JakeboogeyPhotos/jb_36.jpg";
// import image37 from "assets/images/JakeboogeyPhotos/jb_37.jpg";
// import image38 from "assets/images/JakeboogeyPhotos/jb_38.jpg";
// import image39 from "assets/images/JakeboogeyPhotos/jb_39.jpg";
// import image40 from "assets/images/JakeboogeyPhotos/jb_40.jpg";
// import image43 from "assets/images/JakeboogeyPhotos/jb_43.png";
// import image44 from "assets/images/JakeboogeyPhotos/jb_44.jpg";
// // import image41 from "assets/images/JakeboogeyPhotos/jb_01.jpg";

export const ImagesContainer = styled.div`
	height: 100%;
	width: 100%;
	z-index: 1;
`;

export const ImagesGrid = styled.div`
	/* margin-top: 65px;
	margin-bottom: 65px; */
	display: grid;
	gap: 1rem;

	grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
	grid-auto-rows: 240px;

	padding: 35px;

	/* background: linear-gradient(
			180deg,
			rgba(63, 191, 63, 0.1) 0%,
			rgba(63, 191, 63, 0.5) 100%
		),
		linear-gradient(180deg, rgba(63, 191, 63, 0.1) 0%, transparent 100%);
	z-index: 2; */
`;

export const StyledImage = styled(Image)`
	/* height: 100%;
	width: 100%; */
	/* height: 100vh;
	width: 100vw; */
`;

export const StyledCard = styled(StyledImage)`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background: #353535;
	font-size: 3rem;
	color: #fff;
	box-shadow: rgba(3, 8, 20, 0.1) 0px 0.15rem 0.5rem,
		rgba(2, 8, 20, 0.1) 0px 0.075rem 0.175rem;
	height: 100%;
	width: 100%;
	border-radius: 4px;
	transition: all 500ms;
	overflow: hidden;

	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;

	&:hover {
		box-shadow: rgba(2, 8, 20, 0.1) 0px 0.35em 1.175em,
			rgba(2, 8, 20, 0.08) 0px 0.175em 0.5em;
		transform: translateY(-3px) scale(1.1);
	}
`;

export const Card = styled.div`
	/* background-image: url(${image1}); */

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	/* background: #353535; */
	font-size: 3rem;
	color: #fff;
	box-shadow: rgba(3, 8, 20, 0.1) 0px 0.15rem 0.5rem,
		rgba(2, 8, 20, 0.1) 0px 0.075rem 0.175rem;
	height: 100%;
	width: 100%;
	border-radius: 4px;
	transition: all 500ms;
	overflow: hidden;
	z-index: 3;

	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;

	&:hover {
		box-shadow: rgba(2, 8, 20, 0.1) 0px 0.35em 1.175em,
			rgba(2, 8, 20, 0.08) 0px 0.175em 0.5em;
		transform: translateY(-3px) scale(1.1);
	}
`;

export const TallCard = styled(Card)`
	@media screen and (min-width: 600px) {
		grid-row: span 2 / auto;
	}
`;

export const WideCard = styled(Card)`
	@media screen and (min-width: 600px) {
		grid-column: span 2 / auto;
	}
`;

export const TallWideCard = styled(WideCard)`
	@media screen and (min-width: 600px) {
		grid-row: span 2 / auto;
	}
`;

export const Image1 = styled(Card)`
	/* background-image: url("../../../assets/images/JakeboogeyPhotos/jb_01.jpg"); */
	background-image: url("https://firebasestorage.googleapis.com/v0/b/green-spot-productions.appspot.com/o/jb_01.jpg?alt=media&token=c2877e88-d9ce-4dd2-8491-5ecfa91fcac0");
`;

// export const Image1 = styled(Card)`
// 	background-image: url(${image1});
// `;

export const Image2 = styled(WideCard)`
	/* background-image: url("../../../assets/images/JakeboogeyPhotos/jb_02.jpg"); */
	background-image: url("https://firebasestorage.googleapis.com/v0/b/green-spot-productions.appspot.com/o/jb_02.jpg?alt=media&token=9bfeb506-9e19-4353-bacc-90cb292e1a5f");
`;

export const Image3 = styled(TallWideCard)`
	/* background-image: url("../../../assets/images/JakeboogeyPhotos/jb_03.jpg"); */
	background-image: url("https://firebasestorage.googleapis.com/v0/b/green-spot-productions.appspot.com/o/jb_03.jpg?alt=media&token=f20819d5-669d-40e5-971a-77c87c4dd85a");
`;

export const Image4 = styled(WideCard)`
	/* background-image: url("../../../assets/images/JakeboogeyPhotos/jb_04.jpg"); */
	background-image: url("https://firebasestorage.googleapis.com/v0/b/green-spot-productions.appspot.com/o/jb_04.jpg?alt=media&token=d593488e-e561-4bde-b810-697771d0d78b");
`;

export const Image5 = styled(Card)`
	/* background-image: url("../../../assets/images/JakeboogeyPhotos/jb_05.jpg"); */
	background-image: url("https://firebasestorage.googleapis.com/v0/b/green-spot-productions.appspot.com/o/jb_05.jpg?alt=media&token=ed91849d-0ea2-4ad2-b335-391fb51feb81");
`;

export const Image6 = styled(WideCard)`
	/* background-image: url("../../../assets/images/JakeboogeyPhotos/jb_06.jpg"); */
	background-image: url("https://firebasestorage.googleapis.com/v0/b/green-spot-productions.appspot.com/o/jb_06.jpg?alt=media&token=90c30192-fe34-42fb-a35c-c3d96502523c");
`;

export const Image7 = styled(WideCard)`
	/* background-image: url("../../../assets/images/JakeboogeyPhotos/jb_07.jpg"); */
	background-image: url("https://firebasestorage.googleapis.com/v0/b/green-spot-productions.appspot.com/o/jb_07.jpg?alt=media&token=4126dce1-8c95-41a0-8fc5-72e9e8f032a4");
`;

// export const Photo8 = styled(Card)`
// 	background-image: url("../../../../assets/images/JakeboogeyPhotos/jb_08.jpg");
// `;

export const Image9 = styled(TallCard)`
	/* background-image: url("../../../assets/images/JakeboogeyPhotos/jb_09.jpg"); */
	background-image: url("https://firebasestorage.googleapis.com/v0/b/green-spot-productions.appspot.com/o/jb_09.jpg?alt=media&token=3a9696ba-0688-485e-9625-626c336e2344");
`;

export const Image10 = styled(TallWideCard)`
	/* background-image: url("../../../assets/images/JakeboogeyPhotos/jb_10.jpg"); */
	background-image: url("https://firebasestorage.googleapis.com/v0/b/green-spot-productions.appspot.com/o/jb_10.jpg?alt=media&token=31872bc0-575c-4c56-b517-23cc2a84c649");
`;

export const Image11 = styled(Card)`
	/* background-image: url("../../../assets/images/JakeboogeyPhotos/jb_11.jpg"); */
	background-image: url("https://firebasestorage.googleapis.com/v0/b/green-spot-productions.appspot.com/o/jb_11.jpg?alt=media&token=ce2c987d-f6db-4c9e-92be-f5a4af5e6b19");
`;

export const Image12 = styled(Card)`
	/* background-image: url("../../../assets/images/JakeboogeyPhotos/jb_12.jpg"); */
	background-image: url("https://firebasestorage.googleapis.com/v0/b/green-spot-productions.appspot.com/o/jb_12.jpg?alt=media&token=f720244b-6c84-4842-a719-ed79f81a0f1a");
`;

export const Image13 = styled(Card)`
	/* background-image: url("../../../assets/images/JakeboogeyPhotos/jb_13.jpg"); */
	background-image: url("https://firebasestorage.googleapis.com/v0/b/green-spot-productions.appspot.com/o/jb_13.jpg?alt=media&token=ebe9e81d-0d8c-4ab7-896a-d99d34a3d00f");
`;

export const Image14 = styled(Card)`
	/* background-image: url("../../../assets/images/JakeboogeyPhotos/jb_14.jpg"); */
	background-image: url("https://firebasestorage.googleapis.com/v0/b/green-spot-productions.appspot.com/o/jb_14.jpg?alt=media&token=31163fb9-78ad-428f-a7b8-b84add15371e");
`;

export const Image15 = styled(WideCard)`
	/* background-image: url("../../../assets/images/JakeboogeyPhotos/jb_15.jpg"); */
	background-image: url("https://firebasestorage.googleapis.com/v0/b/green-spot-productions.appspot.com/o/jb_15.jpg?alt=media&token=9e9fa3a7-c711-405f-8e82-6490004ddc91");
`;

export const Image16 = styled(WideCard)`
	/* background-image: url("../../../assets/images/JakeboogeyPhotos/jb_16.jpg"); */
	background-image: url("https://firebasestorage.googleapis.com/v0/b/green-spot-productions.appspot.com/o/jb_16.jpg?alt=media&token=9b0af7e0-884f-48b4-b090-a0914430b7fa");
`;

export const Image17 = styled(WideCard)`
	/* background-image: url("../../../assets/images/JakeboogeyPhotos/jb_17.jpg"); */
	background-image: url("https://firebasestorage.googleapis.com/v0/b/green-spot-productions.appspot.com/o/jb_17.jpg?alt=media&token=a8e61680-e01b-441a-95f4-02bbc34e8511");
`;

export const Image18 = styled(WideCard)`
	/* background-image: url("../../../assets/images/JakeboogeyPhotos/jb_18.jpg"); */
	background-image: url("https://firebasestorage.googleapis.com/v0/b/green-spot-productions.appspot.com/o/jb_18.jpg?alt=media&token=c368c787-a363-4a37-8582-e750f5fa8bf1");
`;

export const Image19 = styled(Card)`
	/* background-image: url("../../../assets/images/JakeboogeyPhotos/jb_19.jpg"); */
	background-image: url("https://firebasestorage.googleapis.com/v0/b/green-spot-productions.appspot.com/o/jb_19.jpg?alt=media&token=419291ea-a9d3-4c52-9dc7-f59e4d7405ac");
`;

export const Image20 = styled(Card)`
	/* background-image: url("../../../assets/images/JakeboogeyPhotos/jb_20.jpg"); */
	background-image: url("https://firebasestorage.googleapis.com/v0/b/green-spot-productions.appspot.com/o/jb_20.jpg?alt=media&token=419f5cc2-c033-4608-bc6b-27b6dc87591e");
`;

// export const Photo21 = styled(Card)`
// 	background-image: url("../../../../assets/images/JakeboogeyPhotos/jb_21.jpg");
// `;

export const Image22 = styled(WideCard)`
	/* background-image: url("../../../assets/images/JakeboogeyPhotos/jb_22.jpg"); */
	background-image: url("https://firebasestorage.googleapis.com/v0/b/green-spot-productions.appspot.com/o/jb_22.jpg?alt=media&token=75bcb88a-1ba7-4510-b142-1751607ef3f0");
`;

export const Image23 = styled(Card)`
	/* background-image: url("../../../assets/images/JakeboogeyPhotos/jb_23.jpg"); */
	background-image: url("https://firebasestorage.googleapis.com/v0/b/green-spot-productions.appspot.com/o/jb_23.jpg?alt=media&token=1d4cec09-68a1-44a4-95e7-0f2709236b04");
`;

export const Image24 = styled(Card)`
	/* background-image: url("../../../assets/images/JakeboogeyPhotos/jb_24.jpg"); */
	background-image: url("https://firebasestorage.googleapis.com/v0/b/green-spot-productions.appspot.com/o/jb_24.jpg?alt=media&token=81d6a78d-0f30-4ac7-b430-e8010bc8cfce");
`;

export const Image25 = styled(WideCard)`
	/* background-image: url("../../../assets/images/JakeboogeyPhotos/jb_25.png"); */
	background-image: url("https://firebasestorage.googleapis.com/v0/b/green-spot-productions.appspot.com/o/jb_26.jpg?alt=media&token=50143406-1319-4ad2-b2e6-c177ce08a9b8");
`;

export const Image26 = styled(Card)`
	/* background-image: url("../../../assets/images/JakeboogeyPhotos/jb_26.jpg"); */
	background-image: url("https://firebasestorage.googleapis.com/v0/b/green-spot-productions.appspot.com/o/jb_26.jpg?alt=media&token=50143406-1319-4ad2-b2e6-c177ce08a9b8");
`;

// export const Photo27 = styled(Card)`
// 	background-image: url("../../../../assets/images/JakeboogeyPhotos/jb_27.jpg");
// `;

export const Image28 = styled(TallCard)`
	/* background-image: url("../../../assets/images/JakeboogeyPhotos/jb_28.jpg"); */
	background-image: url("https://firebasestorage.googleapis.com/v0/b/green-spot-productions.appspot.com/o/jb_28.jpg?alt=media&token=ddd9c398-d38c-40ce-aabb-115c892fe46b");
`;

export const Image29 = styled(TallWideCard)`
	/* background-image: url("../../../assets/images/JakeboogeyPhotos/jb_29.jpg"); */
	background-image: url("https://firebasestorage.googleapis.com/v0/b/green-spot-productions.appspot.com/o/jb_29.jpg?alt=media&token=1a7c4589-5822-4c0e-964e-5cecd815c759");
`;

export const Image30 = styled(WideCard)`
	/* background-image: url("../../../assets/images/JakeboogeyPhotos/jb_30.jpg"); */
	background-image: url("https://firebasestorage.googleapis.com/v0/b/green-spot-productions.appspot.com/o/jb_30.jpg?alt=media&token=e594815c-a3c2-4edb-b761-5f2a37dd05f3");
`;

export const Image31 = styled(WideCard)`
	/* background-image: url("../../../assets/images/JakeboogeyPhotos/jb_31.jpg"); */
	background-image: url("https://firebasestorage.googleapis.com/v0/b/green-spot-productions.appspot.com/o/jb_31.jpg?alt=media&token=b6d58572-f1e4-4585-b641-2350d40c33e9");
`;

// export const Photo32 = styled(Card)`
// 	background-image: url("../../../../assets/images/JakeboogeyPhotos/jb_32.jpg");
// `;

export const Image33 = styled(TallWideCard)`
	/* background-image: url("../../../assets/images/JakeboogeyPhotos/jb_33.jpg"); */
	background-image: url("https://firebasestorage.googleapis.com/v0/b/green-spot-productions.appspot.com/o/jb_33.jpg?alt=media&token=90035518-66cc-4501-9609-7fbc1a5e27ca");
`;

export const Image34 = styled(WideCard)`
	/* background-image: url("../../../assets/images/JakeboogeyPhotos/jb_34.jpg"); */
	background-image: url("https://firebasestorage.googleapis.com/v0/b/green-spot-productions.appspot.com/o/jb_34.jpg?alt=media&token=3177b73d-d7cb-43ee-8fea-4546cccd7a9f");
`;

export const Image35 = styled(Card)`
	/* background-image: url("../../../assets/images/JakeboogeyPhotos/jb_35.png"); */
	background-image: url("https://firebasestorage.googleapis.com/v0/b/green-spot-productions.appspot.com/o/jb_35.png?alt=media&token=ae297e65-9d99-4a7b-a827-bcd3e76fda51");
`;

export const Image36 = styled(WideCard)`
	/* background-image: url("../../../assets/images/JakeboogeyPhotos/jb_36.jpg"); */
	background-image: url("https://firebasestorage.googleapis.com/v0/b/green-spot-productions.appspot.com/o/jb_36.jpg?alt=media&token=d0995b4e-0f88-4989-a3b3-3b60b51b59e2");
`;

export const Image37 = styled(Card)`
	/* background-image: url("../../../assets/images/JakeboogeyPhotos/jb_37.jpg"); */
	background-image: url("https://firebasestorage.googleapis.com/v0/b/green-spot-productions.appspot.com/o/jb_37.jpg?alt=media&token=9b30f057-110d-4ae2-aab5-4f1fc8f60300");
`;

export const Image38 = styled(Card)`
	/* background-image: url("../../../assets/images/JakeboogeyPhotos/jb_38.jpg"); */
	background-image: url("https://firebasestorage.googleapis.com/v0/b/green-spot-productions.appspot.com/o/jb_38.jpg?alt=media&token=a4319bb9-2465-4489-ac16-f43b4287eef8");
`;

export const Image39 = styled(TallWideCard)`
	/* background-image: url("../../../assets/images/JakeboogeyPhotos/jb_39.jpg"); */
	background-image: url("https://firebasestorage.googleapis.com/v0/b/green-spot-productions.appspot.com/o/jb_39.jpg?alt=media&token=dc91ae65-1a1d-405f-9801-fbd68b2fd363");
`;

export const Image40 = styled(TallWideCard)`
	/* background-image: url("../../../assets/images/JakeboogeyPhotos/jb_40.jpg"); */
	background-image: url("https://firebasestorage.googleapis.com/v0/b/green-spot-productions.appspot.com/o/jb_40.jpg?alt=media&token=409e108e-b517-4948-a212-243a18264936");
`;

export const Image41 = styled(TallWideCard)`
	/* background-image: url("../../../assets/images/JakeboogeyPhotos/jb_41.jpg"); */
	background-image: url("https://firebasestorage.googleapis.com/v0/b/green-spot-productions.appspot.com/o/jb_41.jpg?alt=media&token=101741bb-fbda-4e6f-9078-a1552c5b2bc6");
`;

export const Image42 = styled(WideCard)`
	/* background-image: url("../../../assets/images/JakeboogeyPhotos/jb_42.jpg"); */
	background-image: url("https://firebasestorage.googleapis.com/v0/b/green-spot-productions.appspot.com/o/jb_42.jpg?alt=media&token=b7d4e33a-6131-408e-943e-ca5700d7c4c6");
`;

export const Image43 = styled(TallCard)`
	/* background-image: url("../../../assets/images/JakeboogeyPhotos/jb_43.png"); */
	background-image: url("https://firebasestorage.googleapis.com/v0/b/green-spot-productions.appspot.com/o/jb_43.png?alt=media&token=4e7ed203-0380-465d-8649-01f81e607531");
`;

export const Image44 = styled(WideCard)`
	/* background-image: url("../../../assets/images/JakeboogeyPhotos/jb_44.jpg"); */
	background-image: url("https://firebasestorage.googleapis.com/v0/b/green-spot-productions.appspot.com/o/jb_44.jpg?alt=media&token=954bbe88-5ec6-4431-af98-76ee1c86124a");
`;

// export const Images1 = styled(Card)`
// 	background-image: url(${image1});
// `;

// export const Images2 = styled(WideCard)`
// 	background-image: url(${image2});
// `;

// export const Images3 = styled(TallWideCard)`
// 	background-image: url(${image3});
// `;

// export const Images4 = styled(WideCard)`
// 	background-image: url(${image4});
// `;

// export const Images9 = styled(TallCard)`
// 	background-image: url(${image9});
// `;

// export const Images10 = styled(TallWideCard)`
// 	background-image: url(${image10});
// `;

// export const Images12 = styled(Card)`
// 	background-image: url(${image12});
// `;

// export const Images13 = styled(Card)`
// 	background-image: url(${image13});
// `;

// export const Images14 = styled(Card)`
// 	background-image: url(${image14});
// `;

// export const Images18 = styled(WideCard)`
// 	background-image: url(${image18});
// `;

// export const Images19 = styled(Card)`
// 	background-image: url(${image19});
// `;

// export const Images24 = styled(Card)`
// 	background-image: url(${image24});
// `;

// export const Images26 = styled(Card)`
// 	background-image: url(${image26});
// `;

// export const Images28 = styled(TallCard)`
// 	background-image: url(${image28});
// `;

// export const Images29 = styled(TallWideCard)`
// 	background-image: url(${image29});
// `;

// export const Images30 = styled(WideCard)`
// 	background-image: url(${image30});
// `;

// export const Images31 = styled(WideCard)`
// 	background-image: url(${image31});
// `;

// export const Images33 = styled(TallWideCard)`
// 	background-image: url(${image33});
// `;

// export const Images34 = styled(WideCard)`
// 	background-image: url(${image34});
// `;

// export const Images35 = styled(Card)`
// 	background-image: url(${image35});
// `;

// export const Images36 = styled(WideCard)`
// 	background-image: url(${image36});
// `;

// export const Images37 = styled(Card)`
// 	background-image: url(${image37});
// `;

// // export const Images1 = styled(Card)`
// // 	background-image: url(${image1});
// // `;

// export const Images38 = styled(Card)`
// 	background-image: url(${image38});
// `;

// export const Images39 = styled(TallWideCard)`
// 	background-image: url(${image39});
// `;

// export const Images40 = styled(TallWideCard)`
// 	background-image: url(${image40});
// `;

// export const Images43 = styled(TallCard)`
// 	background-image: url(${image43});
// `;

// export const Images44 = styled(WideCard)`
// 	background-image: url(${image44});
// `;
