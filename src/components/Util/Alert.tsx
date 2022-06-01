type AlertProps = {
  children?: React.ReactNode;
  type: 'success' | 'info' | 'warning' | 'error';
};

export const Alert = (props: AlertProps) => {
  return <div className={`alert alert-${props.type}`}>{props.children}</div>;
};
