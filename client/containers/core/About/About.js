import React, { Fragment } from "react";

const About = props => {
	return (
		<Fragment>
			<div className="background-about background-img-full"></div>
			<h1 className={`heading `}>About</h1>
			<section className="section section-about">
				<article className="article article-about">
					<h1>Mern Stack Projects</h1>
					<p>
						After Reading the Book{" "}
						<strong className="accent">
							Mern Stack React Projects
						</strong>{" "}
						I build this{" "}
						<strong className="accent"> Web Application</strong>{" "}
						Using the concepts of the book, but using all the new
						technologies that we have in the ReactJs World.
					</p>
					<p>
						I use this Web Application as a skelleton for building
						all kinds of different webapplications
					</p>
					<p>
						If you would like to use this Web Application for your
						projects. do so freely. Just say Hello and let me know
						how did this help you. you can visit my website{" "}
						<strong className="accent para-link">
							<a
								href="https://bythealphabet.com/"
								target="_blank"
							>
								bythealphabet.com
							</a>
						</strong>
					</p>
					<p>
						My Name is{" "}
						<strong className="accent">Isaac Lucas</strong>, Im a
						web developer for 2 year now. Living on a Beautifull
						Dutch Caribbean Island.
					</p>
				</article>
			</section>
		</Fragment>
	);
};

export default About;
