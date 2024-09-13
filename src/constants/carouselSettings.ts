export const featuredResponsive = {
	superLargeDesktop: {
		// the naming can be any, depends on you.
		breakpoint: { max: 4000, min: 1300 },
		items: 4,
		slidesToSlide: 0.5,
	},
	desktop: {
		breakpoint: { max: 1300, min: 1024 },
		items: 3,
		slidesToSlide: 1,
	},
	tablet: {
		breakpoint: { max: 1024, min: 655 },
		items: 2,
		slidesToSlide: 0.5,
	},
	mobile: {
		breakpoint: { max: 655, min: 0 },
		items: 1,
		slidesToSlide: 1,
		partialVisibilityGutter: 115,
	},
};

export const eventResponsive = {
	superLargeDesktop: {
		// the naming can be any, depends on you.
		breakpoint: { max: 4000, min: 1300 },
		items: 1,
		slidesToSlide: 1,
		partialVisibilityGutter: 700,
	},
	desktop: {
		breakpoint: { max: 1300, min: 1024 },
		items: 1,
		slidesToSlide: 1,
		partialVisibilityGutter: 290,
	},
	tablet: {
		breakpoint: { max: 1024, min: 655 },
		items: 1,
		slidesToSlide: 1,
		partialVisibilityGutter: 190,
	},
	mobile: {
		breakpoint: { max: 655, min: 0 },
		items: 1,
		slidesToSlide: 1,
		partialVisibilityGutter: 90,
	},
	smallMobile: {
		breakpoint: { max: 360, min: 0 },
		items: 1,
		slidesToSlide: 1,
		partialVisibilityGutter: 40,
	},
};

export const partnerResponsive = {
	superLargeDesktop: {
		// the naming can be any, depends on you.
		breakpoint: { max: 4000, min: 1300 },
		items: 8,
		slidesToSlide: 1,
	},
	desktop: {
		breakpoint: { max: 1300, min: 1024 },
		items: 8,
		slidesToSlide: 1,
	},
	tablet: {
		breakpoint: { max: 1024, min: 655 },
		items: 8,
		slidesToSlide: 1,
	},
	mobile: {
		breakpoint: { max: 655, min: 0 },
		items: 8,
		slidesToSlide: 1,
	},
};
