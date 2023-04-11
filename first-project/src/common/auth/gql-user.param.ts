import { createParamDecorator } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';

export const GqlUserId = createParamDecorator(
  (data, context) => {
    const ctx = GqlExecutionContext.create(context);
    return ctx.getContext().req.user.id;
  }
)
