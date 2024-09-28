import { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { getStatusById, langStarterCode } from "@/lib/editor";
import { useSubmitSolutionMutation } from "@/store/api";
import { useToast } from "@/components/ui/use-toast";
import { Spinner } from "@/components/ui/spinner";

import AceEditor from "react-ace";
import "ace-builds/src-min-noconflict/ext-searchbox";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-csharp";
import "ace-builds/src-noconflict/mode-fsharp";
import "ace-builds/src-noconflict/mode-swift";
import "ace-builds/src-noconflict/mode-c9search";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/ext-language_tools";

type Lang = keyof typeof langStarterCode;
const EditorPage = () => {
  const { toast } = useToast();

  const [lang, setLang] = useState<Lang>("javascript");
  const [code, setCode] = useState<string>(langStarterCode[lang]);

  const [submit, result] = useSubmitSolutionMutation();

  useEffect(() => {
    setCode(langStarterCode[lang]);
  }, [lang]);

  const submitCode = async () => {
    try {
      const res = await submit({ code, lang }).unwrap();
      // {"id":1130914,"status":11,"testPassed":6,"timeUsed":156,"memoryUsed":0,"error":" ","message":"ya0WGoCQOSNlZTPMroRgVTqc8GZlpWMoVmUhrOrz2R5cWyY4GjF2BW5rm7HZF3SG"}
      if (res?.status === 11) {
        toast({
          variant: "default",
          title: "Congrats! 🎉🎉🎉 You've successfully solved this challenge!",
          description: (
            <>
              <p>Here is your token to get to the next level: </p>
              <p>{res?.message}</p>
            </>
          ),
        });
      } else {
        toast({
          variant: "destructive",
          title: "Something went wrong",
          description: (
            <>
              <p>{getStatusById(res?.status)}</p>
              {res?.error.trim() && <p>{res.error}</p>}
            </>
          ),
        });
      }
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Something went wrong",
        description: error.data.errors[""][0],
      });
    }
  };

  return (
    <section className="w-full h-full overflow-auto border-[2px] border-gray-500 dark:border-slate-300 rounded-xl p-5 flex gap-5 items-center backdrop-blur-xl">
      <section className="h-full flex-1 p-3 flex flex-col gap-3 overflow-x-auto">
        <h1 className="text-3xl font-bold">Шифровка</h1>
        <p className="text-xs">Ограничение по времени: 1 сек</p>
        <p className="text-xs">Ограничение по памяти: 256 Мб</p>
        <p>
          Два агента обмениваются шифровками текста. Текст идет без разделителей
          и состоит строчных символов латинского алфавита. Каждому строчному
          символу латинского алфавита соответствует определенный код - целое
          число: «a»-97, «b»-98, «c»-99 … «z»-122 . Символы текста шифруются
          следующим образом – над каждым кодом символа делается операция XOR с
          определённым целым положительным числом N. После того как текст
          зашифрован, агент оставляет зашифрованный текст в условленном месте и
          сообщает другому агенту самый часто встречающийся символ из исходного
          текста. Второй агент с помощью этой информации находит значение N и
          расшифровывает текст. Надо написать программу, которая сможет по
          данной информации расшифровывать тексты агентов.
        </p>
        <p className="text-2xl">Формат входных данных</p>
        <p>
          В первой строке записывается самый встречающийся символ из исходного
          не зашифрованного текста. Во второй строке число M (1≤M≤10000),
          количество символов в тексте. Далее, на следующей строке идет
          зашифрованный текст. Он представляет собой M целых чисел разделенных
          пробелом. Числа – результат операции XOR и числа N(1≤N≤255) над каждой
          буквой исходного текста. Формат выходных данных Требуется вывести
          расшифрованный исходный текст
        </p>
        <p className="text-2xl">Формат выходных данных</p>
        <p>Требуется вывести расшифрованный исходный текст.</p>
        <p className="text-2xl">Пример</p>
        <table className="border-collapse">
          <thead>
            <tr>
              <th className="border-[2px] border-gray-500 dark:border-slate-300">
                Входные данные
              </th>
              <th className="border-[2px] border-gray-500 dark:border-slate-300">
                Выходные данные
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border-[2px] border-gray-500 dark:border-slate-300 p-3">
                <p>l</p>
                <p>10</p>
                <p>4 9 0 0 3 27 3 30 0 8</p>
              </td>
              <td className="border-[2px] border-gray-500 dark:border-slate-300 p-3">
                <p>helloworld</p>
              </td>
            </tr>
            <tr>
              <td className="border-[2px] border-gray-500 dark:border-slate-300 p-3">
                <p>a</p>
                <p>7</p>
                <p>6 5 10 5 10 5</p>
              </td>
              <td className="border-[2px] border-gray-500 dark:border-slate-300 p-3">
                <p>banana</p>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
      <section className="h-full flex-1 flex flex-col gap-3">
        <div className="w-full flex justify-end gap-5">
          <Select
            onValueChange={(value) => setLang(value as Lang)}
            defaultValue={lang}
          >
            <SelectTrigger className="w-[200px]">
              <SelectValue placeholder="Language" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="javascript">NodeJS v14.5.0</SelectItem>
              <SelectItem value="csharp">C# (.NET 7)</SelectItem>
              <SelectItem value="java">Java</SelectItem>
              <SelectItem value="python">Python 3.11.x x64</SelectItem>
              <SelectItem value="cpp">GNU C++17 (x64)</SelectItem>
              <SelectItem value="swift">Swift v4.1.3</SelectItem>
              <SelectItem value="fsharp">F# 3.0</SelectItem>
            </SelectContent>
          </Select>
          <span className="text-xs">
            This is not fully functional editor. Better to use your own code
            editor and just paste here the solution.
          </span>
        </div>

        <AceEditor
          mode={lang}
          value={code}
          onChange={setCode}
          fontSize={14}
          lineHeight={19}
          highlightActiveLine={true}
          theme="monokai"
          name="code-editor"
          showPrintMargin={false}
          showGutter={true}
          editorProps={{ $blockScrolling: false }}
          setOptions={{
            enableBasicAutocompletion: true,
            enableLiveAutocompletion: true,
            enableSnippets: true,
            showLineNumbers: true,
            tabSize: 4,
          }}
          style={{ width: "100%", flex: 1, borderRadius: "10px" }}
        />
        <Button onClick={submitCode}>
          {result.isLoading ? <Spinner /> : "Submit"}
        </Button>
      </section>
    </section>
  );
};

export default EditorPage;
