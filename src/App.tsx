import { Link } from "react-router-dom";
import { useSketchPages } from "./SketchPageContext";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const App = () => {
  const sketchPages = useSketchPages();

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">Creative Coding Gallery</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sketchPages.map((page, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>
                <Link to={page.pagePath} className="text-lg hover:underline">
                  {page.title}
                </Link>
              </CardTitle>
            </CardHeader>
            {page.imagePath && (
              <CardContent className="flex justify-center items-center">
                <img
                  className="rounded-lg object-cover"
                  src={page.imagePath}
                  alt={page.title}
                  width={200}
                  height={200}
                />
              </CardContent>
            )}
          </Card>
        ))}
      </div>
    </div>
  );
};

export default App;
