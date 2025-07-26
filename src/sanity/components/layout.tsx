import { LayoutProps } from "sanity";

// ComponentType<LayoutProps>

const Layout = (props: LayoutProps) => {
  return (
    <div className="bg-red-300 min-h-screen h-full">
      {props.renderDefault(/* @next-codemod-error 'props' is passed as an argument. Any asynchronous properties of 'props' must be awaited when accessed. */
      props)}
    </div>
  );
}

export default Layout
