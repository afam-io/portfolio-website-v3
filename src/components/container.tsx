import clsx from 'clsx';

export function Container({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'div'>) {
  return (
    <div
      className={clsx('max-w-7xl  sm:px-6  bg-transparent', className)}
      {...props}
    />
  );
}
