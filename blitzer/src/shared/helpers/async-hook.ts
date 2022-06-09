import { group } from 'console';

export type AsyncHookParam<T> = (() => Promise<T>) | Promise<T>;

export default async function AsyncHook<T>(
  asyncEntity: AsyncHookParam<T>,
): Promise<[T, any]> {
  let result: T;
  let error: any;

  try {
    result =
      asyncEntity instanceof Function ? await asyncEntity() : await asyncEntity;
  } catch (err) {
    error = err;
  }

  return [result, error];
}


