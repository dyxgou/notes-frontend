import type { FunctionalComponent } from "preact";
import useColor from "@/components/Table/Notes/hooks/useColor";

type BreadcrumbsProps = {
  colorValue: number;
  range: `${string} - ${string}`;
};

const Breadcrumbs: FunctionalComponent<BreadcrumbsProps> = ({
  colorValue,
  range,
}) => {
  const color = useColor(colorValue);

  return (
    <article className="flex gap-2 items-center font-medium text-gray-500">
      <div
        style={`background-color: ${color};`}
        class="size-3 rounded-full"
      ></div>
      {range}
    </article>
  );
};

export default Breadcrumbs;
