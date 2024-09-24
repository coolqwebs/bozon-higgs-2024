import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism.css";
import { useState } from "react";

const EditorPage = () => {
  const [code, setCode] = useState(`function add(a, b) {\n  return a + b;\n}`);
  console.log(languages);

  return (
    <section className="w-full h-full border-[2px] border-gray-500 dark:border-slate-300 rounded-xl p-5 flex flex-col items-center backdrop-blur-xl">
      {/* <button onClick={showValue}>Show value</button> */}
      <Editor
        value={code}
        onValueChange={(code: string) => setCode(code)}
        highlight={(code: string) => highlight(code, languages.js)}
        padding={10}
        style={{
          fontFamily: '"Fira code", "Fira Mono", monospace',
          fontSize: 12,
        }}
      />
    </section>
  );
};

export default EditorPage;
