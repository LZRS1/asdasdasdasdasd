/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "https://l4zarus.vercel.app",
			},
			{
				protocol: "http",
				hostname: "http://l4zarus.com",
			}
		],
	},
};

module.exports = nextConfig;
