import React from "react";
import ReactDOM from "react-dom";
import { AiFillCloseCircle } from "react-icons/ai";

export default function ContactUsForm({ open }) {
  const [openModel, setOpenModel] = React.useState(open);
  console.log(openModel);

  const Form = () => (
    <div className={`${openModel ? "block " : " hidden"}  transition-all`}>
      <main className=" fixed  top-0 z-[60] flex overflow-hidden bg-white transition-all ">
        <div className="lg:overflow  flex-1 py-10 md:py-12 lg:flex lg:h-screen lg:justify-center">
          <div className="mx-auto max-w-lg flex-1 px-4 text-gray-600">
            <div>
              <div className="flex justify-between">
                <h3 className="text-3xl font-semibold text-gray-800 sm:text-4xl">
                  Get in touch
                </h3>
                <button>
                  <AiFillCloseCircle
                    size="24"
                    onClick={() => {
                      setOpenModel(false);
                    }}
                    className=""
                  />
                </button>
              </div>
              <p className="mt-3">
                We’d love to hear from you! Please fill out the form bellow.
              </p>
            </div>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="space-y-5 md:mt-12 lg:pb-12"
            >
              <div>
                <label className="font-medium">Full name</label>
                <input
                  type="text"
                  required
                  className="mt-2 w-full rounded-lg border bg-transparent px-3 py-2 text-gray-500 shadow-sm outline-none focus:border-gray-800"
                />
              </div>
              <div>
                <label className="font-medium">Email</label>
                <input
                  type="email"
                  required
                  className="mt-2 w-full rounded-lg border bg-transparent px-3 py-2 text-gray-500 shadow-sm outline-none focus:border-gray-800"
                />
              </div>
              <div>
                <label className="font-medium">Phone number</label>
                <div className="relative mt-2">
                  <div className="absolute inset-y-0 left-3 my-auto flex h-6 items-center border-r pr-2">
                    <select className="h-full rounded-lg bg-transparent text-sm outline-none">
                      <option>US</option>
                      <option>ES</option>
                      <option>MR</option>
                    </select>
                  </div>
                  <input
                    type="number"
                    placeholder="+1 (555) 000-000"
                    required
                    className="w-full appearance-none rounded-lg border bg-transparent py-2 pl-[4.5rem] pr-3 shadow-sm outline-none focus:border-gray-800"
                  />
                </div>
              </div>
              <div></div>
              <div>
                <label className="font-medium">Message</label>
                <textarea
                  required
                  className="mt-2 h-36 w-full resize-none appearance-none rounded-lg border bg-transparent px-3 py-2 shadow-sm outline-none focus:border-gray-800"
                ></textarea>
              </div>
              <button className="w-full rounded-lg bg-gray-800 px-4 py-2 font-medium text-white duration-150 hover:bg-gray-700 active:bg-gray-900">
                Submit
              </button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );

  return ReactDOM.createPortal(<Form />, document.getElementById("portal"));
}
