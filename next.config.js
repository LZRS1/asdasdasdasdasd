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
			},
			{
				protocol: "https",
				hostname: "https://l4zarus.space",
			},
			{
				protocol: "https",
				hostname: "https://l4zarus-lzrs2s-projects.vercel.app",
			}
			{
				protocol: "https",
				hostname: "https://l4zarus-git-main-lzrs2s-projects.vercel.app",
			},
			{
				protocol: "https",
				hostname: "https://l4zarus-g0j1nwwqc-lzrs2s-projects.vercel.app",
			}
		],
	},
};

module.exports = nextConfig;
