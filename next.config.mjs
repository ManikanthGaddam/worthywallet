/** @type {import('next').NextConfig} */
const nextConfig = {
    exxperimental : {
        serverActions : {
            bodySizeLimit: "5mb",
        },
    },
};

export default nextConfig;
