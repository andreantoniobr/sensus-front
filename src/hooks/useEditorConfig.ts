import { useEffect, useState } from "react";

export type EditorConfig = {
  theme: "light" | "dark";
  autocomplete: boolean;
};

const DEFAULT_CONFIG: EditorConfig = {
  theme: "dark",
  autocomplete: false,
};

export function useEditorConfig() {
  const [config, setConfig] = useState<EditorConfig>(() => {
    try {
      const saved = localStorage.getItem("editorConfig");
      return saved ? JSON.parse(saved) : DEFAULT_CONFIG;
    } catch {
      return DEFAULT_CONFIG;
    }
  });

  // 💾 salvar sempre que mudar
  useEffect(() => {
    localStorage.setItem("editorConfig", JSON.stringify(config));
  }, [config]);

  return {
    config,
    setConfig,
  };
}