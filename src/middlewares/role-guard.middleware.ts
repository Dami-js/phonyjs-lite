import { createMethodDecorator, MiddlewareFn } from 'type-graphql';

export const RoleGuard: MiddlewareFn = async (
  { args, context, info },
  next,
) => {
  // perform actions here
  await next();
};

export function AuthGuard() {
  return createMethodDecorator(RoleGuard);
}
