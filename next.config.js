/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "https://l4zarus.vercel.app",
			},
			{
				protocol: "https",
				hostname: "https://l4zarus.site",
			}
		],
	},
};

module.exports = nextConfig;
