import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import webIcon from "../images/services/web-development-icon.svg";
import mobileIcon from "../images/services/mobile-development-icon.svg";
import productdesignIcon from "../images/services/product-design-icon.svg";
import blockchainIcon from "../images/services/blockchain-icon.svg";
import immg from "../images/cat-and-human-illustration.svg";
import { FiArrowRightCircle } from "react-icons/fi";
import box1Img from "../images/26824.jpg";
import verifiedlogo from "../images/verifiedlogo.svg";
import sect2rounded from "../images/section2-rounded.svg";

function IndexPage() {
  return (
    <Layout className="flex flex-col">
      <SEO
        title="Home"
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
      />

      <section class="container mx-auto m-32 text-center">
        <p class="text-8xl font-medium m-2 py-24 ">
          Xeory is a Software
          <br /> development company.
        </p>
        <p class="text-3xl font-light  m-2 color-gray">
          Have an idea? We will develop and help you release it.
        </p>
      </section>
      <div className="flex flex-col justify-between p-4 md:p-8 section1 container hover:shadow-lg">
        <h2 className="font-light text-left text-8xl inline-block text-white">
          <br />
          Looking for a blockchain based <br />
          supply chain solution?
        </h2>
        <br />
        <p className="font-light text-left text-2xl inline-block text-white">
          Share your challenge with our team and we’ll work with you to deliver
          a revolutionary digital product.
        </p>
        <button class="shadow primaryBtn rounded float-left hover:text-blue hover:shadow-lg">
          Download Report
          <FiArrowRightCircle className="hover:text-green text-2xl align-middle font-light btnIcon" />
        </button>
        <br /> <br /> <br /> <br />
      </div>

      <section class="container flex boxes2 ">
        <div class="flex-1 flex-col boxes-small shadow box-col">
          <span class="upper-content">
            <p class="text-4xl"> Looking for a cryptocurrency exchange?</p>
            <p class="text-1xl my-6">
              {" "}
              Get your blockchain developed and launched with our expertise.
            </p>
            <button class="shadow primaryBtn rounded float-left hover:text-blue hover:shadow-lg">
              Estimate Project
              <FiArrowRightCircle className="hover:text-green text-2xl align-middle font-light btnIcon" />
            </button>
          </span>
          <br />
        </div>
        <div class="flex-1 boxes-small shadow box-col2">
          NEW
          <span class="upper-content">
            <p class="text-4xl">Xeory verified</p>
            <p class="text-1xl my-4">
              We verify projects and award Xeory verification.
            </p>
            {/* <button class="shadow primaryBtn rounded float-left hover:text-blue hover:shadow-lg">Estimate Project<FiArrowRightCircle className="hover:text-green text-2xl align-middle font-light btnIcon"/></button> */}

            <img src={verifiedlogo} class="my-12" width={200} />
          </span>
        </div>
      </section>
      <section class="section2-outer">
        <div className="max-w-full py-4">
          <div class="">

          <h1 className="text-center py-12">Services we offer</h1>

          </div>
          
          <div className="card-section">
            <div className="card-box shadow text-center rounded-lg hover:shadow-md">
              <img src={webIcon} className="service-icon" />
              <br />
              <p class="text-2xl my-4"> Web Development</p>
              <p class="text-xl font-light">
                We provide both back-end and front-end development. Our teams
                build web applications powered by bulletproof code, with
                stunning interfaces based on responsive web design.
              </p>
            </div>
            <div className="card-box shadow text-center rounded hover:shadow-md">
              <img src={mobileIcon} className="service-icon" />
              <br />
              <p class="text-2xl my-4"> Mobile Development</p>
              <p class="text-xl font-light">
                We provide both back-end and front-end development. Our teams
                build web applications powered by bulletproof code, with
                stunning interfaces based on responsive web design.
              </p>
            </div>
            <div className="card-box shadow text-center rounded hover:shadow-md">
              <img src={productdesignIcon} className="service-icon" /> <br />
              <p class="text-2xl my-4">Product Design</p>
              <p class="text-xl font-light">
                We provide both back-end and front-end development. Our teams
                build web applications powered by bulletproof code, with
                stunning interfaces based on responsive web design.
              </p>
            </div>
            <div className="card-box shadow text-center rounded hover:shadow-md">
              <img src={blockchainIcon} className="service-icon" /> <br />
              <p class="text-2xl my-4">Blockchain Development</p>
              <p class="text-xl font-light">
                We provide both back-end and front-end development. Our teams
                build web applications powered by bulletproof code, with
                stunning interfaces based on responsive web design.
              </p>
            </div>
          </div>

          <br />
          <br />
        </div>
      </section>
      <br />

      <div className="flex flex-col max-w-full mx-auto p-4 md:p-8 section3">
        <h2 className="font-light text-center text-8xl inline-block text-dark">
          <br />
          We have excellence, <br /> agility and innovation embedded in our DNA
        </h2>
        <br />
        <p className="font-light text-center text-2xl inline-block text-dark">
          Share your challenge with our team and we’ll work with you to deliver
          a revolutionary digital product.
        </p>
        <button class="shadow primaryBtn blueBtn rounded hover:shadow-lg" onClick="">
          Estimate Project{" "}
          <FiArrowRightCircle className="hover:text-green text-2xl align-middle text-white btnIcon" />
        </button>
        <br />

        {/* <div className="grid-container shadow rounded">
          <div className="grid-item1">
            <img src={immg} />
          </div>
          <div className="grid-item2 card">
            <p className="font-bold text-4xl text-dark">Supply Chain</p>
            <p className="font-light text-2xl text-dark">
              Share your challenge with our team and we’ll work with you to
              deliver a revolutionary digital product.
            </p>
          </div>
        </div> */}

        {/* <div className="grid-container shadow rounded grid-container-flipped">
          <div className="grid-item1">
            <img src={immg} />
          </div>
          <div className="grid-item2 card">
            <p className="font-bold text-4xl text-dark">Supply Chain</p>
            <p className="font-light text-2xl text-dark">
              Share your challenge with our team and we’ll work with you to
              deliver a revolutionary digital product.
            </p>
          </div>
        </div>
        <div className="grid-container shadow rounded">
          <div className="grid-item1">
            <img src={immg} />
          </div>
          <div className="grid-item2 card">
            <p className="font-bold text-4xl text-dark">Supply Chain</p>
            <p className="font-light text-2xl text-dark">
              Share your challenge with our team and we’ll work with you to
              deliver a revolutionary digital product.
            </p>
          </div>
        </div> */}
      </div>
      <div id="form" className="flex flex-col justify-between max-w-full mx-auto p-12 md:p-8 section-form">
        <p className="font-light text-4xl text-white text-center py-12">
          Let's discuss about your project
        </p>
        <br />
        <form className="mx-auto md:w-1/2">
          <label
            className="block font-bold mb-2 text-xl uppercase text-white"
            htmlFor="first-name"
            data-netlify="true"
            method="post"
            name="contact"
            data-netlify-honeypot="bot-field"
          >
            Name
          </label>

          <input
            className="appearance-none block mb-6 p-3 rounded-md text-white w-full"
            id="first-name"
            type="text"
            placeholder="Your Name"
            name="name"
          />

<label
            className="block font-bold mb-2 text-xl uppercase text-white"
            htmlFor="first-email"
          >
            Email
          </label>

          <input
            className="appearance-none block mb-6 p-3 rounded-md text-white w-full"
            id="first-email"
            type="email"
            name="Email"
            placeholder="yourmail@mail.com"
          />


          <label
            className="block font-bold mb-2 text-xl uppercase text-white"
            htmlFor="last-name"
          >
            Company
          </label>

          <input
            className="appearance-none block mb-6 p-3 rounded-md text-white w-full"
            id="company"
            type="text"
            placeholder="Companyname"
            name="CompanyName"
          />

          <label
            className="block font-bold mb-2 text-xluppercase text-white"
            htmlFor="message"
          >
            Message
          </label>

          <textarea
            className="appearance-none mb-6 p-3 rounded-md text-white w-full"
            placeholder="Say something..."
            rows="8"
            name="Message"
          />

          <button className=" primaryBtn rounded hover:text-blue hover:shadow-lg">
            Submit
          </button>
        </form>
      </div>
    </Layout>
  );
}

export default IndexPage;
