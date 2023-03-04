export function combineClasses(...classes: string[]) {
  return classes.filter(Boolean).join(' ') // filter Boolean is equivalent to filter(item => Boolean(item)). This removes all falsy items from array
}