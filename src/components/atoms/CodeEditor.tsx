import MonacoEditor from "@monaco-editor/react";

type EditorConfig = {
  theme: "light" | "dark";
  autocomplete: boolean;
};

type CodeEditorProps = {
  code: string;
  setCode: (value: string) => void;
  language: string;
  config: EditorConfig;
};

export default function CodeEditor({
  code,
  setCode,
  language,
  config,
}: CodeEditorProps) {
  const monacoTheme = config.theme === "dark" ? "vs-dark" : "vs";

  return (
    <div className="rounded-xl overflow-hidden border dark:border-gray-800 dark:bg-white/[0.03] ">
      <MonacoEditor
        height="350px"
        language={language}
        theme={monacoTheme}
        value={code}
        onChange={(value) => setCode(value || "")}
        options={{
        fontSize: 14,
        minimap: { enabled: false },
        automaticLayout: true,
        quickSuggestions: config.autocomplete,
        suggestOnTriggerCharacters: config.autocomplete,
        wordBasedSuggestions: config.autocomplete
            ? "allDocuments"
            : "off",
        parameterHints: { enabled: config.autocomplete },
        tabCompletion: config.autocomplete ? "on" : "off",
        }}
      />
    </div>
  );
}