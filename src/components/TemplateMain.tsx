interface TemplateMainProps {
  children: any
}

export default function TemplateMain(props: TemplateMainProps) {
  return (
    <main>
      {props.children}
    </main>
  )
}