import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
import Header from "./header";
function Layout({ children }) {
  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <div className=" font-sans min-h-screen text-grey-darkest .max-w-full">
       
          <Header siteTitle={data.site.siteMetadata.title} />
       

          <div className="w-full">
            {children}
          </div>
          

          <footer className="bg-black">
            <div className="flex justify-between max-w-xl mx-auto p-4 md:p-8 text-sm">
              <p className="text-white">
                Copyright@2019{" "}
                <a
                  href=""
                  className="font-bold no-underline text-white"
                >
                  Xeory
                </a>
              </p>

              <p className="text-white">
              Made with <span className="text-red">♥</span> from Australia
              </p>
            </div>
          </footer>
        </div>
      )}
    />
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
