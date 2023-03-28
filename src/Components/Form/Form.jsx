import React,{useState} from "react";

export default function Form() {
const [text, setText] = useState("");
const [negativePrompt, setNegativePrompt] = useState("");
const [width, setWidth] = useState(0);
const [height, setHeight] = useState(0);
const [samples, setSamples] = useState(0);

const handleSubmit = async(e) => {
  try {
    e.preventDefault();
  const data=await fetch("https://stablediffusionapi.com/api/v3/text2img", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      key:"obPMpDYKHDmlnKzAxma78obdyt5KbzhMsjFadygVRx7I9RjVwkBTvtRAPxfw",
      prompt:text,
      negative_prompt:negativePrompt,
      width,
      height,
      samples,
      num_inference_steps:20,
      seed:null,
      guidance_scale:7.5,
      safety_checker:"yes",
      webhook:null,
      track_id:null

    }),
  });
  const res=await data.json();
  console.log(res);
    
  } catch (error) {
    console.log(error);
  }
  
};


    return(<>
    <h1 className="font-bold text-center my-8 text-3xl">Enter Text to Generate Image</h1>
    <form class="max-w-3xl mx-auto mt-8">
  <div class="mb-4">
    <label class="block text-gray-700 text-sm font-bold mb-2" for="text">
      Text
    </label>
    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="text" type="text" placeholder="Enter the text" required onChange={(e)=>setText(e.target.value)}/>
  </div>
  <div class="mb-4">
    <label class="block text-gray-700 text-sm font-bold mb-2" for="negative_prompt">
      Negative Prompt
    </label>
    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="negative_prompt" type="text" placeholder="Enter the negative prompt" required onChange={(e)=>setNegativePrompt(e.target.value)}/>
  </div>
  <div class="mb-4">
    <label class="block text-gray-700 text-sm font-bold mb-2" for="width">
      Width
    </label>
    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="width" type="number" placeholder="Enter the width" required onChange={(e)=>setWidth(e.target.value)}/>
  </div>
  <div class="mb-4">
    <label class="block text-gray-700 text-sm font-bold mb-2" for="height">
      Height
    </label>
    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="height" type="number" placeholder="Enter the height" required onChange={(e)=>setHeight(e.target.value)}/>
  </div>
  <div class="mb-4">
    <label class="block text-gray-700 text-sm font-bold mb-2" for="samples">
      Samples
    </label>
    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="samples" type="number" placeholder="Enter the number of samples" required onChange={(e)=>setSamples(e.target.value)}/>
  </div>
  <div class="flex items-center justify-between">
    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit" onClick={handleSubmit}>
      Generate
    </button>
  </div>
</form></>)
}

