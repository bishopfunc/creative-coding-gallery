import { createContext, useContext, useEffect, useState } from "react";
import { sketchA } from "./sketches/sketchA";
import { sketchB } from "./sketches/sketchB";
import SketchPageWrapper from "./components/SketchPageWrapper";
import type { JSX } from "react";
import type { SketchFunc } from "./utils/types";

type SketchPage = {
  title: string;
  fileName: string;
  sketchFunc: SketchFunc;
  pagePath?: string;
  element?: JSX.Element;
  imagePath?: string;
};

const SketchPageContext = createContext<SketchPage[]>([]);
export const useSketchPages = () => useContext(SketchPageContext);

const validImageExtensions = [".png", ".jpg", ".jpeg", ".gif"];
const isValidImageContent = (contentType: string | null) =>
  contentType?.startsWith("image/");

const findValidImagePath = async (fileName: string): Promise<string> => {
  for (const ext of validImageExtensions) {
    const path = `/sketches/${fileName}${ext}`;
    try {
      const res = await fetch(path, { method: "HEAD" });
      if (res.ok && isValidImageContent(res.headers.get("Content-Type")))
        return path;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (_) {/**/}
  }
  return "/sketches/default.png";
};

const baseSketchPages: Omit<SketchPage, "pagePath" | "element" | "imagePath">[] = [
  { title: "Sketch A", fileName: "sketchA", sketchFunc: sketchA },
  { title: "Sketch B", fileName: "sketchB", sketchFunc: sketchB },
];

export const SketchPageProvider = ({ children }: { children: JSX.Element }) => {
  const [sketchPages, setSketchPages] = useState<SketchPage[]>([]);

  useEffect(() => {
    const initializePages = async () => {
      const enrichedPages = await Promise.all(
        baseSketchPages.map(async (page) => {
          const imagePath = await findValidImagePath(page.fileName);
          return {
            ...page,
            pagePath: `/${page.fileName}`,
            imagePath,
            element: (
              <SketchPageWrapper
                title={page.title}
                sketchFunc={page.sketchFunc}
                fileName={page.fileName}
              />
            ),
          };
        })
      );
      setSketchPages(enrichedPages);
    };

    initializePages();
  }, []);

  return (
    <SketchPageContext.Provider value={sketchPages}>
      {children}
    </SketchPageContext.Provider>
  );
};
