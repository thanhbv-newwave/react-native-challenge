export function logger(
  log: any,
  invoker?: string,
  title?: string,
  error?: string,
) {
  //?Add any logger service here if required for prod.
  if (__DEV__) {
    title && console.log(`TITLE: ${title}.`);
    console.log(`LOG: ${log}.`);
    error && console.log(`Error: ${error}.`);
    console.log(`Coming from : ${invoker}.`);
  }
}
