export default async function AsyncHandler<T>(func: () => Promise<T>) {
  let promise = func();
  try {
    let resolution = await promise;
    return { resolution };
  } catch (err) {
    let error = err;
    return { error };
  }
}
