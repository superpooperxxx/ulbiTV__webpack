const classnames = (...args: any[]): string => {
  const classes: string[] = [];

  for (const arg of args) {
    switch (typeof arg) {
      case 'string':
        classes.push(arg);
        break;
      case 'object': {
        if (!Array.isArray(arg)) {
          Object.entries(arg).forEach(([cls, value]) => {
            if (value) {
              classes.push(cls);
            }
          })
        }
        break;
      }
      default:
        break;
    }
  }

  return classes.join(' ');
};

export default classnames;