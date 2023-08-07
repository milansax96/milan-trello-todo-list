/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['cloud.appwrite.io', 'links.papareact.com']
    },
    typescript: {
        ignoreBuildErrors: true
    }
}

module.exports = nextConfig
