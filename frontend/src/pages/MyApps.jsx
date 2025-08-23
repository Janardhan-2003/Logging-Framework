import React from "react";

const MyApps = () => {
  const apps = [
    {
      title: "E-commerce",
      appId: "asdwrq3r2522f343c",
      APIkey: "sd3q4tfq3rc34948fasc393485343",
    },
    {
      title: "Amazon",
      appId: "asdwrq3r2522f343c",
      APIkey: "sd3q4tfq3rc34948fasc393485343",
    },
    {
      title: "Pubg",
      appId: "asdwrq3r2522f343c",
      APIkey: "sd3q4tfq3rc34948fasc393485343",
    },
    {
      title: "Instagram",
      appId: "asdwrq3r2522f343c",
      APIkey: "4tfq3rc34948fasc393485343",
    },
    {
      title: "X",
      appId: "asdwrq3r2522f343c",
      APIkey: "tfq3rc34948fasc393485343",
    },
  ];

  const handleCopyBtn=(text)=>{
    navigator.clipboard.writeText(text);
    alert('Copied');
  }

  return (
    <div className="text-white">
      <div className="flex justify-between px-6 py-4">
        <h1 className="text-5xl font-medium">Your Applications</h1>
        <button
          type="button"
          className="bg-emerald-950 text-2xl font-mono w-75 h-16 rounded-xl border-0 hover:border hover:border-emerald-800"
        >
          +Add Application
        </button>
      </div>
      <div className="flex flex-col items-center">
        <ul className="flex flex-col justify-between">
          {apps.map(({ title, appId, APIkey }) => (
            <li
              key={appId}
              className="border border-slate-800 mb-8 py-4 px-6 w-2xl h-38 flex flex-col justify-between rounded-2xl"
            >
              <h2 className="text-xl font-medium font-serif pb-4">{title}</h2>
              <div>
                <div className="flex mb-2">
                  <span className="border border-slate-500 w-sm pt-2">
                    {appId}
                  </span>
                  <button
                    type="button"
                    onClick={()=>handleCopyBtn(appId)}
                    className="border px-2 border-slate-500 cursor-pointer bg-green-950"
                  >
                    Copy
                  </button>
                </div>
                <div className="flex mb-2">
                  <span className="border border-slate-500 w-sm pt-2">
                    {"*".repeat(APIkey.length)}
                  </span>
                  <button
                    type="button"
                    onClick={()=>handleCopyBtn(APIkey)}
                    className="border px-2 border-slate-500 cursor-pointer bg-green-950"
                  >
                    Copy
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MyApps;
