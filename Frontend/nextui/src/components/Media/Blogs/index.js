import {
	BackdropVideo,
	BlogBody,
	BlogContainer,
	BlogContent,
	BlogPost,
	BlogShell,
	BlogTitle,
	BlogWrapper,
	ContentWrapper,
	PostBackdrop,
	PostWrapper,
} from "./BlogElements";
import { blogPosts } from "./index.data";

const Blog = () => {
	return (
		<>
			<BlogContainer>
				{/* <BlogWrapper> */}
				{/* {blogPosts.map((blogPost, id) => {
					return (
						<BlogPost key={id}>
							<PostBackdrop key={id}>
								<BackdropVideo
									key={id}
									autoPlay
									loop
									type="video/mp4"
									mute
									src={blogPost.vid}
									alt="Blog Video"
								/>
							</PostBackdrop>
							<BlogContent key={id}>
								<BlogTitle key={id}>{blogPost.title}</BlogTitle>
								<BlogBody key={id}>{blogPost.body}</BlogBody>
							</BlogContent>
						</BlogPost>
					);
				})} */}
				{/* <BlogShell> */}

				{blogPosts.map((blogPost, id) => {
					return (
						<PostWrapper key={id}>
							<PostBackdrop key={id}>
								<BackdropVideo
									key={id}
									autoPlay
									loop
									type="video/mp4"
									mute
									src={blogPost.vid}
									alt="Blog Video"
								/>
							</PostBackdrop>
							<ContentWrapper key={id}>
								<BlogContent key={id}>
									<BlogTitle key={id}>
										{blogPost.title}
									</BlogTitle>
									<BlogBody key={id}>
										{blogPost.body}
									</BlogBody>
								</BlogContent>
							</ContentWrapper>
						</PostWrapper>
					);
				})}

				{/* <BlogPost>
					<PostWrapper>
						<PostBackdrop>
							<BackdropVideo
								autoPlay
								loop
								type="video/mp4"
								mute
								alt="Blog Video"
								src={require("../../../assets/videos/BlogBackdrops/Exposure.mp4")}
							/>
						</PostBackdrop>
						<ContentWrapper>
							<BlogContent>
								<BlogTitle>This is the title</BlogTitle>
								<BlogBody>This is the post</BlogBody>
							</BlogContent>
						</ContentWrapper>
					</PostWrapper>
					<PostWrapper>
						<PostBackdrop>
							<BackdropVideo
								autoPlay
								loop
								type="video/mp4"
								mute
								alt="Blog Video"
								src={require("../../../assets/videos/BlogBackdrops/Therapy.mp4")}
							/>
						</PostBackdrop>
						<ContentWrapper>
							<BlogContent>
								<BlogTitle>This is the title</BlogTitle>
								<BlogBody>This is the post</BlogBody>
							</BlogContent>
						</ContentWrapper>
					</PostWrapper>
				</BlogPost> */}

				{/* <BlogPost>
							<PostBackdrop>
								<BackdropVideo
									autoPlay
									loop
									type="video/mp4"
									mute
									alt="Blog Video"
									src={require("../../../assets/videos/BlogBackdrops/Therapy.mp4")}
								/>
							</PostBackdrop>

							<BlogContent>
								<BlogTitle>This is the title</BlogTitle>
								<BlogBody>This is the post</BlogBody>
							</BlogContent>
						</BlogPost> */}
				{/* </BlogShell> */}

				{/* <BlogPost>
					<PostBackdrop>
						<BackdropVideo
							autoPlay
							loop
							type="video/mp4"
							mute
                            alt="Blog Video"
							src={require("../../../assets/videos/BlogBackdrops/Exposure.mp4")}
						/>
					</PostBackdrop>

					<BlogContent>
						<BlogTitle></BlogTitle>
						<BlogBody></BlogBody>
					</BlogContent>
				</BlogPost> */}
				{/* </BlogWrapper> */}
			</BlogContainer>
		</>
	);
};

export default Blog;
