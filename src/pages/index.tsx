import type { NextPage } from "next";
import Head from "next/head";
import { trpc } from "../utils/trpc";

const Home: NextPage = () => {
  const hello = trpc.useQuery(["example.hello", { text: "from tRPC" }]);

  return (
    <>
      <Head>
        <title>HostedPastebin</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="p-5">
          <div className="flex flex-row h-full w-full m-auto">
            <div className="w-3/4 flex flex-row justify-center">
              <div className="w-full">
                <textarea className="resize-none border rounded p-4 h-96 w-full"></textarea>
              </div>
            </div>
            <div className="w-full max-w-xs ml-5">
              <div className="h-full w-full border rounded"></div>
            </div>
          </div>
          <div>
            <h2 className="border-b-4 p-2">Optinal Paste Settings</h2>
            <div>
              <div className="max-w-xs">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Paste Expiration
                  </label>
                  <select
                    id="expiration"
                    name="expiration"
                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  >
                    <option>Never</option>
                    <option>10 Minutes</option>
                    <option>1 Hour</option>
                    <option>1 Day</option>
                    <option>1 Week</option>
                    <option>1 Month</option>
                    <option>1 Year</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Paste Visibility
                  </label>
                  <select
                    id="visibility"
                    name="visibility"
                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  >
                    <option>Public</option>
                    <option>Unlisted</option>
                    <option>Private</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Paste Title
                  </label>
                  <input
                    type="text"
                    name="title"
                    id="title"
                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Paste Submit
                  </label>
                  <button
                    type="submit"
                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  >
                    Create Paste
                  </button>
                </div>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
