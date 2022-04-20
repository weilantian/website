import React from "react";
import Layout from "../components/layout";
import Hero from "../components/home/hero";
import RecentArticles from "../components/home/recentArticles";

const IndexPage = () => {
    return <Layout>
        <Hero/>
        <RecentArticles/>
    </Layout>
}

export default IndexPage
