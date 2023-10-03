/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	pagesDir: 'src/pages',
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "i.imgflip.com",
				port: "",
				pathname: "/**",
			},
		],
	},
};

module.exports = nextConfig;