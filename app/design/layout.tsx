import "@/app/ui/global.css";
export default function DesignLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="design-layout">{children}</div>;
}
