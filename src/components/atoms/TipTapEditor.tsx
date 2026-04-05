import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import Link from "@tiptap/extension-link";
import Underline from "@tiptap/extension-underline";
import TextAlign from "@tiptap/extension-text-align";
import CodeBlockLowlight from "@tiptap/extension-code-block-lowlight";
import { TextStyle } from "@tiptap/extension-text-style";
import Color from "@tiptap/extension-color";

import { createLowlight } from "lowlight";
import javascript from "highlight.js/lib/languages/javascript";
import html from "highlight.js/lib/languages/xml";
import css from "highlight.js/lib/languages/css";

const lowlight = createLowlight();

lowlight.register("js", javascript);
lowlight.register("html", html);
lowlight.register("css", css);


import {
  HiOutlineBold,
  HiOutlineItalic,
  HiOutlineUnderline,
  HiOutlineCodeBracket,
  HiOutlinePhoto,
  HiOutlineLink,
  HiOutlineListBullet,
  HiOutlineBars3BottomLeft,
} from "react-icons/hi2";

const MenuBar = ({ editor }: any) => {
  if (!editor) return null;

  const btn = "p-2 rounded-lg transition";
  const active = "bg-blue-500 text-white";
  const normal =
    "bg-gray-100 dark:bg-white/10 text-gray-700 dark:text-white";

  const addImage = () => {
    const url = prompt("URL da imagem");
    if (url) {
      editor.chain().focus().setImage({ src: url }).run();
    }
  };

  const addLink = () => {
    const url = prompt("URL do link");
    if (url) {
      editor.chain().focus().setLink({ href: url }).run();
    }
  };

  return (
    <div className="flex flex-wrap items-center gap-2 p-2 border-b border-gray-200 dark:border-gray-700">

      {/* Bold */}
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={`${btn} ${editor.isActive("bold") ? active : normal}`}
        title="Negrito"
      >
        <HiOutlineBold />
      </button>

      {/* Italic */}
      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={`${btn} ${editor.isActive("italic") ? active : normal}`}
        title="Itálico"
      >
        <HiOutlineItalic />
      </button>

      {/* Underline */}
      <button
        onClick={() => editor.chain().focus().toggleUnderline().run()}
        className={`${btn} ${editor.isActive("underline") ? active : normal}`}
        title="Sublinhado"
      >
        <HiOutlineUnderline />
      </button>

      {/* Heading */}
      <button
        onClick={() =>
          editor.chain().focus().toggleHeading({ level: 1 }).run()
        }
        className={`${btn} ${
          editor.isActive("heading", { level: 1 }) ? active : normal
        }`}
        title="Título"
      >
        <HiOutlineBars3BottomLeft />
      </button>

      {/* Lista */}
      <button
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={`${btn} ${
          editor.isActive("bulletList") ? active : normal
        }`}
        title="Lista"
      >
        <HiOutlineListBullet />
      </button>

      {/* Código */}
      <button
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        className={`${btn} ${
          editor.isActive("codeBlock") ? active : normal
        }`}
        title="Código"
      >
        <HiOutlineCodeBracket />
      </button>

      {/* Link */}
      <button onClick={addLink} className={`${btn} ${normal}`} title="Link">
        <HiOutlineLink />
      </button>

      {/* Imagem */}
      <button onClick={addImage} className={`${btn} ${normal}`} title="Imagem">
        <HiOutlinePhoto />
      </button>

      {/* 🎨 Cor */}
      <input
        type="color"
        className="w-8 h-8 p-0 border rounded cursor-pointer"
        onChange={(e) =>
          editor.chain().focus().setColor(e.target.value).run()
        }
        title="Cor do texto"
      />

      {/* Reset cor */}
      <button
        onClick={() => editor.chain().focus().unsetColor().run()}
        className="px-2 py-1 text-xs rounded bg-gray-200 dark:bg-white/10"
        title="Remover cor"
      >
        Reset
      </button>
    </div>
  );
};

const TiptapEditor = () => {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
      codeBlock: false, 
    }),
      Image,
      Underline,
      TextStyle,
      Color,
      Link.configure({ openOnClick: false }),    
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
      CodeBlockLowlight.configure({
        lowlight,
      }),
    ],
  });

  return (
    <div className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-white/5">
      <MenuBar editor={editor} />

      <EditorContent
        editor={editor}
        className="p-4 min-h-[200px] text-gray-800 dark:text-white focus:outline-none"
      />
    </div>
  );
};

export default TiptapEditor;