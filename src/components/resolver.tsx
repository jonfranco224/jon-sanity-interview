import { LogoBar } from "./LogoBar";
import { ProductDescription } from "./ProductDescription";

export const resolveComponents = (data: unknown) => {
  if (!Array.isArray(data)) {
    console.error("Invalid data format")
    return null
  }

  const DefaultComponent = ({ message }: { message?: string }) => (
    <div>{message || "No component found"}</div>
  );

  const componentMap: {
    productDescription: React.ComponentType<{ title: string; description: string }>;
  } = {
    productDescription: ProductDescription,
    logoBar: LogoBar
  };

  return data.map((entry, index) => {
    if ("fields" in entry && typeof entry.fields === "object") {
      const componentId = entry.sys.contentType.sys.id as keyof typeof componentMap
      const componentData = entry.fields

      const Component = componentMap[componentId] || DefaultComponent

      return <Component key={index} {...componentData} />
    } else {
      console.error("Invalid entry structure", entry)
      return null
    }
  })
}