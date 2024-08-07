interface ButtonDefaultProps {
  children: React.ReactNode
  className?: string;
}

export const Button = (props: ButtonDefaultProps) => {
  const baseClass = 'max-w-xl w-full py-5 text-2xl font-medium text-primary shadow-button-cta bg-white rounded-xl';
  const classes = `${baseClass} ${props.className}`;

  return (
    <button className={classes}>{props.children}</button>
  )
}