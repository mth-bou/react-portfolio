import { NextConfig } from 'next';

const nextConfig: NextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'media.licdn.com',
				port: '',
			},
		],
	},
};

export default nextConfig;
