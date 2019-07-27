import React from "react";
import Layout from "../layout";
import Style from "./style";
import Links from "../commonComponents/quickLinks";
import Canvas from "./canvasHeader";

const index = () => {
    return (
        <div>
            <Layout>
                <div className="homePage">
                    <Canvas/>
                    {/*<Links/>*/}
                </div>
            </Layout>
            <Style/>
        </div>

    )

};

export default index